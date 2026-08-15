import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Preventive & Predictive Maintenance | TROT Solutions",
  description:
    "Maximize reliability and lifespan of your port equipment with TROT Solutions comprehensive preventive and predictive maintenance programs for cranes and terminal machinery.",
  keywords: [
    "preventive maintenance",
    "predictive maintenance",
    "crane maintenance",
    "port equipment maintenance",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Preventive & Predictive Maintenance | TROT Solutions",
    description:
      "Maximize reliability and lifespan of your port equipment with TROT Solutions comprehensive preventive and predictive maintenance programs for cranes and terminal machinery.",
    url: "https://www.trotsolutions.com/preventive-predictive-maintenance",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Preventive & Predictive Maintenance | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preventive & Predictive Maintenance | TROT Solutions",
    description:
      "Maximize reliability and lifespan of your port equipment with TROT Solutions comprehensive preventive and predictive maintenance programs for cranes and terminal machinery.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical:
      "https://www.trotsolutions.com/preventive-predictive-maintenance",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Preventive & Predictive Maintenance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life Cycle Management", href: "#" },
          {
            label: "Preventive & Predictive Maintenance",
            href: "/preventive-predictive-maintenance",
          },
        ]}
        bgVideo="assets/videos/prevertive_predictive_bg.mp4"
        sidebarTitle="Crane Lifecycle Services"
        sidebarLinks={[
          {
            label: "Preventive & Predictive Maintenance",
            href: "/preventive-predictive-maintenance",
          },
          { label: "Engineering Products", href: "/engineering-products" },
          {
            label: "Technical Consulting Services",
            href: "/technical-consulting-services",
          },
          {
            label: "Lifecycle Cost Optimization",
            href: "/lifecycle-cost-optimization",
          },
          {
            label: "Heavy-Lift & Transport Logistics",
            href: "/heavy-lift-transport-logistics",
          },
          {
            label: "Documentation & Compliance",
            href: "/documentation-compliance",
          },
        ]}
        currentPath="/preventive-predictive-maintenance"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/0a6c8a4ae4b5fed1e6c469741dcaae75.webp"
          title="Preventive & Predictive Maintenance"
          text="Maximize the reliability and lifespan of your port equipment with our comprehensive preventive and predictive maintenance programs. By leveraging IoT sensors and OEM-aligned strategies, we ensure your operations run seamlessly with minimized downtime."
          capabilities={[
            "OEM-aligned Preventive Maintenance Programs",
            "Predictive Maintenance using IoT Sensors",
            "Lubrication Management",
            "Wire Rope Replacement & Rope Lubrication",
            "Brake System Overhaul",
            "Hydraulic System Optimization",
            "Electrical & PLC Preventive Maintenance",
            "Spreader Preventive Maintenance",
            "Rail Alignment & Rail Wear Monitoring"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
