import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "End-of-Life Services | TROT Solutions",
  description:
    "Plan your equipment retirement strategy with TROT Solutions end-of-life services — including decommissioning, parts recovery, and sustainable disposal for port cranes.",
  keywords: [
    "end of life services",
    "crane decommissioning",
    "equipment retirement",
    "TROT Solutions EOL",
  ],
  openGraph: {
    title: "End-of-Life Services | TROT Solutions",
    description:
      "Plan your equipment retirement strategy with TROT Solutions end-of-life services — including decommissioning, parts recovery, and sustainable disposal for port cranes.",
    url: "https://www.trotsolutions.com/end-of-life-services",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "End-of-Life Services | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "End-of-Life Services | TROT Solutions",
    description:
      "Plan your equipment retirement strategy with TROT Solutions end-of-life services — including decommissioning, parts recovery, and sustainable disposal for port cranes.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/end-of-life-services",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="End-of-Life Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "End of Life Cycle", href: "#" },
          { label: "End-of-Life Services", href: "/end-of-life-services" },
        ]}
        bgImage="assets/images/backgrounds/end_of_life_bg.jpeg"
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
        currentPath="/end-of-life-services"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/0473086f30573ff373022d72e016e648.webp"
          title="End-of-Life Services"
          text="Manage the final stages of your equipment lifecycle safely and responsibly. From controlled piece-by-piece dismantling to heavy-lift relocations and environmental compliance, we handle the entire end-of-life process."
          capabilities={[
            "Decommissioning Studies",
            "Controlled Dismantling",
            "Piece-by-Piece Dismantling",
            "Heavy-Lift Removal & Relocation",
            "Asset Disposal & Resale Support",
            "Recycling & Environmental Compliance"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
