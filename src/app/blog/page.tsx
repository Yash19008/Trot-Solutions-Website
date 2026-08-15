import PageHeader from "@/components/layout/PageHeader";
import type { Metadata } from "next";
import { ArticleGrid, Post } from "@/components/ui/ArticleGrid";
import { prisma } from "@/lib/prisma";
import Pagination from "@/components/ui/Pagination";

export const metadata: Metadata = {
  title: "Tech Talks & News | TROT Solutions",
  description:
    "Stay updated with the latest insights, technical articles, and news from TROT Solutions on port equipment, crane technology, and engineering best practices.",
  keywords: [
    "TROT Solutions blog",
    "port equipment news",
    "crane technology articles",
    "engineering insights",
  ],
  openGraph: {
    title: "Tech Talks & News | TROT Solutions",
    description:
      "Stay updated with the latest insights, technical articles, and news from TROT Solutions on port equipment, crane technology, and engineering best practices.",
    url: "https://www.trotsolutions.com/blog",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Tech Talks & News | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Talks & News | TROT Solutions",
    description:
      "Stay updated with the latest insights, technical articles, and news from TROT Solutions on port equipment, crane technology, and engineering best practices.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/blog",
  },
};

export default async function Page(
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) {
  const searchParams = await props.searchParams;
  const page = typeof searchParams.page === "string" ? parseInt(searchParams.page, 10) : 1;
  const take = 6;
  const skip = (Math.max(1, page) - 1) * take;

  const [blogs, total] = await Promise.all([
    prisma.blog.findMany({
      where: { status: "published" },
      orderBy: { createdAt: "desc" },
      skip,
      take,
    }),
    prisma.blog.count({
      where: { status: "published" },
    }),
  ]);

  const totalPages = Math.ceil(total / take);

  const mappedPosts: Post[] = blogs.map((b) => ({
    id: b.id,
    title: b.title,
    image: b.image || "",
    date: new Date(b.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
    text: b.excerpt || "",
    content: b.content,
  }));

  return (
    <>
      <PageHeader
        title="Blogs"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
        bgImage="assets/images/backgrounds/blogs.png"
      />

      <section
        className="blog-one"
        style={{ padding: "100px 0", backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          {mappedPosts.length > 0 ? (
            <>
              <ArticleGrid posts={mappedPosts} />
              <Pagination totalPages={totalPages} currentPage={page} basePath="/blog" />
            </>
          ) : (
            <div className="text-center py-5">
              <h3>No blogs available at the moment.</h3>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
