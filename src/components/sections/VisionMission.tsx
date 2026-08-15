export default function VisionMission() {
    return (
        <>
            {/* Process One Start  */}
            <section className="process-one">
                <div className="services-one__shape-1 float-bob-y" style={{ zIndex: "0", pointerEvents: "none" }}>
                    <img src="assets/images/shapes/services-one-shape-1.webp" alt="" />
                </div>
                <div className="process-one__big-text">
                    <h2>Purpose</h2>
                </div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        {/* <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape"></div>
                            <span className="section-title__tagline">Our Purpose</span>
                        </div> */}
                        <h2 className="section-title__title title-animation">Our Purpose</h2>
                    </div>
                    <div className="vm-wrapper" style={{ marginTop: "0px" }}>
                        <div className="row align-items-stretch">
                            {/* Vision Mission Image Box */}
                            <div className="col-xl-6 col-lg-6 col-md-12 mb-4 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="vm-image-box"
                                    style={{ height: "680px", position: "relative", overflow: "hidden", borderRadius: "0" }}>
                                    <img src="assets/images/team/vision_mission.webp" alt="Vision &amp; Mission"
                                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "400px", objectPosition: "top" }} />
                                    <div
                                        style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)", pointerEvents: "none" }}>
                                    </div>
                                </div>
                            </div>
                            {/* Vision + Mission Combined Card */}
                            <div className="col-xl-6 col-lg-6 col-md-12 mb-4 wow fadeInRight" data-wow-delay="200ms">
                                <div className="vm-card vm-card--combined"
                                    style={{ padding: "35px 35px", textAlign: "left", alignItems: "flex-start", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>

                                    {/*  VISION  */}
                                    <div className="vm-combined__block"
                                        style={{ paddingBottom: "25px", marginBottom: "25px", borderBottom: "2px solid var(--builza-base)" }}>
                                        <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
                                            <div
                                                style={{ width: "5px", height: "36px", background: "var(--builza-base)", borderRadius: "3px", marginRight: "16px", flexShrink: "0" }}>
                                            </div>
                                            <h3 className="vm-card__title" style={{ marginBottom: "0" }}>VISION</h3>
                                        </div>
                                        <p className="vm-card__text" style={{ textAlign: "left", marginBottom: "0" }}>We strive to set a global
                                            benchmark in port management by uniting engineering excellence, operational
                                            excellence, and inclusive innovation.</p>
                                    </div>

                                    {/*  MISSION  */}
                                    <div className="vm-combined__block"
                                        style={{ paddingBottom: "25px", marginBottom: "25px", borderBottom: "2px solid var(--builza-base)" }}>
                                        <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
                                            <div
                                                style={{ width: "5px", height: "36px", background: "var(--builza-base)", borderRadius: "3px", marginRight: "16px", flexShrink: "0" }}>
                                            </div>
                                            <h3 className="vm-card__title" style={{ marginBottom: "0" }}>MISSION</h3>
                                        </div>
                                        <p className="vm-card__text" style={{ textAlign: "left", marginBottom: "0" }}>To revolutionize access to ideas
                                            and technology, enabling all individuals to realize their full creative
                                            potential. Through collaboration, innovation, and inclusivity, we strive to
                                            create a more equitable, inspiring, and future-ready world.</p>
                                    </div>

                                    {/*  QUOTE  */}
                                    <div className="vm-combined__block">
                                        <span
                                            className="fas fa-quote-left"
                                            style={{
                                                fontSize: "24px",
                                                color: "var(--builza-gray)",
                                                marginBottom: "10px",
                                                display: "inline-block",
                                                opacity: 0.5
                                            }}
                                        ></span>
                                        <h4
                                            style={{
                                                color: "var(--builza-black)",
                                                fontStyle: "italic",
                                                fontWeight: "500",
                                                fontSize: "17px",
                                                lineHeight: "1.5",
                                                marginBottom: "15px",
                                            }}
                                        >
                                            “We are firmly committed to complying with all HSE protocols
                                            established by our esteemed clients. We continue to uphold our
                                            HSE standards and zero tolerance policy towards any form of
                                            non-compliance”
                                        </h4>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <div style={{ width: "30px", height: "2px", backgroundColor: "var(--builza-gray)", marginRight: "15px", opacity: 0.5 }}></div>
                                            <div>
                                                <p
                                                    style={{
                                                        color: "var(--builza-black)",
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        margin: "0",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "1px",
                                                    }}
                                                >
                                                    M. Jose Manuel
                                                </p>
                                                <p
                                                    style={{
                                                        color: "var(--builza-gray)",
                                                        fontSize: "13px",
                                                        fontWeight: "600",
                                                        margin: "2px 0 0 0",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.5px",
                                                    }}
                                                >
                                                    Technical Director &bull; Trot Group
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="vm-card__shape"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Process One End  */}
        </>
    );
}
