import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | TROT Solutions",
  description:
    "The page you are looking for does not exist. Return to TROT Solutions homepage.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="404 Error"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "404 Error" }]}
        bgImage="assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.jpg"
      />

      {/* Start Error Page */}
      <section className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__wrapper text-center">
                <div className="error-page__content">
                  <h2>404</h2>
                  <h3>Opps! Page Not Found</h3>
                  <p>Sorry, but the page you are looking for does not exist.</p>
                  <form className="error-page__form">
                    <div className="error-page__form-input">
                      <input type="search" placeholder="Search here" />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                  <div className="btn-box">
                    <Link href="/" className="thm-btn">
                      Go Back Home<span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Error Page */}

      {/* Site Footer Start */}
    </>
  );
}
