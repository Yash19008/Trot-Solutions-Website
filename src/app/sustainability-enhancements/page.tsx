import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Sustainability Enhancements | TROT Solutions",
  description:
    "Drive sustainability in your port operations with TROT Solutions green engineering solutions — reducing energy consumption and carbon footprint of port equipment.",
  keywords: [
    "sustainability",
    "green port equipment",
    "energy efficiency cranes",
    "sustainable port operations",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Sustainability Enhancements | TROT Solutions",
    description:
      "Drive sustainability in your port operations with TROT Solutions green engineering solutions — reducing energy consumption and carbon footprint of port equipment.",
    url: "https://www.trotsolutions.com/sustainability-enhancements",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Sustainability Enhancements | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainability Enhancements | TROT Solutions",
    description:
      "Drive sustainability in your port operations with TROT Solutions green engineering solutions — reducing energy consumption and carbon footprint of port equipment.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/sustainability-enhancements",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Sustainability Enhancements"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Extended Life Cycle", href: "#" },
          {
            label: "Sustainability Enhancements",
            href: "/sustainability-enhancements",
          },
        ]}
        bgImage="assets/images/backgrounds/sustainability_enhancements_bg.jpeg"
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
        currentPath="/sustainability-enhancements"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/31312f81ed0260b46559ff2cdf39f98b.webp"
          title="Sustainability Enhancements"
          text="Transition your operations to a greener, more sustainable future. We specialize in electrifying diesel equipment, integrating shore power, and deploying smart energy platforms to significantly reduce your carbon footprint."
          capabilities={[
            "Electrification of RTGC (Diesel to Electric / Hybrid)",
            "Shore Power Integration",
            "Regenerative Energy Systems",
            "Smart Energy Management Platforms",
            "Carbon Footprint Measurement",
            "ESG-aligned Crane Modernization"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
