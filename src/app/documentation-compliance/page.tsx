import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Documentation & Compliance | TROT Solutions",
  description:
    "Ensure full regulatory compliance and documentation management for your port equipment with TROT Solutions — covering international standards and client-specific requirements.",
  keywords: [
    "documentation compliance",
    "port equipment compliance",
    "crane regulatory standards",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Documentation & Compliance | TROT Solutions",
    description:
      "Ensure full regulatory compliance and documentation management for your port equipment with TROT Solutions — covering international standards and client-specific requirements.",
    url: "https://www.trotsolutions.com/documentation-compliance",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Documentation & Compliance | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation & Compliance | TROT Solutions",
    description:
      "Ensure full regulatory compliance and documentation management for your port equipment with TROT Solutions — covering international standards and client-specific requirements.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/documentation-compliance",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Documentation & Compliance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life Cycle Management", href: "#" },
          {
            label: "Documentation & Compliance",
            href: "/documentation-compliance",
          },
        ]}
        bgImage="assets/images/backgrounds/document_compliance.jpg"
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
        currentPath="/documentation-compliance"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/06fc69eaf918cd9f868dbe0d9037766c.webp"
          title="Documentation & Compliance"
          text="Ensure absolute adherence to international safety and operational standards. Our rigorous auditing, certification, and reporting services keep your operations compliant, safe, and fully documented."
          capabilities={[
            "Third-Party Inspections",
            "OEM Compliance Audits",
            "Certification & Calibration",
            "HSSE Compliance Documentation",
            "Annual Crane Health Reports",
            "End-of-Life Assessment Reports"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
