"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`stricky-header stricked-menu main-menu ${isSticky ? "stricky-fixed" : ""}`}>
        <div className="sticky-header__content">
          {/* We duplicate the header for the sticky nav, as per the original theme's JS behavior */}
        </div>
      </div>
      <header className="main-header">
            <div className="main-menu__top">
                <div className="main-menu__top-inner">
                    <ul className="list-unstyled main-menu__contact-list">
                        <li>
                            <div className="icon">
                                <i className="fal fa-envelope"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:info@trotsolutions.com">info@trotsolutions.com</a>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel:+97145647450" style={{ color: "inherit" }}>+971-45647450</a></p>
                            </div>
                        </li>
                    </ul>
                    <p className="main-menu__top-welcome-text">Smart Ports. Strong People. Shared Future.</p>
                    <div className="main-menu__top-right">
                        <p className="main-menu__social-title">Follow Us On:</p>
                        <div className="main-menu__social">
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link href="/"><img src="assets/images/resources/logo.webp" width="150" alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="main-menu__main-menu-box">
                            <a href="#" className="mobile-nav__toggler" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(true); }}><i className="fa fa-bars"></i></a>
                            <ul className="main-menu__list">
                                <li>
                                    <Link href="/">Home </Link>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Life Cycle Management</a>
                                    <ul className="shadow-box">
                                        <li><Link href="/preventive-predictive-maintenance">Preventive & Predictive
                                                Maintenance</Link></li>
                                        <li><Link href="/engineering-products">Engineering Products</Link></li>
                                        <li><Link href="/technical-consulting-services">Technical Consulting
                                                Services</Link></li>
                                        <li><Link href="/lifecycle-cost-optimization">Lifecycle Cost Optimization</Link>
                                        </li>
                                        <li><Link href="/heavy-lift-transport-logistics">Heavy-Lift & Transport
                                                Logistics</Link></li>
                                        <li><Link href="/documentation-compliance">Documentation & Compliance</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Extended Life Cycle</a>
                                    <ul className="shadow-box">
                                        <li><Link href="/health-assessment-diagnostics">Health Assessment &
                                                Diagnostics</Link></li>
                                        <li><Link href="/structural-life-extension">Structural Life Extension</Link></li>
                                        <li><Link href="/sustainability-enhancements">Sustainability Enhancements</Link>
                                        </li>
                                        <li><Link href="/modernization-upgrades">Modernization & Upgrades</Link></li>
                                        <li><Link href="/safety-enhancements">Safety Enhancements</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">End of Life Cycle</a>
                                    <ul className="shadow-box">
                                        <li><Link href="/end-of-life-services">End-of-Life Services</Link></li>
                                        <li><Link href="/end-of-life-assessment-engineering-studies">End-of-Life
                                                Assessment & Engineering Studies</Link></li>
                                        <li><Link href="/brokerage-resale">Brokerage &amp; Resale</Link></li>
                                        <li><Link href="/scrap-management-recycling">Scrap Management & Recycling</Link>
                                        </li>
                                        <li><Link href="/optional-value-recovery-services">Optional Value-Recovery
                                                Services</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Strategic Partnerships</a>
                                    <ul className="shadow-box">
                                        <li><Link href="/bromma">Bromma</Link></li>
                                        <li><Link href="/dutch-lanka">Dutch Lanka Trailers</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Insights</a>
                                    <ul className="shadow-box">
                                        <li><Link href="/blog">Blogs</Link></li>
                                        <li><Link href="/tech-talks">Tech Talks</Link></li>
                                        <li><Link href="/careers">Careers</Link></li>
                                        <li><Link href="/resale-equipments">Resale Equipments</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
      
      {/* Mobile Menu */}
      <div className={`mobile-nav__wrapper ${isMobileMenuOpen ? "expanded" : ""}`}>
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fa fa-times"></i>
          </span>
          
            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

            <div className="logo-box">
                <Link href="/" aria-label="logo image"><img src="assets/images/resources/logo.webp" width="150"
                        alt="" /></Link>
            </div>
            {/*  /.logo-box  */}
            <div className="mobile-nav__container">
                            <ul className="main-menu__list">
                                <li>
                                    <Link href="/">Home </Link>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Life Cycle Management</a>
                                    <ul className="shadow-box">
                                        <li><Link href="/preventive-predictive-maintenance">Preventive & Predictive
                                                Maintenance</Link></li>
                                        <li><Link href="/engineering-products">Engineering Products</Link></li>
                                        <li><Link href="/technical-consulting-services">Technical Consulting
                                                Services</Link></li>
                                        <li><Link href="/lifecycle-cost-optimization">Lifecycle Cost Optimization</Link>
                                        </li>
                                        <li><Link href="/heavy-lift-transport-logistics">Heavy-Lift & Transport
                                                Logistics</Link></li>
                                        <li><Link href="/documentation-compliance">Documentation & Compliance</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Extended Life Cycle</a>
                                    <ul className="shadow-box">
                                        <li><Link href="/health-assessment-diagnostics">Health Assessment &
                                                Diagnostics</Link></li>
                                        <li><Link href="/structural-life-extension">Structural Life Extension</Link></li>
                                        <li><Link href="/sustainability-enhancements">Sustainability Enhancements</Link>
                                        </li>
                                        <li><Link href="/modernization-upgrades">Modernization & Upgrades</Link></li>
                                        <li><Link href="/safety-enhancements">Safety Enhancements</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">End of Life Cycle</a>
                                    <ul className="shadow-box">
                                        <li><Link href="/end-of-life-services">End-of-Life Services</Link></li>
                                        <li><Link href="/end-of-life-assessment-engineering-studies">End-of-Life
                                                Assessment & Engineering Studies</Link></li>
                                        <li><Link href="/brokerage-resale">Brokerage &amp; Resale</Link></li>
                                        <li><Link href="/scrap-management-recycling">Scrap Management & Recycling</Link>
                                        </li>
                                        <li><Link href="/optional-value-recovery-services">Optional Value-Recovery
                                                Services</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Strategic Partnerships</a>
                                    <ul className="shadow-box">
                                        <li><Link href="/bromma">Bromma</Link></li>
                                        <li><Link href="/dutch-lanka">Dutch Lanka Trailers</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Insights</a>
                                    <ul className="shadow-box">
                                        <li><Link href="/blog">Blogs</Link></li>
                                        <li><Link href="/tech-talks">Tech Talks</Link></li>
                                        <li><Link href="/careers">Careers</Link></li>
                                        <li><Link href="/resale-equipments">Resale Equipments</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
            </div>
            {/*  /.mobile-nav__container  */}

            <ul className="mobile-nav__contact list-unstyled">
                <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:info@trotsolutions.com">info@trotsolutions.com</a>
                </li>
                <li>
                    <i className="fas fa-phone"></i>
                    <a href="tel:+97145647450">+971 45 647450</a>
                </li>
            </ul>{/*  /.mobile-nav__contact  */}
            <div className="mobile-nav__top">
                <div className="mobile-nav__social">
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-facebook-square"></a>
                    <a href="#" className="fab fa-pinterest-p"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>{/*  /.mobile-nav__social  */}
            </div>{/*  /.mobile-nav__top  */}



        </div>
        {/*  /.mobile-nav__content  */}
    </div>
    {/*  /.mobile-nav__wrapper  */}
    </>
  );
}
