import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Structural Life Extension | TROT Solutions",
  description:
    "Extend the structural life of your port cranes and terminal equipment with TROT Solutions engineering solutions — reducing capital expenditure and maximizing ROI.",
  keywords: [
    "structural life extension",
    "crane life extension",
    "port equipment structure",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Structural Life Extension | TROT Solutions",
    description:
      "Extend the structural life of your port cranes and terminal equipment with TROT Solutions engineering solutions — reducing capital expenditure and maximizing ROI.",
    url: "https://www.trotsolutions.com/structural-life-extension",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Structural Life Extension | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Structural Life Extension | TROT Solutions",
    description:
      "Extend the structural life of your port cranes and terminal equipment with TROT Solutions engineering solutions — reducing capital expenditure and maximizing ROI.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/structural-life-extension",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Structural Life Extension"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Extended Life Cycle", href: "#" },
          {
            label: "Structural Life Extension",
            href: "/structural-life-extension",
          },
        ]}
        bgImage="assets/images/backgrounds/structural_life_extension_bg.jpeg"
        sidebarTitle="Our Services"
        sidebarLinks={[
          {
            label: "Health Assessment & Diagnostics",
            href: "/health-assessment-diagnostics",
          },
          {
            label: "Structural Life Extension",
            href: "/structural-life-extension",
          },
          {
            label: "Sustainability Enhancements",
            href: "/sustainability-enhancements",
          },
          {
            label: "Modernization & Upgrades",
            href: "/modernization-upgrades",
          },
          { label: "Safety Enhancements", href: "/safety-enhancements" },
        ]}
        currentPath="/structural-life-extension"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/47bcb04e0d50274e492d6a68c64f6d1f.webp"
          title="Structural Life Extension"
          text="Extend the operational life of your cranes and structures through targeted reinforcement and specialized protection programs. We perform expert boom repairs, girder strengthening, and long-term corrosion management to protect your investments."
          capabilities={[
            "Full Crane Painting & Corrosion Protection",
            "Steel Structure Reinforcement",
            "Boom Repairs & Boom Replacement",
            "Girder Strengthening",
            "Weld Repairs & NDT Certification",
            "Long-Term Corrosion Management Programs"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
