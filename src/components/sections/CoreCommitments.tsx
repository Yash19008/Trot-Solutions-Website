export default function CoreCommitments() {
  return (
    <>
            {/* Testimonial One Start  */}
            <section className="why-choose-one" id="our-values">
                <div className="why-choose-one__bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/why-choose-one-bg.jpg)" }}>
                </div>
                <div className="why-choose-one__bg-2" style={{ backgroundImage: "url(assets/images/backgrounds/our_values.png)" }}>
                    <div className="why-choose-one__big-text">
                        <h2>OUR VALUES</h2>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="45"
                                                    height="45" fill="none" stroke="var(--builza-base)" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    {/*  Lightning / High Performance  */}
                                                    <polygon points="36,4 18,34 30,34 28,60 46,30 34,30"
                                                        fill="rgba(var(--builza-base-rgb),0.1)" />
                                                    <polygon points="36,4 18,34 30,34 28,60 46,30 34,30" />
                                                    <line x1="10" y1="32" x2="4" y2="32" opacity="0.5" />
                                                    <line x1="60" y1="32" x2="54" y2="32" opacity="0.5" />
                                                    <line x1="14" y1="14" x2="10" y2="10" opacity="0.5" />
                                                    <line x1="54" y1="14" x2="50" y2="10" opacity="0.5" />
                                                </svg>
                                            </div>
                                            <h3 className="why-choose-one__title">High Performance</h3>
                                            <p className="why-choose-one__text">We deliver the highest quality performance in
                                                everything we do.</p>
                                        </div>
                                    </li>
                                    <li className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="why-choose-one__single">

                                            <div className="why-choose-one__icon ms-0 me-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="45"
                                                    height="45" fill="none" stroke="var(--builza-base)" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    {/*  Shield / Accountable  */}
                                                    <path
                                                        d="M32 6 L54 16 L54 34 C54 47 42 56 32 60 C22 56 10 47 10 34 L10 16 Z"
                                                        fill="rgba(var(--builza-base-rgb),0.08)" />
                                                    <path
                                                        d="M32 6 L54 16 L54 34 C54 47 42 56 32 60 C22 56 10 47 10 34 L10 16 Z" />
                                                    <polyline points="22,32 29,40 44,24" />
                                                </svg>
                                            </div>
                                            <h3 className="why-choose-one__title">Accountable</h3>
                                            <p className="why-choose-one__text">We take ownership and accept full responsibility
                                                for our decisions, actions, and results.</p>
                                        </div>
                                    </li>
                                    <li className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="why-choose-one__single">

                                            <div className="why-choose-one__icon ms-lg-auto me-lg-0 ms-0 me-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="45"
                                                    height="45" fill="none" stroke="var(--builza-base)" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    {/*  Compass / Strategic  */}
                                                    <circle cx="32" cy="32" r="26" />
                                                    <circle cx="32" cy="32" r="4" fill="var(--builza-base)" stroke="none" />
                                                    <polygon points="32,10 38,30 32,28 26,30" fill="var(--builza-base)"
                                                        stroke="none" />
                                                    <polygon points="32,54 26,34 32,36 38,34"
                                                        fill="rgba(var(--builza-base-rgb),0.3)"
                                                        stroke="var(--builza-base)" />
                                                    <line x1="32" y1="6" x2="32" y2="12" />
                                                    <line x1="32" y1="52" x2="32" y2="58" />
                                                    <line x1="6" y1="32" x2="12" y2="32" />
                                                    <line x1="52" y1="32" x2="58" y2="32" />
                                                </svg>
                                            </div>
                                            <h3 className="why-choose-one__title">Strategic</h3>
                                            <p className="why-choose-one__text">We make clear choices, anticipate changing
                                                conditions, and plan for the future.</p>
                                        </div>
                                    </li>
                                    <li className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="why-choose-one__single">

                                            <div className="why-choose-one__icon ms-0 me-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="45"
                                                    height="45" fill="none" stroke="var(--builza-base)" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    {/*  Handshake / Win Together  */}
                                                    <path d="M4 40 L18 28 L28 32 L36 26 L46 28 L60 40" />
                                                    <path d="M18 28 C18 28 20 20 28 20 L36 20 C42 20 46 28 46 28" />
                                                    <path d="M28 32 L32 36 L40 28" />
                                                    <circle cx="12" cy="50" r="6" fill="rgba(var(--builza-base-rgb),0.1)" />
                                                    <circle cx="52" cy="50" r="6" fill="rgba(var(--builza-base-rgb),0.1)" />
                                                    <circle cx="12" cy="50" r="6" />
                                                    <circle cx="52" cy="50" r="6" />
                                                    <line x1="18" y1="50" x2="46" y2="50" />
                                                </svg>
                                            </div>
                                            <h3 className="why-choose-one__title">Win Together</h3>
                                            <p className="why-choose-one__text">We work as one team—showing empathy, respect,
                                                and aligning individual efforts with business goals.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonial One End  */}
    </>
  );
}
