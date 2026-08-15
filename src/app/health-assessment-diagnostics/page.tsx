import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";
import Script from "next/script";
import { CAROUSEL_IMAGES } from "@/lib/carouselImages";
import HSEQuote from "@/components/sections/HSEQuote";
import ServiceDetailsContent from "@/components/ui/ServiceDetailsContent";

export const metadata: Metadata = {
  title: "Health Assessment & Diagnostics | TROT Solutions",
  description:
    "TROT Solutions provides comprehensive health assessments and diagnostics for port cranes and terminal equipment — identifying issues before they cause downtime.",
  keywords: [
    "crane health assessment",
    "equipment diagnostics",
    "port equipment inspection",
    "TROT Solutions diagnostics",
  ],
  openGraph: {
    title: "Health Assessment & Diagnostics | TROT Solutions",
    description:
      "TROT Solutions provides comprehensive health assessments and diagnostics for port cranes and terminal equipment — identifying issues before they cause downtime.",
    url: "https://www.trotsolutions.com/health-assessment-diagnostics",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Health Assessment & Diagnostics | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Assessment & Diagnostics | TROT Solutions",
    description:
      "TROT Solutions provides comprehensive health assessments and diagnostics for port cranes and terminal equipment — identifying issues before they cause downtime.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/health-assessment-diagnostics",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="Health Assessment & Diagnostics"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Extended Life Cycle", href: "#" },
          {
            label: "Health Assessment & Diagnostics",
            href: "/health-assessment-diagnostics",
          },
        ]}
        bgImage="assets/images/backgrounds/health_assesment.jpg"
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
        currentPath="/health-assessment-diagnostics"

        carouselImages={CAROUSEL_IMAGES}
      >
        <ServiceDetailsContent
          image="assets/images/new_images/15443419e8b9154de7ab80dde16c50da.webp"
          title="Health Assessment & Diagnostics"
          text="Proactively identify and address equipment issues before they escalate. Our advanced diagnostic services utilize thermal imaging, AI-based monitoring, and detailed structural assessments to keep your assets in prime condition."
          capabilities={[
            "Structural Integrity Assessment",
            "Residual Life Analysis (RLA)",
            "Fatigue Analysis & Crack Detection",
            "Vibration & Noise Diagnostics",
            "Thermal Imaging for Electrical Systems",
            "Load Testing & Proof Load Certification",
            "Drive & Motor Health Trend Analysis",
            "Gearbox Condition Monitoring",
            "Rope Health Monitoring (AI-based)"
          ]}
        />
      </ServicePageLayout>
      {/* Service Details End */}

      <HSEQuote />

      {/* Site Footer Start */}
    </>
  );
}
