import PageHeader from "@/components/layout/PageHeader";
import type { Metadata } from "next";
import { ArticleGrid, Post } from "@/components/ui/ArticleGrid";
import SectionTitle from "@/components/ui/SectionTitle";
import { prisma } from "@/lib/prisma";
import Pagination from "@/components/ui/Pagination";

export const metadata: Metadata = {
  title: "Tech Talks | TROT Solutions",
  description:
    "Deep-dive technical discussions on port equipment lifecycle management, crane engineering, and industry innovations from the TROT Solutions team.",
  keywords: [
    "tech talks",
    "port technology",
    "crane engineering discussions",
    "TROT technical insights",
  ],
  openGraph: {
    title: "Tech Talks | TROT Solutions",
    description:
      "Deep-dive technical discussions on port equipment lifecycle management, crane engineering, and industry innovations from the TROT Solutions team.",
    url: "https://www.trotsolutions.com/tech-talks",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Tech Talks | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Talks | TROT Solutions",
    description:
      "Deep-dive technical discussions on port equipment lifecycle management, crane engineering, and industry innovations from the TROT Solutions team.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/tech-talks",
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

  const [talks, total] = await Promise.all([
    prisma.techTalk.findMany({
      where: { status: "published" },
      orderBy: { createdAt: "desc" },
      skip,
      take,
    }),
    prisma.techTalk.count({
      where: { status: "published" },
    }),
  ]);

  const totalPages = Math.ceil(total / take);

  const mappedTalks: Post[] = talks.map((t) => ({
    id: t.id,
    title: t.title,
    image: t.image || "",
    date: new Date(t.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
    text: t.excerpt || "",
    content: t.content,
  }));

  return (
    <>
      <PageHeader
        title="Tech Talks"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tech Talks" }]}
        bgImage="assets/images/backgrounds/tech_talks.png"
        bgPosition="center 100%"
      />

      <section
        className="blog-one"
        style={{ padding: "100px 0", backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <SectionTitle tagline="LATEST ANNOUNCEMENTS" title="Insights & Innovations" />
          
          {mappedTalks.length > 0 ? (
            <>
              <ArticleGrid posts={mappedTalks} />
              <Pagination totalPages={totalPages} currentPage={page} basePath="/tech-talks" />
            </>
          ) : (
            <div className="text-center py-5">
              <h3>No tech talks available at the moment.</h3>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
