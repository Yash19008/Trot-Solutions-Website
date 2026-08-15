"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { requireAuth } from "@/lib/server-auth";

const ALLOWED_INQUIRY_STATUSES = ["NEW", "Contacted", "Closed"] as const;
const ALLOWED_CAREER_STATUSES = ["NEW", "Reviewed", "Interviewing", "Hired", "Rejected"] as const;

export async function updateInquiryStatus(id: string, status: string) {
  await requireAuth();

  if (!id || typeof id !== "string") throw new Error("Invalid lead ID.");
  if (!ALLOWED_INQUIRY_STATUSES.includes(status as typeof ALLOWED_INQUIRY_STATUSES[number])) {
    throw new Error(`Invalid status value: "${status}".`);
  }

  await prisma.inquiryLead.update({
    where: { id },
    data: { status },
  });
  revalidatePath("/admin/leads");
}

export async function deleteInquiryLead(id: string) {
  await requireAuth();

  if (!id || typeof id !== "string") throw new Error("Invalid lead ID.");

  await prisma.inquiryLead.delete({
    where: { id },
  });
  revalidatePath("/admin/leads");
}

export async function updateCareerLeadStatus(id: string, status: string) {
  await requireAuth();

  if (!id || typeof id !== "string") throw new Error("Invalid application ID.");
  if (!ALLOWED_CAREER_STATUSES.includes(status as typeof ALLOWED_CAREER_STATUSES[number])) {
    throw new Error(`Invalid status value: "${status}".`);
  }

  await prisma.careerLead.update({
    where: { id },
    data: { status },
  });
  revalidatePath("/admin/leads");
}

export async function deleteCareerLead(id: string) {
  await requireAuth();

  if (!id || typeof id !== "string") throw new Error("Invalid application ID.");

  await prisma.careerLead.delete({
    where: { id },
  });
  revalidatePath("/admin/leads");
}
