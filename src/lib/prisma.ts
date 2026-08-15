import { PrismaClient } from "../../generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import mariadb from "mariadb";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const dbUrlStr = process.env.DATABASE_URL as string;
const parsedUrl = new URL(dbUrlStr);
const adapterConfig = {
  host: parsedUrl.hostname === 'localhost' ? '127.0.0.1' : parsedUrl.hostname,
  port: parseInt(parsedUrl.port || "3306", 10),
  user: parsedUrl.username,
  password: parsedUrl.password, // Correctly pass empty string for empty passwords
  database: parsedUrl.pathname.substring(1),
  connectionLimit: 5
};
const adapter = new PrismaMariaDb(adapterConfig);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export type * from "../../generated/prisma/client";
