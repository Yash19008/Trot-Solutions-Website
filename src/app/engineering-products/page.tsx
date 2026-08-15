import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Engineering Products | TROT Solutions",
  description:
    "Explore TROT Solutions range of engineering products for port cranes — from OEM spare parts and refurbished components to complete crane systems.",
  keywords: [
    "engineering products",
    "crane spare parts",
    "OEM parts",
    "port equipment products",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Engineering Products | TROT Solutions",
    description:
      "Explore TROT Solutions range of engineering products for port cranes — from OEM spare parts and refurbished components to complete crane systems.",
    url: "https://www.trotsolutions.com/engineering-products",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Engineering Products | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Products | TROT Solutions",
    description:
      "Explore TROT Solutions range of engineering products for port cranes — from OEM spare parts and refurbished components to complete crane systems.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/engineering-products",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Engineering Products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life Cycle Management", href: "#" },
          { label: "Engineering Products", href: "/engineering-products" },
        ]}
        bgImage="assets/images/backgrounds/engineering_products.jpeg"
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
        currentPath="/engineering-products"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/1ee31159afad497d1eb69e1298502e44.webp"
          title="Engineering Products"
          text="We provide high-quality engineering products tailored for heavy-duty marine and port applications. Our inventory guarantees that your critical equipment remains operational with certified spare parts and durable MRO items."
          capabilities={[
            "MRO Items",
            "OEM Spare Parts",
            "Bromma Spare Parts",
            "Dutch Lanka Trailer Spare Parts"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
