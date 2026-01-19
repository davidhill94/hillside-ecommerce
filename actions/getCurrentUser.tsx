import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/libs/prismadb";
import { NextRequest } from "next/server";

//generaring session
export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser(req: NextRequest) {
  try {
    const session: any = await getServerSession(authOptions);

    //checks to see if session has a user email logged in
if(!session?.user.email){
    return null
}
const currentUser = await prisma.user.findUnique({
    where: {
        email: session?.user?.email
    }
})
if(!currentUser){
    return null
}
return {
    ...currentUser,
    createdAt: currentUser.createdAt.toISOString(),
    updatedAt: currentUser.updatedAt.toISOString(),
    emailVerified: currentUser.emailVerified?.toISOString() || null
}

  } catch (error: any) {
    return null;
  }
}
