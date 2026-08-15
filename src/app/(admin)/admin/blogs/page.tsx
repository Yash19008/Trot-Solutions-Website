import { prisma } from "@/lib/prisma";
import BlogClientComponent from "./BlogClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function BlogsAdminPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <BlogClientComponent initialBlogs={blogs} />
    </div>
  );
}
