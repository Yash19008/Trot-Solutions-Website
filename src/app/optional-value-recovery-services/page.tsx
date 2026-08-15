import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Value Recovery Services | TROT Solutions",
  description:
    "Recover maximum value from decommissioned port equipment with TROT Solutions value recovery services — including resale, parts harvesting, and recycling programs.",
  keywords: [
    "value recovery",
    "port equipment resale",
    "crane parts recovery",
    "equipment recycling",
    "TROT Solutions",
  ],
  openGraph: {
    title: "Value Recovery Services | TROT Solutions",
    description:
      "Recover maximum value from decommissioned port equipment with TROT Solutions value recovery services — including resale, parts harvesting, and recycling programs.",
    url: "https://www.trotsolutions.com/optional-value-recovery-services",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Value Recovery Services | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Recovery Services | TROT Solutions",
    description:
      "Recover maximum value from decommissioned port equipment with TROT Solutions value recovery services — including resale, parts harvesting, and recycling programs.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/optional-value-recovery-services",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Optional Value-Recovery Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "End of Life Cycle", href: "#" },
          {
            label: "Optional Value-Recovery Services",
            href: "/optional-value-recovery-services",
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
        currentPath="/optional-value-recovery-services"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/0483aabec03262deceead47cad83ff52.webp"
          title="Optional Value-Recovery Services"
          text="Maximize the return on your retired assets. We manage the refurbishment, auction, and global resale of usable components such as motors, drives, and spreaders through our Trot Global network."
          capabilities={[
            "Resale of usable components (motors, drives, spreaders, bogies)",
            "Refurbishment of salvageable parts",
            "Auction management for port equipment",
            "Global brokerage support through Trot Global"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
