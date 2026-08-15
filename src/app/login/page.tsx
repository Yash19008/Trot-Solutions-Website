import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login | TROT Solutions",
  description:
    "Sign in to your TROT Solutions account to access exclusive portal features and resources.",
  keywords: ["TROT Solutions login", "client portal"],
  robots: { index: false, follow: false },
  openGraph: {
    title: "Login | TROT Solutions",
    description:
      "Sign in to your TROT Solutions account to access exclusive portal features and resources.",
    url: "https://www.trotsolutions.com/login",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Login | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | TROT Solutions",
    description:
      "Sign in to your TROT Solutions account to access exclusive portal features and resources.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/login",
  },
};

export default function Page() {
  return (
    <>
      <LoginForm />
    </>
  );
}
