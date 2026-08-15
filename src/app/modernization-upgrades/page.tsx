import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Modernization & Upgrades | TROT Solutions",
  description:
    "Upgrade legacy port equipment with TROT Solutions modernization services. Retrofit cranes and terminal machinery with the latest technology to extend operational life.",
  keywords: [
    "crane modernization",
    "equipment upgrades",
    "port equipment retrofit",
    "crane retrofit",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Modernization & Upgrades | TROT Solutions",
    description:
      "Upgrade legacy port equipment with TROT Solutions modernization services. Retrofit cranes and terminal machinery with the latest technology to extend operational life.",
    url: "https://www.trotsolutions.com/modernization-upgrades",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Modernization & Upgrades | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modernization & Upgrades | TROT Solutions",
    description:
      "Upgrade legacy port equipment with TROT Solutions modernization services. Retrofit cranes and terminal machinery with the latest technology to extend operational life.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/modernization-upgrades",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Modernization & Upgrades"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Extended Life Cycle", href: "#" },
          {
            label: "Modernization & Upgrades",
            href: "/modernization-upgrades",
          },
        ]}
        bgImage="assets/images/backgrounds/modernization_upgrades_bg.jpeg"
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
        currentPath="/modernization-upgrades"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/27e279904fef700d7dd34102d2a1a2f7.webp"
          title="Modernization & Upgrades"
          text="Bring legacy equipment up to modern standards with state-of-the-art upgrades. From drive systems and advanced PLC controls to complete operator cabin modernizations, we enhance safety, efficiency, and usability."
          capabilities={[
            "Drive System Upgrades (FUJI, Siemens, ABB)",
            "PLC & Control System Upgrades",
            "Anti-Sway & Auto-Steering System Integration",
            "Energy Chain & Festoon System Replacement",
            "LED Floodlight Upgrades",
            "Operator Cabin Modernization",
            "Crane Heightening / Boom Extension",
            "Spreader Upgrades (Bromma)",
            "Remote Monitoring & IoT Integration",
            "Fuel-Saving Modules for Diesel Cranes"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
