import React from "react";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__bg" style={{ backgroundImage: "url(assets/images/backgrounds/site-footer-bg.jpg)" }}>
            </div>
            <div className="site-footer__top">
                <div className="container-fluid" style={{ padding: "0 15px" }}>
                    <div className="site-footer__top-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 mb-4 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__about">
                                    <div className="footer-widget__about-logo">
                                        <Link href="/"><img src="assets/images/resources/Trot-Global-Logo.webp"
                                            width="160" alt="" style={{ marginLeft: "-12px" }} /></Link>
                                    </div>
                                    <p className="footer-widget__about-text" style={{ fontStyle: "italic" }}>"Every dock we
                                        service, every machine we
                                        maintain, every system we optimize is a step toward a more equitable and
                                        sustainable world"</p>
                                    <div className="footer-widget__social">
                                        <a href="#"><span className="fab fa-linkedin"></span></a>
                                        <a href="#"><span className="fab fa-twitter"></span></a>
                                        <a href="#"><span className="fab fa-instagram"></span></a>
                                        <a href="https://wa.me/971526500217" target="_blank" rel="noopener noreferrer"><span className="fab fa-whatsapp"></span></a>
                                    </div>
                                </div>
                            </div>
                            {/*  Life Cycle Management  */}
                            <div className="col-xl-3 col-lg-6 col-md-6 mb-4 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__services">
                                    <h4 className="footer-widget__title">Life Cycle Management</h4>
                                    <ul className="footer-widget__links-list list-unstyled">
                                        <li><span className="icon-right"></span><Link href="/preventive-predictive-maintenance">Preventive & Predictive
                                            Maintenance</Link></li>
                                        <li><span className="icon-right"></span><Link href="/engineering-products">Engineering Products</Link></li>
                                        <li><span className="icon-right"></span><Link href="/technical-consulting-services">Technical Consulting
                                            Services</Link></li>
                                        <li><span className="icon-right"></span><Link href="/lifecycle-cost-optimization">Lifecycle Cost Optimization</Link>
                                        </li>
                                        <li><span className="icon-right"></span><Link href="/heavy-lift-transport-logistics">Heavy Lift & Transport
                                            Logistics</Link></li>
                                        <li><span className="icon-right"></span><Link href="/documentation-compliance">Documentation & Compliance</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/*  Extended Life Cycle Services  */}
                            <div className="col-xl-3 col-lg-6 col-md-6 mb-4 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__services">
                                    <h4 className="footer-widget__title">Extended Life Cycle</h4>
                                    <ul className="footer-widget__links-list list-unstyled">
                                        <li><span className="icon-right"></span><Link href="/health-assessment-diagnostics">Health Assessment &
                                            Diagnostics</Link></li>
                                        <li><span className="icon-right"></span><Link href="/structural-life-extension">Structural Life Extension</Link>
                                        </li>
                                        <li><span className="icon-right"></span><Link href="/sustainability-enhancements">Sustainability Enhancements</Link>
                                        </li>
                                        <li><span className="icon-right"></span><Link href="/modernization-upgrades">Modernization & Upgrades</Link>
                                        </li>
                                        <li><span className="icon-right"></span><Link href="/safety-enhancements">Safety
                                            Enhancements</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*  End of Life Services  */}
                            <div className="col-xl-3 col-lg-6 col-md-6 mb-4 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__services">
                                    <h4 className="footer-widget__title">End of Life Services</h4>
                                    <ul className="footer-widget__links-list list-unstyled">
                                        <li><span className="icon-right"></span><Link href="/end-of-life-assessment-engineering-studies">End of Life
                                            Assessment & Eng.
                                            Studies</Link></li>
                                        <li><span className="icon-right"></span><Link href="/end-of-life-services">Engineered Dismantling
                                            Solutions</Link></li>
                                        <li><span className="icon-right"></span><Link href="/scrap-management-recycling">Scrap Management & Recycling</Link>
                                        </li>
                                        <li><span className="icon-right"></span><Link href="/brokerage-resale">Brokerage & Resale</Link>
                                        </li>
                                        <li><span className="icon-right"></span><Link href="/optional-value-recovery-services">Optional Value Recovery
                                            Services</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>



                        {/*  Global Locations Section  */}
                        <div className="row mt-4 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                            {/*  UAE  */}
                            <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-location-card">
                                    <img src="assets/images/shapes/sliding-text-icon-1.webp" alt=""
                                        className="footer-location-shape" />
                                    <h5
                                        style={{ color: "var(--builza-white)", fontWeight: "700", fontSize: "20px", marginBottom: "20px", textTransform: "uppercase" }}>
                                        UAE <br /> HEAD OFFICE</h5>

                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        #1307, ETA Stars Al Manara Tower, Burj Khalifa District, Business Bay, Dubai-
                                        UAE</p>
                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+97145647450" style={{ color: "inherit" }}>+971 45 647450</a>
                                        </span>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+971529644466" style={{ color: "inherit" }}>+971 52 96 444 66</a>
                                        </span>
                                    </p>
                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}>
                                            <i className="fas fa-envelope" style={{ color: "var(--builza-base)" }}></i>
                                            <a href="mailto:info@trotsolutions.com"
                                                style={{ color: "inherit", wordBreak: "break-word", fontSize: "15px" }}>info@trotsolutions.com</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {/*  OMAN  */}
                            <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-location-card">
                                    <img src="assets/images/shapes/sliding-text-icon-1.webp" alt=""
                                        className="footer-location-shape" />
                                    <h5
                                        style={{ color: "var(--builza-white)", fontWeight: "700", fontSize: "20px", marginBottom: "20px", textTransform: "uppercase" }}>
                                        OMAN</h5>

                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        #303, Beach One, Way 2601<br />Qurum Muscat<br />Sultanate of Oman</p>
                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+96891444471" style={{ color: "inherit" }}>+968-91444471</a>
                                        </span>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+96899199185" style={{ color: "inherit" }}>+968-99199185</a>
                                        </span>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+96894569000" style={{ color: "inherit" }}>+968-94569000</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {/*  MALAYSIA  */}
                            <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-location-card">
                                    <img src="assets/images/shapes/sliding-text-icon-1.webp" alt=""
                                        className="footer-location-shape" />
                                    <h5
                                        style={{ color: "var(--builza-white)", fontWeight: "700", fontSize: "20px", marginBottom: "20px", textTransform: "uppercase" }}>
                                        MALAYSIA</h5>

                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        No 58, Jalan Rishah Indah 2<br />Taman Desa, Rishah Indah 30100<br />Ipoh Perak,
                                        Malaysia</p>
                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+60165903707" style={{ color: "inherit" }}>+60 16-590 3707</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {/*  INDIA  */}
                            <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-location-card">
                                    <img src="assets/images/shapes/sliding-text-icon-1.webp" alt=""
                                        className="footer-location-shape" />
                                    <h5
                                        style={{ color: "var(--builza-white)", fontWeight: "700", fontSize: "20px", marginBottom: "20px", textTransform: "uppercase" }}>
                                        INDIA</h5>

                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        #103 Shelton Sapphire Sector 15, CBD Belapur, Navi Mumbai- 400706<br />Republic of
                                        India</p>
                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+919664623344" style={{ color: "inherit" }}>+91-9664623344</a>
                                        </span>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+971529176750" style={{ color: "inherit" }}>+971-529176750</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {/*  MAURITIUS  */}
                            <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="500ms">
                                <div className="footer-location-card">
                                    <img src="assets/images/shapes/sliding-text-icon-1.webp" alt=""
                                        className="footer-location-shape" />
                                    <h5
                                        style={{ color: "var(--builza-white)", fontWeight: "700", fontSize: "20px", marginBottom: "20px", textTransform: "uppercase" }}>
                                        MAURITIUS</h5>

                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        La Pipe, Midlands<br />Mauritius</p>
                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+971529644466" style={{ color: "inherit" }}>+971 52 96 444 66</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {/*  SRI LANKA  */}
                            <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="600ms">
                                <div className="footer-location-card">
                                    <img src="assets/images/shapes/sliding-text-icon-1.webp" alt=""
                                        className="footer-location-shape" />
                                    <h5
                                        style={{ color: "var(--builza-white)", fontWeight: "700", fontSize: "20px", marginBottom: "20px", textTransform: "uppercase" }}>
                                        SRI LANKA</h5>

                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        No. 5th Floor, No. 4A, Ohlums Place, Colombo 08, postcode:
                                        00800</p>
                                    <p
                                        style={{ color: "var(--builza-white)", opacity: "1", fontSize: "16px", marginBottom: "20px" }}>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+94720569000" style={{ color: "inherit" }}>+94 72 056 9000</a>
                                        </span>
                                      	<span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+971529644466" style={{ color: "inherit" }}>+971 52 964 4466</a>
                                        </span>
                                        <span style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}>
                                            <i className="fas fa-phone"
                                                style={{ color: "var(--builza-base)", transform: "rotate(90deg)" }}></i>
                                            <a href="tel:+919845017864" style={{ color: "inherit" }}>+91 98450 17864</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container-fluid" style={{ padding: "0 15px" }}>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <div className="site-footer__copyright">
                                    <p className="site-footer__copyright-text">Copyright@ 2026 <Link href="/">Trot</Link>.
                                        All Rights Reserved.</p>
                                </div>
                                <div className="site-footer__bottom-menu-box">
                                    <ul className="list-unstyled site-footer__bottom-menu">
                                        <li><Link href="/terms-and-privacy">Terms of Use & Privacy Policy</Link></li>
                                        <li><a href="mailto:info@trotsolutions.com">Support:
                                            info@trotsolutions.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
