import { PrismaClient } from "./generated/prisma/client";
import bcrypt from "bcryptjs";
import 'dotenv/config';

async function main() {
  const prisma = new PrismaClient();

  const email = "admin@trotsolutions.com";
  const password = "admin";
  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await prisma.adminUser.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: {
      email,
      password: hashedPassword,
      name: "Super Admin",
    },
  });

  console.log("Admin user created/updated:", admin.email);
}

main().catch(console.error);
