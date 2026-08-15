import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Technical Consulting Services | TROT Solutions",
  description:
    "Expert technical consulting for port authorities, terminal operators, and equipment owners. TROT Solutions delivers strategic engineering advice backed by 25+ years of experience.",
  keywords: [
    "technical consulting",
    "port engineering consulting",
    "crane consulting",
    "TROT Solutions consulting",
  ],
  openGraph: {
    title: "Technical Consulting Services | TROT Solutions",
    description:
      "Expert technical consulting for port authorities, terminal operators, and equipment owners. TROT Solutions delivers strategic engineering advice backed by 25+ years of experience.",
    url: "https://www.trotsolutions.com/technical-consulting-services",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Technical Consulting Services | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Consulting Services | TROT Solutions",
    description:
      "Expert technical consulting for port authorities, terminal operators, and equipment owners. TROT Solutions delivers strategic engineering advice backed by 25+ years of experience.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/technical-consulting-services",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Technical Consulting Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life Cycle Management", href: "#" },
          {
            label: "Technical Consulting Services",
            href: "/technical-consulting-services",
          },
        ]}
        bgImage="assets/images/backgrounds/consultancy_services.jpg"
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
        currentPath="/technical-consulting-services"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp"
          title="Technical Consulting Services"
          text="Empower your operations with expert guidance. From third-party inspections to detailed crane residual life analyses, our technical consulting team brings deep engineering expertise to solve complex challenges and ensure compliance."
          capabilities={[
            "Third-Party Inspection Services",
            "Crane Residual Life Analysis",
            "Structural Inspections",
            "Engineering Project Management",
            "Crane Structure Non-Destructive Testing",
            "Civil NDT for Marine Structures",
            "Calibration & Certifications"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
