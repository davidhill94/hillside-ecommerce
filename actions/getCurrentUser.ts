"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/libs/prismadb";
import { NextRequest } from "next/server";

export async function getCurrentUser(req?: NextRequest) {
  try {
    let session;

    // API Route (req provided)
    if (req) {
      const nodeReq = {
        headers: Object.fromEntries(req.headers),
      } as any;

      const nodeRes = {
        getHeader() {},
        setHeader() {},
      } as any;

      session = await getServerSession(nodeReq, nodeRes, authOptions);
    } 
    // Server Component
    else {
      session = await getServerSession(authOptions);
    }

    if (!session?.user?.email) return null;

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) return null;

    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      emailVerified: user.emailVerified?.toISOString() || null,
    };
  } catch (err) {
    console.error("getCurrentUser error:", err);
    return null;
  }
}