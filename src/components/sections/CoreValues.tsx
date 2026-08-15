export default function CoreValues() {
  return (
    <>
            {/* Why Choose One Start  */}
            <section className="why-choose-one">
                <div className="why-choose-one__bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/why-choose-one-bg.jpg)" }}>
                </div>
                <div className="why-choose-one__bg-2"
                    style={{ backgroundImage: "url(assets/images/backgrounds/stronger_united.png)" }}>
                    <div className="why-choose-one__big-text">
                        <h2>STRONGER UNITED</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-4"></div>
                        <div className="col-xl-6 col-lg-8">
                            <div className="why-choose-one__inner">
                                <div className="why-choose-one__shape-1"></div>
                                <div className="why-choose-one__shape-2"></div>
                                <div className="why-choose-one__center-icon d-none d-lg-flex align-items-center justify-content-center"
                                    style={{ position: "absolute", top: "43%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "10", width: "120px", height: "120px", borderRadius: "50%", background: "transparent" }}>
                                    <img src="assets/images/shapes/infinity_circle.webp" alt="Infinity Circle"
                                        style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </div>
                                <ul className="row">
                                    <li className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="why-choose-one__single">
                                            <div className="why-choose-one__icon ms-lg-auto me-lg-0 ms-0 me-auto">
                                                <span className="icon-planning"></span>
                                            </div>
                                            <h3 className="why-choose-one__title">Culture</h3>
                                            <p className="why-choose-one__text">We strive to create a positive and inclusive
                                                culture that fosters open, honest and meaningful relationships</p>
                                        </div>
                                    </li>
                                    <li className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="why-choose-one__single">
                                            <div className="why-choose-one__icon ms-0 me-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="45"
                                                    height="45" fill="none" stroke="var(--builza-base)" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    {/*  People / Diversity  */}
                                                    <circle cx="22" cy="18" r="8" />
                                                    <circle cx="42" cy="18" r="8" />
                                                    <path d="M6 52 C6 40 14 34 22 34 C30 34 38 40 38 52" />
                                                    <path d="M38 36 C42 33 50 33 58 36 C61 38 62 44 62 52"
                                                        strokeDasharray="4 2" />
                                                </svg>
                                            </div>
                                            <h3 className="why-choose-one__title">Diversity</h3>
                                            <p className="why-choose-one__text">We celebrate and embrace our diversity, finding
                                                ways for everyone to belong.</p>
                                        </div>
                                    </li>
                                    <li className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="why-choose-one__single">
                                            <div className="why-choose-one__icon ms-lg-auto me-lg-0 ms-0 me-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="45"
                                                    height="45" fill="none" stroke="var(--builza-base)" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    {/*  Star / Make a Difference  */}
                                                    <polygon
                                                        points="32,6 38,24 58,24 42,36 48,54 32,42 16,54 22,36 6,24 26,24"
                                                        fill="rgba(var(--builza-base-rgb),0.08)" />
                                                    <polygon
                                                        points="32,6 38,24 58,24 42,36 48,54 32,42 16,54 22,36 6,24 26,24" />
                                                </svg>
                                            </div>
                                            <h3 className="why-choose-one__title">Make a Difference</h3>
                                            <p className="why-choose-one__text">We constantly push ourselves to be our best. We
                                                focus on solutions and we arrive every day inspired to make an impact
                                                through our talents, passion and hard work.</p>
                                        </div>
                                    </li>
                                    <li className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="why-choose-one__single">
                                            <div className="why-choose-one__icon ms-0 me-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="45"
                                                    height="45" fill="none" stroke="var(--builza-base)" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    {/*  Growth / Invest  */}
                                                    <polyline points="6,52 20,36 30,44 44,22 58,12" />
                                                    <polyline points="46,12 58,12 58,24" />
                                                    <circle cx="20" cy="36" r="3" fill="var(--builza-base)" stroke="none" />
                                                    <circle cx="44" cy="22" r="3" fill="var(--builza-base)" stroke="none" />
                                                    <line x1="6" y1="58" x2="58" y2="58" />
                                                </svg>
                                            </div>
                                            <h3 className="why-choose-one__title">Invest</h3>
                                            <p className="why-choose-one__text">We invest in each other and together we win and
                                                learn as a team.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose One End  */}
    </>
  );
}
