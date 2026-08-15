import ServicePageLayout from "@/components/layout/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bromma Spreaders | TROT Solutions",
  description:
    "TROT Solutions is a certified Bromma spreader dealer and service partner. We supply, install, and service Bromma spreaders for container handling operations worldwide.",
  keywords: [
    "Bromma spreaders",
    "container spreader",
    "Bromma dealer",
    "spreader service",
    "TROT Solutions Bromma",
  ],
  openGraph: {
    title: "Bromma Spreaders | TROT Solutions",
    description:
      "TROT Solutions is a certified Bromma spreader dealer and service partner. We supply, install, and service Bromma spreaders for container handling operations worldwide.",
    url: "https://www.trotsolutions.com/bromma",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
        width: 1200,
        height: 630,
        alt: "Bromma Spreaders | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bromma Spreaders | TROT Solutions",
    description:
      "TROT Solutions is a certified Bromma spreader dealer and service partner. We supply, install, and service Bromma spreaders for container handling operations worldwide.",
    images: [
      "https://www.trotsolutions.com/assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.webp",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/bromma",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageLayout
        title="BROMMA"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Strategic Partnerships", href: "#" },
          { label: "Bromma", href: "/bromma" },
        ]}
        bgColor="#1C1D3D"
        hideOverlay={true}
        headerLogo="assets/images/resources/bromma_logo.png"
        sidebarTitle="Strategic Partnerships"
        sidebarLinks={[
          { label: "Bromma", href: "/bromma" },
          { label: "Dutch Lanka Trailers", href: "/dutch-lanka" },
        ]}
        currentPath="/bromma"
      >
        <div className="mb-4">
          <img
            src="assets/images/project/bromma/logo.svg"
            alt="Bromma"
            className="img-fluid"
            style={{ maxHeight: "100px" }}
          />
        </div>
        <p className="service-details__text-1 mb-5">
          Bromma is a trusted partner delivering high-quality equipment and
          spreader solutions for efficient container handling worldwide.
        </p>

        <h3 className="service-details__title-1 mt-5">Available Resources</h3>
        <p className="service-details__text-1 mb-4">
          Download our comprehensive brochures, spare parts catalogs, and
          technical documents below.
        </p>
        <div className="table-responsive">
          <table
            className="table table-bordered table-striped"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          >
            <thead
              style={{
                backgroundColor: "var(--builza-black)",
                color: "var(--builza-white)",
              }}
            >
              <tr>
                <th style={{ padding: "8px 10px" }}>Document Name</th>
                <th
                  style={{
                    padding: "8px 10px",
                    width: "150px",
                    textAlign: "center",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "8px 10px", verticalAlign: "middle" }}>
                  Bromma Overview
                </td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>
                  <a
                    href="assets/pdf/bromma/bromma.pdf"
                    target="_blank"
                    className="thm-btn"
                    style={{
                      padding: "8px 20px",
                      fontSize: "14px",
                      minWidth: "120px",
                    }}
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 10px", verticalAlign: "middle" }}>
                  A partner you can rely on
                </td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>
                  <a
                    href="assets/pdf/bromma/BROM1753 A partner you can rely on-500x707_Print.pdf"
                    target="_blank"
                    className="thm-btn"
                    style={{
                      padding: "8px 20px",
                      fontSize: "14px",
                      minWidth: "120px",
                    }}
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 10px", verticalAlign: "middle" }}>
                  Driving efficiency
                </td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>
                  <a
                    href="assets/pdf/bromma/BROM1753 Driving efficiency -707x1000_Print.pdf"
                    target="_blank"
                    className="thm-btn"
                    style={{
                      padding: "8px 20px",
                      fontSize: "14px",
                      minWidth: "120px",
                    }}
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 10px", verticalAlign: "middle" }}>
                  Low carbon future
                </td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>
                  <a
                    href="assets/pdf/bromma/BROM1753 Low carbon future-500x707_Print.pdf"
                    target="_blank"
                    className="thm-btn"
                    style={{
                      padding: "8px 20px",
                      fontSize: "14px",
                      minWidth: "120px",
                    }}
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 10px", verticalAlign: "middle" }}>
                  EH170U Spare Parts
                </td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>
                  <a
                    href="assets/pdf/bromma/BROM1753-EH170U Spare Parts-V1.pdf"
                    target="_blank"
                    className="thm-btn"
                    style={{
                      padding: "8px 20px",
                      fontSize: "14px",
                      minWidth: "120px",
                    }}
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 10px", verticalAlign: "middle" }}>
                  SSX40-45 Spare Parts
                </td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>
                  <a
                    href="assets/pdf/bromma/BROM1753-SSX40-45 Spare Parts-V2.pdf"
                    target="_blank"
                    className="thm-btn"
                    style={{
                      padding: "8px 20px",
                      fontSize: "14px",
                      minWidth: "120px",
                    }}
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 10px", verticalAlign: "middle" }}>
                  STS45 Spare Parts
                </td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>
                  <a
                    href="assets/pdf/bromma/BROM1753-STS45 Spare Parts-V1.pdf"
                    target="_blank"
                    className="thm-btn"
                    style={{
                      padding: "8px 20px",
                      fontSize: "14px",
                      minWidth: "120px",
                    }}
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 10px", verticalAlign: "middle" }}>
                  YSX40-45E Spare Parts
                </td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>
                  <a
                    href="assets/pdf/bromma/BROM1753-YSX40-45E Spare Parts-V2.pdf"
                    target="_blank"
                    className="thm-btn"
                    style={{
                      padding: "8px 20px",
                      fontSize: "14px",
                      minWidth: "120px",
                    }}
                  >
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 mb-4">
            <img
              src="assets/images/project/bromma/img1.webp"
              alt=""
              className="img-fluid rounded"
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6 mb-4">
            <img
              src="assets/images/project/bromma/img2.webp"
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
