"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { requireAuth } from "@/lib/server-auth";

const ALLOWED_STATUSES = ["open", "closed"] as const;

export async function createCareer(data: {
  title: string;
  position: string;
  image?: string;
  location: string;
  deadline?: Date | null;
  excerpt?: string;
  jobDetailsPdf?: string;
  status: string;
}) {
  await requireAuth();

  const status = ALLOWED_STATUSES.includes(data.status as typeof ALLOWED_STATUSES[number])
    ? data.status
    : "open";

  const career = await prisma.career.create({
    data: {
      title: String(data.title || "").trim().substring(0, 255),
      position: String(data.position || "").trim().substring(0, 255),
      location: String(data.location || "").trim().substring(0, 255),
      image: data.image ? String(data.image).substring(0, 500) : undefined,
      deadline: data.deadline || null,
      excerpt: data.excerpt ? String(data.excerpt).substring(0, 1000) : undefined,
      jobDetailsPdf: data.jobDetailsPdf ? String(data.jobDetailsPdf).substring(0, 500) : undefined,
      status,
    },
  });
  revalidatePath("/admin/careers");
  return career;
}

export async function updateCareer(id: string, data: Partial<{
  title: string;
  position: string;
  image: string;
  location: string;
  deadline: Date | null;
  excerpt: string;
  jobDetailsPdf: string;
  status: string;
}>) {
  await requireAuth();
  if (!id || typeof id !== "string") throw new Error("Invalid career ID.");

  const updatePayload: Record<string, string | Date | null | undefined> = {};
  if (data.title !== undefined) updatePayload.title = String(data.title).trim().substring(0, 255);
  if (data.position !== undefined) updatePayload.position = String(data.position).trim().substring(0, 255);
  if (data.location !== undefined) updatePayload.location = String(data.location).trim().substring(0, 255);
  if (data.image !== undefined) updatePayload.image = String(data.image).substring(0, 500);
  if (data.excerpt !== undefined) updatePayload.excerpt = String(data.excerpt).substring(0, 1000);
  if (data.jobDetailsPdf !== undefined) updatePayload.jobDetailsPdf = String(data.jobDetailsPdf).substring(0, 500);
  if (data.deadline !== undefined) updatePayload.deadline = data.deadline;
  if (data.status !== undefined) {
    updatePayload.status = ALLOWED_STATUSES.includes(data.status as typeof ALLOWED_STATUSES[number])
      ? data.status
      : "open";
  }

  const career = await prisma.career.update({ where: { id }, data: updatePayload });
  revalidatePath("/admin/careers");
  return career;
}

export async function deleteCareer(id: string) {
  await requireAuth();
  if (!id || typeof id !== "string") throw new Error("Invalid career ID.");
  await prisma.career.delete({ where: { id } });
  revalidatePath("/admin/careers");
}
