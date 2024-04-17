"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export const dynamic = "force-dynamic";

export async function getSessionToken() {
  const session = await getServerSession(authOptions);
  return session?.accessToken;
}
