import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Heavy-Lift Transport & Logistics | TROT Solutions",
  description:
    "Specialized heavy-lift and transport logistics for port cranes and oversized equipment. TROT Solutions manages complex moves across the globe safely and efficiently.",
  keywords: [
    "heavy lift logistics",
    "crane transport",
    "port equipment logistics",
    "heavy lift UAE",
    "TROT Solutions logistics",
  ],
  openGraph: {
    title: "Heavy-Lift Transport & Logistics | TROT Solutions",
    description:
      "Specialized heavy-lift and transport logistics for port cranes and oversized equipment. TROT Solutions manages complex moves across the globe safely and efficiently.",
    url: "https://www.trotsolutions.com/heavy-lift-transport-logistics",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Heavy-Lift Transport & Logistics | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavy-Lift Transport & Logistics | TROT Solutions",
    description:
      "Specialized heavy-lift and transport logistics for port cranes and oversized equipment. TROT Solutions manages complex moves across the globe safely and efficiently.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/heavy-lift-transport-logistics",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Heavy-Lift & Transport Logistics"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life Cycle Management", href: "#" },
          {
            label: "Heavy-Lift & Transport Logistics",
            href: "/heavy-lift-transport-logistics",
          },
        ]}
        bgImage="assets/images/backgrounds/heavy_lift.jpg"
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
        currentPath="/heavy-lift-transport-logistics"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/30bdb3fc92124efb2507146f411eecc9.webp"
          title="Heavy-Lift & Transport Logistics"
          text="Executing complex heavy-lift and transport logistics safely and efficiently. Whether it’s SPMT mobilization for ground movement or complete tug and barge mobilization, our logistics experts handle the most demanding operational requirements."
          capabilities={[
            "Tug & barge mobilization",
            "Heavy-lift vessel with onboard cranes",
            "SPMT mobilization for ground movement",
            "Load-out & load-in operations",
            "Port-to-yard or port-to-scrap transport"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
