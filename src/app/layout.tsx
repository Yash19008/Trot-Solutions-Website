import type { Metadata } from "next";
import "./globals.css";
import FrontendShell from "@/components/layout/FrontendShell";
import LegacyScripts from "@/components/layout/LegacyScripts";
import { Exo_2 } from "next/font/google";
import { Toaster } from "react-hot-toast";

// Self-hosted via next/font — eliminates render-blocking Google Fonts requests
const exo = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-exo", // unique name — style.css references this via var(--font-exo)
});

export const metadata: Metadata = {
  title: "TROT Solutions",
  description:
    "Global Leader in Port and Terminal Equipment Lifecycles. We specialize in engineering products, predictive maintenance, heavy-lift logistics, and complete lifecycle optimization.",
  keywords: [
    "TROT Solutions",
    "Port Equipment",
    "Terminal Equipment",
    "Predictive Maintenance",
    "Heavy-Lift Logistics",
    "Lifecycle Optimization",
    "Cranes",
    "Spreaders",
    "Brokerage",
  ],
  icons: {
    icon: "/assets/images/favicons/favicon.ico",
    apple: "/assets/images/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={exo.variable}>
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/custom-animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-all.css" />
        <link rel="stylesheet" href="/assets/css/jarallax.css" />
        <link rel="stylesheet" href="/assets/css/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/timePicker.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <FrontendShell>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                fontSize: '16px',
                borderRadius: '8px',
                padding: '16px',
              },
            }}
          />
        </FrontendShell>

        {/* Legacy Scripts */}
        <LegacyScripts />
      </body>
    </html>
  );
}
