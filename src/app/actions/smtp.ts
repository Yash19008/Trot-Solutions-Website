"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { requireAuth } from "@/lib/server-auth";

const ALLOWED_SMTP_HOSTS_PATTERN = /^[a-zA-Z0-9.\-]+$/;

export async function updateSmtpConfig(data: {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password?: string;
  fromEmail: string;
  notifyEmail?: string;
}) {
  await requireAuth();

  // Validate fields individually — never spread raw input into Prisma
  const host = String(data.host || "").trim();
  const port = Number(data.port);
  const secure = Boolean(data.secure);
  const user = String(data.user || "").trim();
  const fromEmail = String(data.fromEmail || "").trim();
  const notifyEmail = data.notifyEmail ? String(data.notifyEmail).trim() : null;

  if (!ALLOWED_SMTP_HOSTS_PATTERN.test(host)) throw new Error("Invalid SMTP host format.");
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("Invalid port number.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) throw new Error("Invalid from email.");
  if (notifyEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(notifyEmail)) throw new Error("Invalid notify email.");

  const existingConfig = await prisma.smtpConfig.findFirst();

  if (existingConfig) {
    // Explicit fields — never `...data` spread
    const updatePayload: {
      host: string; port: number; secure: boolean; user: string;
      fromEmail: string; notifyEmail: string | null; password?: string;
    } = { host, port, secure, user, fromEmail, notifyEmail };

    if (data.password && data.password.trim().length > 0) {
      updatePayload.password = data.password.trim();
    }
    await prisma.smtpConfig.update({
      where: { id: existingConfig.id },
      data: updatePayload,
    });
  } else {
    if (!data.password || data.password.trim().length === 0) {
      throw new Error("Password is required when creating SMTP config for the first time.");
    }
    await prisma.smtpConfig.create({
      data: { host, port, secure, user, fromEmail, notifyEmail, password: data.password.trim() },
    });
  }

  revalidatePath("/admin/settings");
}
