import PageHeader from "@/components/layout/PageHeader";
import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import JobCard, { Job } from "@/components/ui/JobCard";
import CareerApplyForm from "@/components/forms/CareerApplyForm";
import { prisma } from "@/lib/prisma";
import Pagination from "@/components/ui/Pagination";

export const metadata: Metadata = {
  title: "Careers | TROT Solutions",
  description:
    "Join the TROT Solutions team. Explore career opportunities in port equipment engineering, structural assessments, and global logistics.",
  keywords: [
    "careers",
    "TROT Solutions jobs",
    "engineering careers",
    "port logistics jobs",
  ],
  openGraph: {
    title: "Careers | TROT Solutions",
    description:
      "Join the TROT Solutions team. Explore career opportunities in port equipment engineering, structural assessments, and global logistics.",
    url: "https://www.trotsolutions.com/careers",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Careers | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | TROT Solutions",
    description:
      "Join the TROT Solutions team. Explore career opportunities in port equipment engineering, structural assessments, and global logistics.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/careers",
  },
};

export default async function Page(
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) {
  const searchParams = await props.searchParams;
  const page = typeof searchParams.page === "string" ? parseInt(searchParams.page, 10) : 1;
  const take = 4;
  const skip = (Math.max(1, page) - 1) * take;

  const [careers, total] = await Promise.all([
    prisma.career.findMany({
      where: { status: "open" },
      orderBy: { createdAt: "desc" },
      skip,
      take,
    }),
    prisma.career.count({
      where: { status: "open" },
    }),
  ]);

  const totalPages = Math.ceil(total / take);

  const mappedJobs: Job[] = careers.map((c) => ({
    id: c.id,
    image: c.image || "assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    title: c.title,
    position: c.position,
    location: c.location,
    posted: new Date(c.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
    deadline: c.deadline ? new Date(c.deadline).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) : "Open",
    description: c.excerpt || "",
    status: c.status === "open" ? "Open" : "Closed",
    jobDetailsPdf: c.jobDetailsPdf || undefined,
  }));

  const allCareersQuery = await prisma.career.findMany({
    where: { status: "open" },
    select: { title: true },
    orderBy: { createdAt: "desc" },
  });
  const allJobTitles = Array.from(new Set(allCareersQuery.map((c) => c.title)));

  return (
    <>
      <PageHeader
        title="Careers"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        bgImage="assets/images/backgrounds/careers.png"
      />

      {/* Careers Page Start */}
      <section
        className="careers-page"
        style={{ padding: "100px 0", backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <SectionTitle tagline="JOIN OUR TEAM" title="Current Openings" />

          {mappedJobs.length > 0 ? (
            <>
              <div className="row">
                {mappedJobs.map((job) => (
                  <div key={job.id} className="col-xl-6 col-lg-6 mb-5">
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
              <Pagination totalPages={totalPages} currentPage={page} basePath="/careers" />
            </>
          ) : (
            <div className="text-center py-5">
              <h3>No open positions available at the moment.</h3>
              <p className="text-muted">Please check back later.</p>
            </div>
          )}
        </div>
      </section>
      {/* Careers Page End */}

      {/* Apply Modal */}
      <div
        className="modal fade"
        id="applyModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div
            className="modal-content"
            style={{
              borderRadius: "15px",
              border: "none",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="modal-header"
              style={{ background: "var(--builza-black)", padding: "30px" }}
            >
              <h5
                className="modal-title"
                style={{
                  color: "var(--builza-white)",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                Submit Your Application
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{ padding: "40px", background: "var(--builza-white)" }}
            >
              <CareerApplyForm jobTitles={allJobTitles} />
            </div>
          </div>
        </div>
      </div>
      {/* End Apply Modal */}
    </>
  );
}
