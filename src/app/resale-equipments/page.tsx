import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import type { Metadata } from "next";
import HSEQuote from "@/components/sections/HSEQuote";
import SectionTitle from "@/components/ui/SectionTitle";
import { prisma } from "@/lib/prisma";
import Pagination from "@/components/ui/Pagination";
import EquipmentSlider from "@/components/ui/EquipmentSlider";

export const metadata: Metadata = {
  title: "Resale Equipment | TROT Solutions",
  description:
    "Browse available port cranes and terminal equipment for resale through TROT Solutions. Verified, inspected, and ready for immediate deployment.",
  keywords: [
    "resale equipment",
    "used port cranes",
    "terminal equipment for sale",
    "TROT Solutions resale",
  ],
  openGraph: {
    title: "Resale Equipment | TROT Solutions",
    description:
      "Browse available port cranes and terminal equipment for resale through TROT Solutions. Verified, inspected, and ready for immediate deployment.",
    url: "https://www.trotsolutions.com/resale-equipments",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Resale Equipment | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resale Equipment | TROT Solutions",
    description:
      "Browse available port cranes and terminal equipment for resale through TROT Solutions. Verified, inspected, and ready for immediate deployment.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/resale-equipments",
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

  const [equipments, total] = await Promise.all([
    prisma.equipment.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take,
    }),
    prisma.equipment.count(),
  ]);

  const totalPages = Math.ceil(total / take);

  return (
    <>
      <PageHeader
        title="Resale Equipments"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resale Equipments" },
        ]}
        bgImage="assets/images/backgrounds/equipments_resale.png"
      />

      {/* Resale Equipments Start */}
      <section
        className="resale-page"
        style={{ padding: "100px 0", backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <SectionTitle tagline="BROKERAGE & RESALE" title="Available Equipments" />

          {equipments.length > 0 ? (
            <>
              <div className="row">
                {equipments.map((equipment) => (
                  <div key={equipment.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div
                      className="equipment-card"
                      style={{
                        background: "var(--builza-white)",
                        borderRadius: "15px",
                        overflow: "hidden",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <div
                        className="equipment-card__img"
                        style={{ position: "relative" }}
                      >
                        <EquipmentSlider 
                          title={equipment.title} 
                          images={[
                            equipment.image,
                            equipment.image2,
                            equipment.image3,
                            equipment.image4,
                            equipment.image5,
                          ]}
                        />
                        <div
                          className="equipment-card__status"
                          style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            background: equipment.status === "available" ? "var(--builza-base)" : "#e0e0e0",
                            color: equipment.status === "available" ? "var(--builza-black)" : "#555",
                            padding: "5px 15px",
                            borderRadius: "20px",
                            fontWeight: "600",
                            fontSize: "14px",
                          }}
                        >
                          {equipment.status === "available" ? "Available" : "Sold"}
                        </div>
                      </div>
                      <div
                        className="equipment-card__content"
                        style={{
                          padding: "30px",
                          flexGrow: "1",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <h3
                          className="equipment-card__title"
                          style={{
                            fontSize: "26px",
                            fontWeight: "700",
                            marginBottom: "20px",
                            color: "var(--builza-black)",
                          }}
                        >
                          {equipment.title}
                        </h3>

                        <ul
                          className="equipment-card__details list-unstyled"
                          style={{ marginBottom: "25px", padding: "0" }}
                        >
                          <li
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              borderBottom: "1px solid rgba(0,0,0,0.05)",
                              padding: "10px 0",
                            }}
                          >
                            <span
                              style={{
                                fontWeight: "600",
                                color: "var(--builza-black)",
                              }}
                            >
                              Model No:
                            </span>
                            <span style={{ color: "var(--builza-gray)" }}>
                              {equipment.modelNo || "N/A"}
                            </span>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              borderBottom: "1px solid rgba(0,0,0,0.05)",
                              padding: "10px 0",
                            }}
                          >
                            <span
                              style={{
                                fontWeight: "600",
                                color: "var(--builza-black)",
                              }}
                            >
                              Quantity:
                            </span>
                            <span style={{ color: "var(--builza-gray)" }}>
                              {equipment.stock || 0} Units
                            </span>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              borderBottom: "1px solid rgba(0,0,0,0.05)",
                              padding: "10px 0",
                            }}
                          >
                            <span
                              style={{
                                fontWeight: "600",
                                color: "var(--builza-black)",
                              }}
                            >
                              Location:
                            </span>
                            <span style={{ color: "var(--builza-gray)" }}>
                              {equipment.location || "N/A"}
                            </span>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "10px 0",
                            }}
                          >
                            <span
                              style={{
                                fontWeight: "600",
                                color: "var(--builza-black)",
                              }}
                            >
                              Incoterms:
                            </span>
                            <span style={{ color: "var(--builza-gray)" }}>
                              {equipment.incoterms || "N/A"}
                            </span>
                          </li>
                        </ul>

                        <div
                          className="equipment-card__actions mt-auto"
                          style={{
                            display: "flex",
                            gap: "15px",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          {equipment.status === "available" ? (
                            <Link href="/contact"
                              className="thm-btn"
                              style={{ padding: "10px 30px", borderRadius: "5px" }}
                            >
                              Inquire Now
                            </Link>
                          ) : (
                            <a
                              href="#"
                              className="thm-btn"
                              style={{
                                padding: "10px 30px",
                                borderRadius: "5px",
                                backgroundColor: "var(--builza-gray)",
                                pointerEvents: "none",
                              }}
                            >
                              Sold Out
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination totalPages={totalPages} currentPage={page} basePath="/resale-equipments" />
            </>
          ) : (
            <div className="text-center py-5">
              <h3>No equipment available at the moment.</h3>
              <p className="text-muted">Please check back later.</p>
            </div>
          )}
        </div>
      </section>
      {/* Resale Equipments End */}
    </>
  );
}
