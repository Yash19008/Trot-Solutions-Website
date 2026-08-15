"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { requireAuth } from "@/lib/server-auth";

const ALLOWED_STATUSES = ["available", "sold"] as const;

export async function createEquipment(data: {
  title: string;
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  modelNo?: string;
  stock?: number;
  location?: string;
  incoterms?: string;
  status: string;
}) {
  await requireAuth();

  const status = ALLOWED_STATUSES.includes(data.status as typeof ALLOWED_STATUSES[number])
    ? data.status
    : "available";

  const eq = await prisma.equipment.create({
    data: {
      title: String(data.title || "").trim().substring(0, 255),
      image: data.image ? String(data.image).substring(0, 500) : undefined,
      image2: data.image2 ? String(data.image2).substring(0, 500) : undefined,
      image3: data.image3 ? String(data.image3).substring(0, 500) : undefined,
      image4: data.image4 ? String(data.image4).substring(0, 500) : undefined,
      image5: data.image5 ? String(data.image5).substring(0, 500) : undefined,
      modelNo: data.modelNo ? String(data.modelNo).trim().substring(0, 255) : undefined,
      stock: data.stock ? Number(data.stock) : 0,
      location: data.location ? String(data.location).trim().substring(0, 255) : undefined,
      incoterms: data.incoterms ? String(data.incoterms).trim().substring(0, 255) : undefined,
      status,
    },
  });
  revalidatePath("/admin/equipments");
  return eq;
}

export async function updateEquipment(id: string, data: Partial<{
  title: string;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  modelNo: string;
  stock: number;
  location: string;
  incoterms: string;
  status: string;
}>) {
  await requireAuth();
  if (!id || typeof id !== "string") throw new Error("Invalid equipment ID.");

  const updatePayload: Record<string, string | number | undefined> = {};
  if (data.title !== undefined) updatePayload.title = String(data.title).trim().substring(0, 255);
  if (data.image !== undefined) updatePayload.image = String(data.image).substring(0, 500);
  if (data.image2 !== undefined) updatePayload.image2 = String(data.image2).substring(0, 500);
  if (data.image3 !== undefined) updatePayload.image3 = String(data.image3).substring(0, 500);
  if (data.image4 !== undefined) updatePayload.image4 = String(data.image4).substring(0, 500);
  if (data.image5 !== undefined) updatePayload.image5 = String(data.image5).substring(0, 500);
  if (data.modelNo !== undefined) updatePayload.modelNo = String(data.modelNo).trim().substring(0, 255);
  if (data.stock !== undefined) updatePayload.stock = Number(data.stock);
  if (data.location !== undefined) updatePayload.location = String(data.location).trim().substring(0, 255);
  if (data.incoterms !== undefined) updatePayload.incoterms = String(data.incoterms).trim().substring(0, 255);
  if (data.status !== undefined) {
    updatePayload.status = ALLOWED_STATUSES.includes(data.status as typeof ALLOWED_STATUSES[number])
      ? data.status
      : "available";
  }

  const eq = await prisma.equipment.update({ where: { id }, data: updatePayload });
  revalidatePath("/admin/equipments");
  return eq;
}

export async function deleteEquipment(id: string) {
  await requireAuth();
  if (!id || typeof id !== "string") throw new Error("Invalid equipment ID.");
  await prisma.equipment.delete({ where: { id } });
  revalidatePath("/admin/equipments");
}
