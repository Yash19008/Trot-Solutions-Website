import PageHeader from "@/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Privacy Policy | TROT Solutions",
  description:
    "Review the terms of use and privacy policy governing your use of the TROT Solutions website and services.",
  keywords: [
    "TROT Solutions terms",
    "terms of use",
    "privacy policy",
    "data privacy",
  ],
  openGraph: {
    title: "Terms & Privacy Policy | TROT Solutions",
    description:
      "Review the terms of use and privacy policy governing your use of the TROT Solutions website and services.",
    url: "https://www.trotsolutions.com/terms-and-privacy",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Terms & Privacy Policy | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Privacy Policy | TROT Solutions",
    description:
      "Review the terms of use and privacy policy governing your use of the TROT Solutions website and services.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/terms-and-privacy",
  },
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Terms &amp; Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Privacy Policy" },
        ]}
        bgImage="assets/images/backgrounds/terms_policy.png"
      />

      {/* Legal Section Start */}
      <section className="service-details" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="service-details__left"
                style={{
                  background: "var(--builza-white)",
                  padding: "50px",
                  borderRadius: "15px",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
                  border: "1px solid var(--builza-base)",
                }}
              >
                {/* --- Privacy Policy --- */}
                <h3
                  className="service-details__title-1 mb-4"
                  style={{
                    marginTop: "0",
                    paddingBottom: "20px",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  Privacy Policy
                </h3>

                <p className="service-details__text-1 mb-4">
                  Welcome to Trot Solutions. This Privacy Policy outlines how we
                  collect, use, and protect your personal information when you
                  visit our website or use our services.
                </p>

                <h4
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  1. Information We Collect
                </h4>
                <p className="service-details__text-1 mb-4">
                  We may collect personal information such as your name, email
                  address, phone number, and company details when you interact
                  with our forms, contact us, or request services. We also
                  automatically collect non-personal data such as your IP
                  address and browsing behavior through cookies.
                </p>

                <h4
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  2. How We Use Your Information
                </h4>
                <p className="service-details__text-1 mb-4">
                  Your information is used to provide and improve our services,
                  communicate with you regarding your inquiries, and send you
                  relevant updates. We do not sell your personal information to
                  third parties.
                </p>

                <h4
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  3. Data Security
                </h4>
                <p className="service-details__text-1 mb-4">
                  We implement appropriate technical and organizational measures
                  to safeguard your personal data against unauthorized access,
                  alteration, disclosure, or destruction.
                </p>

                <h4
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  4. Your Rights
                </h4>
                <p className="service-details__text-1 mb-5">
                  You have the right to access, correct, or request deletion of
                  your personal data. If you wish to exercise any of these
                  rights, please contact us at info@trotsolutions.com.
                </p>

                {/* --- Terms of Use --- */}
                <h3
                  className="service-details__title-1 mb-4"
                  style={{
                    paddingBottom: "20px",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  Terms of Use
                </h3>

                <p className="service-details__text-1 mb-4">
                  These Terms of Use govern your access to and use of the Trot
                  Solutions website and services. By accessing our website, you
                  agree to comply with these terms.
                </p>

                <h4
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  1. Intellectual Property
                </h4>
                <p className="service-details__text-1 mb-4">
                  All content, logos, text, graphics, and software on this
                  website are the property of Trot Solutions and are protected
                  by copyright and intellectual property laws. You may not
                  reproduce, distribute, or modify any materials without our
                  prior written consent.
                </p>

                <h4
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  2. Use of Services
                </h4>
                <p className="service-details__text-1 mb-4">
                  You agree to use our website and services only for lawful
                  purposes. You must not engage in any activity that disrupts or
                  interferes with the functioning of our website or services.
                </p>

                <h4
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  3. Limitation of Liability
                </h4>
                <p className="service-details__text-1 mb-4">
                  Trot Solutions shall not be liable for any direct, indirect,
                  incidental, or consequential damages resulting from your use
                  of or inability to use our website or services.
                </p>

                <h4
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  4. Modifications to Terms
                </h4>
                <p className="service-details__text-1 mb-4">
                  We reserve the right to modify these Terms of Use at any time.
                  Your continued use of the website following any changes
                  constitutes your acceptance of the revised terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Legal Section End */}
    </>
  );
}
