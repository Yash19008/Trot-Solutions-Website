import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | TROT Solutions",
  description:
    "Latest news, updates and technical insights from TROT Solutions.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Insights"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        bgImage="assets/images/new_images/0ec213e3dcb552f1f9b3aec9514564b2.jpg"
      />

      {/* Blog Page Start */}
      <section className="blog-page">
        <div className="container">
          <div className="blog-one__inner">
            <div className="row">
              {/* Blog One Single Start */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__single-inner">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-1.webp" alt="" />
                        <div className="blog-one__tags">
                          <span>Construction</span>
                        </div>
                      </div>
                      <div className="blog-one__date">
                        <p>
                          10 <span>Nov</span>
                        </p>
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <ul className="blog-one__meta list-unstyled">
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-user"></span>Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-comments"></span>Comment
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-one__title">
                        <Link href="/blog-details">
                          Top Construction Tips for a Strong & Durable Building
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        Learn essential construction tips to ensure safety,
                        durability, and long-term performance.
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__read-more-box">
                    <Link href="/blog-details" className="blog-one__read-more">
                      Read More <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog One Single End */}
              {/* Blog One Single Start */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__single-inner">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-2.webp" alt="" />
                        <div className="blog-one__tags">
                          <span>Construction</span>
                        </div>
                      </div>
                      <div className="blog-one__date">
                        <p>
                          15 <span>Aug</span>
                        </p>
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <ul className="blog-one__meta list-unstyled">
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-user"></span>Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-comments"></span>Comment
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-one__title">
                        <Link href="/blog-details">
                          Modern Construction Materials You Should Know
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        Learn essential construction tips to ensure safety,
                        durability, and long-term performance.
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__read-more-box">
                    <Link href="/blog-details" className="blog-one__read-more">
                      Read More <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog One Single End */}
              {/* Blog One Single Start */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__single-inner">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-3.webp" alt="" />
                        <div className="blog-one__tags">
                          <span>Construction</span>
                        </div>
                      </div>
                      <div className="blog-one__date">
                        <p>
                          25 <span>Mar</span>
                        </p>
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <ul className="blog-one__meta list-unstyled">
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-user"></span>Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-comments"></span>Comment
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-one__title">
                        <Link href="/blog-details">
                          Common Construction Mistakes and How to Avoid Them
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        Learn essential construction tips to ensure safety,
                        durability, and long-term performance.
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__read-more-box">
                    <Link href="/blog-details" className="blog-one__read-more">
                      Read More <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog One Single End */}
              {/* Blog One Single Start */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__single-inner">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-1.webp" alt="" />
                        <div className="blog-one__tags">
                          <span>Construction</span>
                        </div>
                      </div>
                      <div className="blog-one__date">
                        <p>
                          10 <span>Nov</span>
                        </p>
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <ul className="blog-one__meta list-unstyled">
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-user"></span>Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-comments"></span>Comment
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-one__title">
                        <Link href="/blog-details">
                          Top Construction Tips for a Strong & Durable Building
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        Learn essential construction tips to ensure safety,
                        durability, and long-term performance.
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__read-more-box">
                    <Link href="/blog-details" className="blog-one__read-more">
                      Read More <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog One Single End */}
              {/* Blog One Single Start */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__single-inner">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-2.webp" alt="" />
                        <div className="blog-one__tags">
                          <span>Construction</span>
                        </div>
                      </div>
                      <div className="blog-one__date">
                        <p>
                          15 <span>Aug</span>
                        </p>
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <ul className="blog-one__meta list-unstyled">
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-user"></span>Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-comments"></span>Comment
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-one__title">
                        <Link href="/blog-details">
                          Modern Construction Materials You Should Know
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        Learn essential construction tips to ensure safety,
                        durability, and long-term performance.
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__read-more-box">
                    <Link href="/blog-details" className="blog-one__read-more">
                      Read More <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog One Single End */}
              {/* Blog One Single Start */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__single-inner">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-3.webp" alt="" />
                        <div className="blog-one__tags">
                          <span>Construction</span>
                        </div>
                      </div>
                      <div className="blog-one__date">
                        <p>
                          25 <span>Mar</span>
                        </p>
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <ul className="blog-one__meta list-unstyled">
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-user"></span>Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <span className="fas fa-comments"></span>Comment
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-one__title">
                        <Link href="/blog-details">
                          Common Construction Mistakes and How to Avoid Them
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        Learn essential construction tips to ensure safety,
                        durability, and long-term performance.
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__read-more-box">
                    <Link href="/blog-details" className="blog-one__read-more">
                      Read More <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog One Single End */}

              {/* Blog List Pagination */}
              <div className="blog-list__pagination">
                <ul className="pg-pagination list-unstyled">
                  <li className="count active">
                    <a href="#">1</a>
                  </li>
                  <li className="count">
                    <a href="#">2</a>
                  </li>
                  <li className="count">
                    <a href="#">3</a>
                  </li>
                  <li className="next">
                    <a href="#" aria-label="Next">
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Page End */}

      {/* Site Footer Start */}
    </>
  );
}
