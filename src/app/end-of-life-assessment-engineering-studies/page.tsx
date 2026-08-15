import ServicePageLayout from "@/components/layout/ServicePageLayout";

import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "End-of-Life Assessment & Engineering Studies | TROT Solutions",
  description:
    "In-depth end-of-life assessments and engineering studies for port cranes and terminal equipment by TROT Solutions — enabling data-driven retirement decisions.",
  keywords: [
    "end of life assessment",
    "crane engineering study",
    "port equipment assessment",
    "TROT Solutions",
  ],
  openGraph: {
    title: "End-of-Life Assessment & Engineering Studies | TROT Solutions",
    description:
      "In-depth end-of-life assessments and engineering studies for port cranes and terminal equipment by TROT Solutions — enabling data-driven retirement decisions.",
    url: "https://www.trotsolutions.com/end-of-life-assessment-engineering-studies",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "End-of-Life Assessment & Engineering Studies | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "End-of-Life Assessment & Engineering Studies | TROT Solutions",
    description:
      "In-depth end-of-life assessments and engineering studies for port cranes and terminal equipment by TROT Solutions — enabling data-driven retirement decisions.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical:
      "https://www.trotsolutions.com/end-of-life-assessment-engineering-studies",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="End-of-Life Assessment & Engineering Studies"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "End of Life Cycle", href: "#" },
          {
            label: "End-of-Life Assessment & Engineering Studies",
            href: "/end-of-life-assessment-engineering-studies",
          },
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
        currentPath="/end-of-life-assessment-engineering-studies"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/276738d54b6269f6e071f9c081cc3d0e.webp"
          title="End-of-Life Assessment & Engineering Studies"
          text="Make informed decisions on whether to refurbish or dismantle aging assets. We conduct deep structural integrity evaluations, risk assessments, and cost-benefit analyses to guide your end-of-life strategies."
          capabilities={[
            "Structural integrity evaluation",
            "Residual life & fatigue analysis",
            "Risk assessment for dismantling",
            "Stability analysis for damaged cranes",
            "Method statement & engineered dismantling plan",
            "Environmental impact assessment",
            "Cost-benefit analysis for dismantling vs. refurbishment"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
