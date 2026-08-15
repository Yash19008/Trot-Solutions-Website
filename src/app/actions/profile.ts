"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export async function updateAdminProfile(data: { email: string; currentPassword?: string; newPassword?: string }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    throw new Error("Unauthorized");
  }

  const adminId = session.user.id;

  const admin = await prisma.adminUser.findUnique({
    where: { id: adminId },
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  const updateData: any = {
    email: data.email,
  };

  if (data.newPassword) {
    if (!data.currentPassword) {
      throw new Error("Current password is required to set a new password.");
    }
    
    const isCorrectPassword = await bcrypt.compare(data.currentPassword, admin.password);
    if (!isCorrectPassword) {
      throw new Error("Current password is incorrect.");
    }

    const hashedPassword = await bcrypt.hash(data.newPassword, 10);
    updateData.password = hashedPassword;
  }

  try {
    await prisma.adminUser.update({
      where: { id: adminId },
      data: updateData,
    });

    revalidatePath("/admin/profile");
    return { success: true };
  } catch (error: any) {
    if (error.code === 'P2002') {
      throw new Error("Email is already in use by another account.");
    }
    throw new Error("Failed to update profile.");
  }
}
