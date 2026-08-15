import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brokerage & Resale | TROT Solutions",
  description:
    "Buy or sell used port cranes and terminal equipment through TROT Solutions global brokerage network — with expert valuation, inspection, and logistics support.",
  keywords: [
    "port equipment brokerage",
    "crane resale",
    "used cranes for sale",
    "terminal equipment brokerage",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Brokerage & Resale | TROT Solutions",
    description:
      "Buy or sell used port cranes and terminal equipment through TROT Solutions global brokerage network — with expert valuation, inspection, and logistics support.",
    url: "https://www.trotsolutions.com/brokerage-resale",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Brokerage & Resale | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brokerage & Resale | TROT Solutions",
    description:
      "Buy or sell used port cranes and terminal equipment through TROT Solutions global brokerage network — with expert valuation, inspection, and logistics support.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/brokerage-resale",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Brokerage & Resale"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "End of Life Cycle", href: "#" },
          { label: "Brokerage & Resale", href: "/brokerage-resale" },
        ]}
        bgImage="assets/images/backgrounds/brokerage_resale_bg.jpeg"
        sidebarTitle="Our Services"
        sidebarLinks={[
          { label: "End-of-Life Services", href: "/end-of-life-services" },
          {
            label: "End-of-Life Assessment & Engineering Studies",
            href: "/end-of-life-assessment-engineering-studies",
          },
          {
            label: "Scrap Management & Recycling",
            href: "/scrap-management-recycling",
          },
          {
            label: "Optional Value-Recovery Services",
            href: "/optional-value-recovery-services",
          },
          { label: "Brokerage & Resale", href: "/brokerage-resale" },
        ]}
        currentPath="/brokerage-resale"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/brokerage_resale.jpeg"
          title="Brokerage & Resale"
          text="Connecting buyers and sellers in the global port equipment market. We offer comprehensive brokerage services for a wide range of surplus inventory, from Mobile Harbour Cranes to Ship to Shore Cranes."
          titleRightNode={
            <Link
              href="/resale-equipments"
              className="thm-btn py-2"
              style={{ borderRadius: "5px", height: "fit-content" }}
            >
              View Available Equipments{" "}
              <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
            </Link>
          }
          capabilities={[
            "Ship to Shore Cranes",
            "Rubber Tyred Gantry Cranes",
            "Rail Mounted Gantry Cranes",
            "Spreaders",
            "Barge",
            "Mobile Harbour Cranes",
            "Surplus Inventory Stocks",
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
