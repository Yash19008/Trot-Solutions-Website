import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Scrap Management & Recycling | TROT Solutions",
  description:
    "Responsible scrap management and recycling for end-of-life port cranes and equipment. TROT Solutions ensures environmentally compliant disposal across all regions.",
  keywords: [
    "scrap management",
    "equipment recycling",
    "crane scrap",
    "port equipment disposal",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Scrap Management & Recycling | TROT Solutions",
    description:
      "Responsible scrap management and recycling for end-of-life port cranes and equipment. TROT Solutions ensures environmentally compliant disposal across all regions.",
    url: "https://www.trotsolutions.com/scrap-management-recycling",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Scrap Management & Recycling | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrap Management & Recycling | TROT Solutions",
    description:
      "Responsible scrap management and recycling for end-of-life port cranes and equipment. TROT Solutions ensures environmentally compliant disposal across all regions.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/scrap-management-recycling",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Scrap Management & Recycling"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "End of Life Cycle", href: "#" },
          {
            label: "Scrap Management & Recycling",
            href: "/scrap-management-recycling",
          },
        ]}
        bgImage="assets/images/backgrounds/end_of_life_bg.jpeg"
        sidebarTitle="Our Services"
        sidebarLinks={[
          { label: "End-of-Life Services", href: "/end-of-life-services" },
          {
            label: "End-of-Life Assessment & Engineering Studies",
            href: "/end-of-life-assessment-engineering-studies",
          },
          {
            label: "Scrap Management & Recycling",
            href: "/scrap-management-recycling",
          },
          {
            label: "Optional Value-Recovery Services",
            href: "/optional-value-recovery-services",
          },
          { label: "Brokerage & Resale", href: "/brokerage-resale" },
        ]}
        currentPath="/scrap-management-recycling"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/3402dac31d971b7acfe9b3a9f0f6c7ef.webp"
          title="Scrap Management & Recycling"
          text="Turn end-of-life equipment into recovered value while maintaining strict environmental compliance. Our scrap management team specializes in materials segregation, recycling documentation, and revenue recovery."
          capabilities={[
            "Segregation of steel, copper, aluminium, and components",
            "Environmentally compliant disposal",
            "Recycling documentation",
            "Revenue recovery from scrap value",
            "Support for auction or resale of usable components"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
