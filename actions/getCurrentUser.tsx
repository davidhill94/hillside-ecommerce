// getCurrentUser.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/libs/prismadb";
import { NextRequest } from "next/server";

interface CurrentUser {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: string | null;
  image?: string | null;
  role: "USER" | "ADMIN";
  createdAt: string;
  updatedAt: string;
}

// Optional `req` parameter allows this to work for pages or API routes
export async function getCurrentUser(req?: NextRequest): Promise<CurrentUser | null> {
  try {
    // Pass req only if provided (needed for API routes)
    const session = await getServerSession(authOptions);

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
  } catch (error) {
    console.error("getCurrentUser error:", error);
    return null;
  }
}
