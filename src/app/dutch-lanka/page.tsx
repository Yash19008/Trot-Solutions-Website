import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dutch Lanka Trailers | TROT Solutions",
  description:
    "TROT Solutions partners with Dutch Lanka for specialized trailer solutions for port and heavy industry applications across the Middle East, India, and Southeast Asia.",
  keywords: [
    "Dutch Lanka trailers",
    "port trailers",
    "heavy transport equipment",
    "TROT Solutions Dutch Lanka",
  ],
  openGraph: {
    title: "Dutch Lanka Trailers | TROT Solutions",
    description:
      "TROT Solutions partners with Dutch Lanka for specialized trailer solutions for port and heavy industry applications across the Middle East, India, and Southeast Asia.",
    url: "https://www.trotsolutions.com/dutch-lanka",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Dutch Lanka Trailers | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dutch Lanka Trailers | TROT Solutions",
    description:
      "TROT Solutions partners with Dutch Lanka for specialized trailer solutions for port and heavy industry applications across the Middle East, India, and Southeast Asia.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/dutch-lanka",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="DUTCH LANKA"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Strategic Partnerships", href: "#" },
          { label: "Dutch Lanka Trailers", href: "/dutch-lanka" },
        ]}
        bgImage="assets/images/project/dutch_lanka/bg.jpeg"
        sidebarTitle="Strategic Partnerships"
        sidebarLinks={[
          { label: "Bromma", href: "/bromma" },
          { label: "Dutch Lanka Trailers", href: "/dutch-lanka" },
        ]}
        currentPath="/dutch-lanka"
      >
        <div className="mb-4">
          <img
            src="assets/images/project/dutch_lanka/logo.webp"
            alt="Dutch Lanka Trailers"
            className="img-fluid"
            style={{ maxHeight: "80px" }}
          />
        </div>
        <div className="mb-2">
          <h4 className="service-details__title-2 mb-4">
            Dutch Lanka appoints Trot Solutions as authorized After Sales and
            Service Dealers for Middle East & Africa Region
          </h4>
        </div>

        <h3 className="service-details__title-1 mb-4">Products</h3>
        <div className="table-responsive">
          <table
            className="table table-bordered table-striped table-sm"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          >
            <thead
              style={{
                backgroundColor: "var(--builza-black)",
                color: "var(--builza-white)",
              }}
            >
              <tr>
                <th style={{ padding: "8px 12px", fontSize: "16px" }}>
                  Port Trailers
                </th>
                <th style={{ padding: "8px 12px", fontSize: "16px" }}>
                  Road Trailers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Terminal Trailers
                </td>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Skeletal Trailers
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Roro Trailers
                </td>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Flat Bed Trailers
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Skeletal (Corner Guides)
                </td>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Drop Door Trailers
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Draw Bar Trailer
                </td>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Flat Bed Pillars Trailers
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Bunded Trailer
                </td>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Low Bed Trailers
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Fuel Tanker (Re Fueller)
                </td>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Tipper Trailers
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Spreader Trailer
                </td>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Curtain - Sider Trailers
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Tanker Trailers
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Car Carrier Trailers
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ padding: "6px 12px", fontSize: "15px" }}>
                  Extendable Trailers
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 mb-4">
            <img
              src="assets/images/project/dutch_lanka/img1.webp"
              alt=""
              className="img-fluid rounded"
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6 mb-4">
            <img
              src="assets/images/project/dutch_lanka/img3.webp"
              alt=""
              className="img-fluid rounded"
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>
      </ServicePageLayout>
      {/* Service Details End */}

      {/* Site Footer Start */}
    </>
  );
}
