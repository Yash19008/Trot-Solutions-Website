import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import BlogFormClientComponent from "../BlogFormClientComponent";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await prisma.blog.findUnique({ where: { id } });

  if (!blog) {
    notFound();
  }

  return <BlogFormClientComponent initialBlog={blog} />;
}
