import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details | TROT Solutions",
  description:
    "Read in-depth engineering articles and technical insights from TROT Solutions on port equipment, crane services, and lifecycle management.",
  keywords: [
    "TROT Solutions blog",
    "port engineering article",
    "crane technology",
  ],
  openGraph: {
    title: "Blog Details | TROT Solutions",
    description:
      "Read in-depth engineering articles and technical insights from TROT Solutions.",
    siteName: "TROT Solutions",
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Blog Details"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog Details" }]}
        bgImage="assets/images/backgrounds/blogs.png"
      />

      {/* Blog Details Start  */}
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img-box-1">
                  <div className="blog-details__img">
                    <img
                      src="assets/images/blog/blog-details-img-1.webp"
                      alt=""
                    />
                  </div>
                  <div className="blog-details__date">
                    <p>
                      12
                      <br />
                      <span>Nov</span>
                    </p>
                  </div>
                </div>
                <div className="blog-details__content">
                  <div className="blog-details__user-and-meta">
                    <div className="blog-details__user">
                      <p>
                        <span className="fas fa-user"></span>By Admin
                      </p>
                    </div>
                    <ul className="blog-details__meta list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fas fa-comments"></span>Comments (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fas fa-clock"></span>4 Min Read
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-details__title">
                    Tips for Choosing the Right Building Materials
                  </h3>
                  <p className="blog-details__text-1">
                    Discover essential techniques and materials to ensure
                    strong, safe, and long-lasting construction projects.Explore
                    innovative construction styles and technologies shaping the
                    future of architecture. velit esse cillum dolore eu fugiat
                    null pariatur. Excepteur snit occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                  <p className="blog-details__text-2">
                    .Explore innovative construction styles and technologies
                    shaping the future of architecture. velit esse cillum dolore
                    eu fugiat null pariatur. Excepteur snit occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                  </p>
                  <div className="blog-details__author-box">
                    <h4 className="blog-details__author-text">
                      “Sed do eiusmod tempor incididunt labore et dolore magna
                      aliqua. Uther enim minim veniam, quis nostrud exercitation
                      ullamco laboris nisi aliquip commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate”
                    </h4>
                    <p className="blog-details__author-name">
                      Kane Williamson<span> / CEO</span>
                    </p>
                  </div>
                  <h3 className="blog-details__title-2">
                    Expertise and Experience
                  </h3>
                  <p className="blog-details__text-3">
                    Out enigma ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute inure dolor in the reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat null pariatur. Excepteur
                    snit occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="blog-details__img-box">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="blog-details__img-box-img">
                          <img
                            src="assets/images/blog/blog-details-img-box-img-1.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="blog-details__img-box-img">
                          <img
                            src="assets/images/blog/blog-details-img-box-img-2.webp"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="blog-details__title-3">
                    Modern Construction Trends in 2026
                  </h3>
                  <p className="blog-details__text-4">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet.
                  </p>
                  <ul className="blog-details__points-box">
                    <li>
                      <div className="icon">
                        <span className="icon-check-box"></span>
                      </div>
                      <p>
                        Daily cleaning of office areas, including desks, chairs.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check-box"></span>
                      </div>
                      <p>
                        Floor care, including vacuuming or mopping as needed.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check-box"></span>
                      </div>
                      <p>
                        Dusting and sanitizing of electronics, such computers &
                        telephones.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check-box"></span>
                      </div>
                      <p>
                        Thorough cleaning of conference tables, chairs, and
                        equipment.
                      </p>
                    </li>
                  </ul>
                  <div className="blog-details__tag-and-share">
                    <div className="blog-details__tag">
                      <h3 className="blog-details__tag-title">Tags :</h3>
                      <ul className="blog-details__tag-list list-unstyled">
                        <li>
                          <a href="#">Landscape</a>
                        </li>
                        <li>
                          <a href="#">Residences</a>
                        </li>
                        <li>
                          <a href="#">Home Design</a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog-details__share-box">
                      <h3 className="blog-details__share-title">Share :</h3>
                      <div className="blog-details__share">
                        <a href="#">
                          <span className="fab fa-facebook-f"></span>
                        </a>
                        <a href="#">
                          <span className="fab fa-twitter"></span>
                        </a>
                        <a href="#">
                          <span className="fab fa-pinterest-p"></span>
                        </a>
                        <a href="#">
                          <span className="fab fa-instagram"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-one">
                    <div className="comment-one__single">
                      <div className="comment-one__image">
                        <img src="assets/images/blog/comment-1-1.webp" alt="" />
                      </div>
                      <div className="comment-one__content">
                        <h3>Theresa Webb</h3>
                        <span>02 June 2024 at 03:30 pm</span>
                        <p>
                          The wise man therefore always holds in these matters
                          to this principle of selection. He rejects pleasures
                          to secure other greater pleasures, or else he endures
                          pains to avoid worse pains to the selection point. But
                          in certain to all this circumstances
                        </p>
                        <div className="comment-one__btn-box">
                          <Link href="/blog-details" className="comment-one__btn">
                            <span className="fas fa-share"></span>Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="comment-one__single">
                      <div className="comment-one__image">
                        <img src="assets/images/blog/comment-1-2.webp" alt="" />
                      </div>
                      <div className="comment-one__content">
                        <h3>Cameron Williamson</h3>
                        <span>02 June 2024 at 03:30 pm</span>
                        <p>
                          The wise man therefore always holds in these matters
                          to this principle of selection. He rejects pleasures
                          to secure other greater pleasures, or else he endures
                          pains to avoid worse pains to the selection point. But
                          in certain to all this circumstances
                        </p>
                        <div className="comment-one__btn-box">
                          <Link href="/blog-details" className="comment-one__btn">
                            <span className="fas fa-share"></span>Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-form">
                    <h3 className="comment-form__title">Leave A Comment</h3>
                    <p className="comment-form__text">
                      By using form u agree with the message sorage, you can
                      contact us directly now
                    </p>
                    <form className="comment-one__form" noValidate>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="comment-form__input-box">
                            <input
                              type="text"
                              placeholder="Your Name"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="comment-form__input-box">
                            <input
                              type="email"
                              placeholder="Your Email"
                              name="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__input-box text-message-box">
                            <textarea
                              name="message"
                              placeholder="Write your messege"
                            ></textarea>
                          </div>
                          <div className="comment-form__btn-box">
                            <button
                              type="submit"
                              className="thm-btn comment-form__btn"
                            >
                              submit now{" "}
                              <span className="fas fa-arrow-right"></span>{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="result"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Start Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                {/* Start Sidebar Single */}
                <div
                  className="sidebar__single sidebar__search wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <form action="#" className="sidebar__search-form">
                    <input type="search" placeholder="Search..." />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                {/* End Sidebar Single */}

                {/* Start Sidebar Single */}
                <div
                  className="sidebar__single sidebar__category wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="sidebar__title-box">
                    <div className="sidebar__title-shape"></div>
                    <div className="sidebar__title-shape-2"></div>
                    <h3 className="sidebar__title">Categories</h3>
                  </div>
                  <ul className="sidebar__category-list list-unstyled">
                    <li>
                      <a href="#">
                        Structural Construction{" "}
                        <span className="fas fa-arrow-right"></span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">
                        Foundation Engineering
                        <span className="fas fa-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Residential Projects
                        <span className="fas fa-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Commercial Construction
                        <span className="fas fa-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Interior & Finishing Works
                        <span className="fas fa-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Renovation & Remodeling
                        <span className="fas fa-arrow-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Sidebar Single */}

                {/* Start Sidebar Single */}
                <div
                  className="sidebar__single sidebar__post wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="sidebar__title-box">
                    <div className="sidebar__title-shape"></div>
                    <div className="sidebar__title-shape-2"></div>
                    <h3 className="sidebar__title">Recent Post</h3>
                  </div>
                  <div className="sidebar__post-box">
                    <div className="sidebar__post-single">
                      <div className="sidebar-post__img">
                        <img
                          src="assets/images/blog/recent-post-img-1.webp"
                          alt=""
                        />
                      </div>
                      <div className="sidebar__post-content-box">
                        <h3>
                          <a href="#">
                            Residential vs Commercial Construction Differences.
                          </a>
                        </h3>
                      </div>
                    </div>

                    <div className="sidebar__post-single">
                      <div className="sidebar-post__img">
                        <img
                          src="assets/images/blog/recent-post-img-2.webp"
                          alt=""
                        />
                      </div>
                      <div className="sidebar__post-content-box">
                        <h3>
                          <a href="#">
                            Sustainable & Eco-Friendly Building Ideas.
                          </a>
                        </h3>
                      </div>
                    </div>

                    <div className="sidebar__post-single">
                      <div className="sidebar-post__img">
                        <img
                          src="assets/images/blog/recent-post-img-3.webp"
                          alt=""
                        />
                      </div>
                      <div className="sidebar__post-content-box">
                        <h3>
                          <a href="#">
                            How to Reduce Construction Costs Smartly.
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Sidebar Single */}

                {/* Start Sidebar Single */}
                <div
                  className="sidebar__single sidebar__contact wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div
                    className="sidebar__contact-bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/backgrounds/sidebar-contact-bg.jpg)",
                    }}
                  ></div>
                  <div className="sidebar__contact-icon">
                    <span className="icon-call"></span>
                  </div>
                  <div className="sidebar__contact-text">
                    <p>Call Us Anytime</p>
                    <h3>
                      <a href="tel:1234567890">+111 875 74885</a>
                    </h3>
                  </div>
                  <div className="sidebar__contact-btn">
                    <Link className="thm-btn" href="/contact-1">
                      Contact Us
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
                {/* End Sidebar Single */}

                {/* Start Sidebar Single */}
                <div
                  className="sidebar__single sidebar__tags wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="sidebar__title-box">
                    <div className="sidebar__title-shape"></div>
                    <div className="sidebar__title-shape-2"></div>
                    <h3 className="sidebar__title">Tags Cloud</h3>
                  </div>
                  <ul className="sidebar__tags-list clearfix list-unstyled">
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Digital Agency</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Residences</a>
                    </li>
                    <li>
                      <a href="#">Agency</a>
                    </li>
                    <li>
                      <a href="#">Plumbing</a>
                    </li>
                    <li>
                      <a href="#">Home Design</a>
                    </li>
                    <li>
                      <a href="#">Landscape</a>
                    </li>
                  </ul>
                </div>
                {/* End Sidebar Single */}
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </section>
      {/* Blog Details End */}

      {/* Site Footer Start */}
    </>
  );
}
