export const dynamic = 'force-dynamic'; // Forces render on request & NOT BUILD

import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse  } from "next/server";

//API route for creating a user
export async function POST(request: NextRequest){
    const body = await request.json()
    const { name, email, password } = body
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            name, email, hashedPassword
        }
    })
    return NextResponse.json(user)
}