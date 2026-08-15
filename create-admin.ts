import { PrismaClient } from "./generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import bcrypt from "bcryptjs";
import 'dotenv/config';
async function main() {
  const dbUrlStr = process.env.DATABASE_URL as string;
  const parsedUrl = new URL(dbUrlStr);

  const adapterConfig = {
    host: parsedUrl.hostname === 'localhost' ? '127.0.0.1' : parsedUrl.hostname,
    port: parseInt(parsedUrl.port || "3306", 10),
    user: decodeURIComponent(parsedUrl.username),
    password: decodeURIComponent(parsedUrl.password), // Crucial fix: decode %23 back to # for the driver
    database: parsedUrl.pathname.substring(1),
    connectionLimit: 5
  };

  const adapter = new PrismaMariaDb(adapterConfig);
  const prisma = new PrismaClient({ adapter });
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