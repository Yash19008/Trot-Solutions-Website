"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { requireAuth } from "@/lib/server-auth";

const ALLOWED_STATUSES = ["draft", "published"] as const;

export async function createBlog(data: {
  title: string;
  slug: string;
  content: string;
  image?: string;
  excerpt?: string;
  status: string;
}) {
  await requireAuth();

  const status = ALLOWED_STATUSES.includes(data.status as typeof ALLOWED_STATUSES[number])
    ? data.status
    : "draft";

  const blog = await prisma.blog.create({
    data: {
      title: String(data.title || "").trim().substring(0, 255),
      slug: String(data.slug || "").trim().substring(0, 255).replace(/[^a-zA-Z0-9\-_]/g, "-"),
      content: String(data.content || ""),
      image: data.image ? String(data.image).substring(0, 500) : undefined,
      excerpt: data.excerpt ? String(data.excerpt).substring(0, 1000) : undefined,
      status,
    },
  });
  revalidatePath("/admin/blogs");
  return blog;
}

export async function updateBlog(id: string, data: Partial<{
  title: string;
  slug: string;
  content: string;
  image: string;
  excerpt: string;
  status: string;
}>) {
  await requireAuth();
  if (!id || typeof id !== "string") throw new Error("Invalid blog ID.");

  const updatePayload: Record<string, string | undefined> = {};
  if (data.title !== undefined) updatePayload.title = String(data.title).trim().substring(0, 255);
  if (data.slug !== undefined) updatePayload.slug = String(data.slug).trim().substring(0, 255).replace(/[^a-zA-Z0-9\-_]/g, "-");
  if (data.content !== undefined) updatePayload.content = String(data.content);
  if (data.image !== undefined) updatePayload.image = String(data.image).substring(0, 500);
  if (data.excerpt !== undefined) updatePayload.excerpt = String(data.excerpt).substring(0, 1000);
  if (data.status !== undefined) {
    updatePayload.status = ALLOWED_STATUSES.includes(data.status as typeof ALLOWED_STATUSES[number])
      ? data.status
      : "draft";
  }

  const blog = await prisma.blog.update({ where: { id }, data: updatePayload });
  revalidatePath("/admin/blogs");
  return blog;
}

export async function deleteBlog(id: string) {
  await requireAuth();
  if (!id || typeof id !== "string") throw new Error("Invalid blog ID.");
  await prisma.blog.delete({ where: { id } });
  revalidatePath("/admin/blogs");
}
