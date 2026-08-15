import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Safety Enhancements | TROT Solutions",
  description:
    "Improve safety standards of your port cranes and terminal equipment with TROT Solutions safety enhancement programs — designed to meet global HSE requirements.",
  keywords: [
    "safety enhancements",
    "crane safety",
    "port equipment safety",
    "HSE",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Safety Enhancements | TROT Solutions",
    description:
      "Improve safety standards of your port cranes and terminal equipment with TROT Solutions safety enhancement programs — designed to meet global HSE requirements.",
    url: "https://www.trotsolutions.com/safety-enhancements",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Safety Enhancements | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Enhancements | TROT Solutions",
    description:
      "Improve safety standards of your port cranes and terminal equipment with TROT Solutions safety enhancement programs — designed to meet global HSE requirements.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/safety-enhancements",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Safety Enhancements"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Extended Life Cycle", href: "#" },
          { label: "Safety Enhancements", href: "/safety-enhancements" },
        ]}
        bgImage="assets/images/backgrounds/safety_enhancement_bg.jpeg"
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
        currentPath="/safety-enhancements"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/307a20f8b6e1b1a93204f44506bc6503.webp"
          title="Safety Enhancements"
          text="Prioritize the well-being of your workforce and the security of your assets. Our advanced safety systems, including collision avoidance, pedestrian detection, and intelligent CCTV analytics, create a secure operational environment."
          capabilities={[
            "Pedestrian Detection Systems",
            "Collision Avoidance Systems",
            "CCTV & Analytics for Crane Operations",
            "Anti-Collision for STS/RTG/RMG",
            "Emergency Stop System Upgrades",
            "Fire Detection & Suppression Systems",
            "Wind Monitoring & Alarm Systems",
            "Safe Load Indicator (SLI) Upgrades"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
