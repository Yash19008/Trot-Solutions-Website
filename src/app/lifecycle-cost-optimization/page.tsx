import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Lifecycle Cost Optimization | TROT Solutions",
  description:
    "Optimize the total cost of ownership for your port equipment with TROT Solutions lifecycle cost management strategies and engineering expertise.",
  keywords: [
    "lifecycle cost optimization",
    "TCO port equipment",
    "crane cost management",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Lifecycle Cost Optimization | TROT Solutions",
    description:
      "Optimize the total cost of ownership for your port equipment with TROT Solutions lifecycle cost management strategies and engineering expertise.",
    url: "https://www.trotsolutions.com/lifecycle-cost-optimization",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Lifecycle Cost Optimization | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifecycle Cost Optimization | TROT Solutions",
    description:
      "Optimize the total cost of ownership for your port equipment with TROT Solutions lifecycle cost management strategies and engineering expertise.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/lifecycle-cost-optimization",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Lifecycle Cost Optimization"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life Cycle Management", href: "#" },
          {
            label: "Lifecycle Cost Optimization",
            href: "/lifecycle-cost-optimization",
          },
        ]}
        bgImage="assets/images/backgrounds/life_cost_optimization.jpg"
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
        currentPath="/lifecycle-cost-optimization"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/40c8608293b632001b98ec4d76f2a85c.webp"
          title="Lifecycle Cost Optimization"
          text="Make smarter financial and operational decisions with our Lifecycle Cost Optimization services. We analyze the total cost of ownership and develop long-term maintenance strategies that balance reliability with cost-efficiency."
          capabilities={[
            "Total Cost of Ownership (TCO) Analysis",
            "Spare Parts Strategy Planning",
            "Long-Term Maintenance Contracts (LTMC)",
            "Reliability-Centered Maintenance (RCM) Programs"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
