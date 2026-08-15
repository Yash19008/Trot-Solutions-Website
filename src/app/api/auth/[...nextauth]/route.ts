import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
