import PageHeader from "@/components/layout/PageHeader";
import ContactMapWrapper from "@/components/ContactMapWrapper";
import Script from "next/script";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactPageForm from "@/components/forms/ContactPageForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | TROT Solutions",
  description:
    "Get in touch with TROT Solutions. Reach our offices in Dubai, Oman, India, Malaysia, Sri Lanka, and Mauritius for all port equipment and engineering service enquiries.",
  keywords: [
    "contact TROT Solutions",
    "TROT Solutions offices",
    "Dubai port equipment contact",
    "engineering services contact",
  ],
  openGraph: {
    title: "Contact Us | TROT Solutions",
    description:
      "Get in touch with TROT Solutions. Reach our offices in Dubai, Oman, India, Malaysia, Sri Lanka, and Mauritius for all port equipment and engineering service enquiries.",
    url: "https://www.trotsolutions.com/contact",
    siteName: "TROT Solutions",
    images: [
      {
        url: "https://www.trotsolutions.com/assets/images/backgrounds/contact_us.png",
        width: 1200,
        height: 630,
        alt: "Contact Us | TROT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | TROT Solutions",
    description:
      "Get in touch with TROT Solutions. Reach our offices in Dubai, Oman, India, Malaysia, Sri Lanka, and Mauritius for all port equipment and engineering service enquiries.",
    images: [
      "https://www.trotsolutions.com/assets/images/backgrounds/contact_us.png",
    ],
  },
  alternates: {
    canonical: "https://www.trotsolutions.com/contact",
  },
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Contact"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        bgImage="assets/images/backgrounds/contact_us.png"
        bgPosition="center 100%"
      />

      {/* Reach our Team Start */}
      <section className="reach-our-team pt-5 pb-5 mt-5">
        <div className="container">
          <SectionTitle tagline="Our Departments" title="Reach our Team" className="" />
          <div className="swiper-container team-carousel">
            <div className="swiper-wrapper" style={{ paddingBottom: "40px" }}>
              <div
                className="swiper-slide mb-4 wow fadeInUp"
                style={{ height: "auto" }}
                data-wow-delay="100ms"
              >
                <div className="team-contact-card" style={{ height: "100%" }}>
                  <div className="team-contact-card__icon">
                    <span className="fas fa-recycle"></span>
                  </div>
                  <h4 className="team-contact-card__title">Life Cycle Mgt.</h4>
                  <div
                    className="team-contact-card__text"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <div className="team-contact-name">
                      <strong>Jose Manuel</strong>
                    </div>
                    <div className="team-contact-email-wrapper">
                      <a
                        className="team-contact-email"
                        href="mailto:jose@trotsolutions.com"
                      >
                        <i className="fas fa-envelope"></i>
                        jose@trotsolutions.com
                      </a>
                    </div>
                    <div className="team-contact-phones">
                      <div className="phone-item">
                        <span className="phone-country">Direct</span>
                        <a href="tel:+971505756954">
                          <i className="fas fa-phone-alt"></i>
                          +971-505756954
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">Direct</span>
                        <a href="tel:+97145647450">
                          <i className="fas fa-phone-alt"></i>
                          +971-45647450
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide mb-4 wow fadeInUp"
                style={{ height: "auto" }}
                data-wow-delay="200ms"
              >
                <div className="team-contact-card" style={{ height: "100%" }}>
                  <div className="team-contact-card__icon">
                    <span className="fas fa-handshake"></span>
                  </div>
                  <h4 className="team-contact-card__title">
                    Strategic Partnerships
                  </h4>
                  <div
                    className="team-contact-card__text"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <div className="team-contact-name">
                      <strong>Paresh B. Patole</strong>
                    </div>
                    <div className="team-contact-email-wrapper">
                      <a
                        className="team-contact-email"
                        href="mailto:paresh@trotsolutions.com"
                      >
                        <i className="fas fa-envelope"></i>
                        paresh@trotsolutions.com
                      </a>
                    </div>
                    <div className="team-contact-phones">
                      <div className="phone-item">
                        <span className="phone-country">INDIA</span>
                        <a href="tel:+919664623344">
                          <i className="fas fa-phone-alt"></i>
                          +91-9664623344
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">UAE</span>
                        <a href="tel:+971529176750">
                          <i className="fas fa-phone-alt"></i>
                          +971529176750
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">OMAN</span>
                        <a href="tel:+96999199185">
                          <i className="fas fa-phone-alt"></i>
                          +969-99199185
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">UAE</span>
                        <a href="tel:+97145647450">
                          <i className="fas fa-phone-alt"></i>
                          +971-45647450
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide mb-4 wow fadeInUp"
                style={{ height: "auto" }}
                data-wow-delay="300ms"
              >
                <div className="team-contact-card" style={{ height: "100%" }}>
                  <div className="team-contact-card__icon">
                    <span className="fas fa-hourglass-end"></span>
                  </div>
                  <h4 className="team-contact-card__title">
                    End-of-Life Services
                  </h4>
                  <div
                    className="team-contact-card__text"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <div className="team-contact-name">
                      <strong>Mohammed Fathan Ali</strong>
                    </div>
                    <div className="team-contact-email-wrapper">
                      <a
                        className="team-contact-email"
                        href="mailto:fathan@trotsolutions.com"
                      >
                        <i className="fas fa-envelope"></i>
                        fathan@trotsolutions.com
                      </a>
                    </div>
                    <div className="team-contact-phones">
                      <div className="phone-item">
                        <span className="phone-country">India</span>
                        <a href="tel:+919845017864">
                          <i className="fas fa-phone-alt"></i>
                          +919845017864
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">Oman</span>
                        <a href="tel:+9682928866">
                          <i className="fas fa-phone-alt"></i> +9682928866
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">UAE</span>
                        <a href="tel:+971582795444">
                          <i className="fas fa-phone-alt"></i>
                          +971582795444
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">UAE</span>
                        <a href="tel:+97145647450">
                          <i className="fas fa-phone-alt"></i>
                          +971-45647450
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide mb-4 wow fadeInUp"
                style={{ height: "auto" }}
                data-wow-delay="400ms"
              >
                <div className="team-contact-card" style={{ height: "100%" }}>
                  <div className="team-contact-card__icon">
                    <span className="fas fa-project-diagram"></span>
                  </div>
                  <h4 className="team-contact-card__title">Projects</h4>
                  <div
                    className="team-contact-card__text"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <div className="team-contact-name">
                      <strong>Bartolome Buenaobra</strong>
                    </div>
                    <div className="team-contact-email-wrapper">
                      <a
                        className="team-contact-email"
                        href="mailto:bart@trotsolutions.com"
                      >
                        <i className="fas fa-envelope"></i>
                        bart@trotsolutions.com
                      </a>
                    </div>
                    <div className="team-contact-phones">
                      <div className="phone-item">
                        <span className="phone-country">Direct</span>
                        <a href="tel:+971503418109">
                          <i className="fas fa-phone-alt"></i>
                          +971503418109
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">Direct</span>
                        <a href="tel:+97145647450">
                          <i className="fas fa-phone-alt"></i>
                          +971-45647450
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide mb-4 wow fadeInUp"
                style={{ height: "auto" }}
                data-wow-delay="500ms"
              >
                <div className="team-contact-card" style={{ height: "100%" }}>
                  <div className="team-contact-card__icon">
                    <span className="fas fa-tools"></span>
                  </div>
                  <h4 className="team-contact-card__title">
                    Extended Life Cycle
                  </h4>
                  <div
                    className="team-contact-card__text"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <div className="team-contact-name">
                      <strong>R Gunalan Ramamuthey</strong>
                    </div>
                    <div className="team-contact-email-wrapper">
                      <a
                        className="team-contact-email"
                        href="mailto:guna@trotsolutions.com"
                      >
                        <i className="fas fa-envelope"></i>
                        guna@trotsolutions.com
                      </a>
                    </div>
                    <div className="team-contact-phones">
                      <div className="phone-item">
                        <span className="phone-country">MALAYSIA</span>
                        <a href="tel:+60165903707">
                          <i className="fas fa-phone-alt"></i> +60165903707
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">UAE</span>
                        <a href="tel:+97145647450">
                          <i className="fas fa-phone-alt"></i> +97145647450
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide mb-4 wow fadeInUp"
                style={{ height: "auto" }}
                data-wow-delay="600ms"
              >
                <div className="team-contact-card" style={{ height: "100%" }}>
                  <div className="team-contact-card__icon">
                    <span className="fas fa-globe-americas"></span>
                  </div>
                  <h4 className="team-contact-card__title">
                    International Business Dev.
                  </h4>
                  <div
                    className="team-contact-card__text"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <div className="team-contact-name">
                      <strong>Daraius Dadachanji</strong>
                    </div>
                    <div className="team-contact-email-wrapper">
                      <a
                        className="team-contact-email"
                        href="mailto:daraius@trotsolutions.com"
                      >
                        <i className="fas fa-envelope"></i>
                        daraius@trotsolutions.com
                      </a>
                    </div>
                    <div className="team-contact-phones">
                      <div className="phone-item">
                        <span className="phone-country">India</span>
                        <a href="tel:+919819279492">
                          <i className="fas fa-phone-alt"></i>
                          +919819279492
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">UAE</span>
                        <a href="tel:+971564164667">
                          <i className="fas fa-phone-alt"></i>
                          +971564164667
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">UAE</span>
                        <a href="tel:+97145647450">
                          <i className="fas fa-phone-alt"></i>
                          +971-45647450
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide mb-4 wow fadeInUp"
                style={{ height: "auto" }}
                data-wow-delay="700ms"
              >
                <div className="team-contact-card" style={{ height: "100%" }}>
                  <div className="team-contact-card__icon">
                    <span className="fas fa-cogs"></span>
                  </div>
                  <h4 className="team-contact-card__title">Spare Parts</h4>
                  <div
                    className="team-contact-card__text"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <div className="team-contact-name">
                      <strong>Ravindra Khare</strong>
                    </div>
                    <div className="team-contact-email-wrapper">
                      <a
                        className="team-contact-email"
                        href="mailto:sales@trotsolutions.com"
                      >
                        <i className="fas fa-envelope"></i>
                        sales@trotsolutions.com
                      </a>
                    </div>
                    <div className="team-contact-phones">
                      <div className="phone-item">
                        <span className="phone-country">India</span>
                        <a href="tel:+917588197761">
                          <i className="fas fa-phone-alt"></i>
                          +91-7588197761
                        </a>
                      </div>
                      <div className="phone-item">
                        <span className="phone-country">India</span>
                        <a href="tel:+919664623344">
                          <i className="fas fa-phone-alt"></i>
                          +91-9664623344
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-nav-style-one"
              style={{ flexDirection: "column" }}
            >
              <div
                className="project-one__nav"
                style={{
                  marginTop: "16px !important",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <div className="team-carousel-prev swiper-button-prev1">
                  <i className="fas fa-angle-left"></i>
                </div>
                <div className="team-carousel-next swiper-button-next1">
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reach our Team End */}

      {/* Contact Page Start */}
      <section className="contact-page">
        <div className="container">
          <div className="contact-page__inner">
            <div className="row">
              <div className="col-xl-12 text-center mb-5">
                <h3 className="contact-page__form-title mb-0">Reach Us</h3>
              </div>
              <div className="col-xl-6">
                <div className="contact-page__left">
                  {/*  Interactive Leaflet Map for Multiple Locations  */}
                  <ContactMapWrapper />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-page__right">
                  <ContactPageForm />
                  <p className="ajax-response mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Page End */}

      {/* Site Footer Start */}
    </>
  );
}
