export default function ProjectsCarousel() {
  return (
    <>
            {/* Project One Start  */}
            <section className="project-one" style={{ position: "relative", overflow: "hidden" }}>
                {/*  Cog Background Shape  */}
                <div
                    style={{ position: "absolute", left: "-150px", top: "50%", transform: "translateY(-50%)", zIndex: "0", opacity: "0.08", pointerEvents: "none" }}>
                    <img src="assets/images/backgrounds/home_bg_shape_cog.webp" alt="" style={{ width: "700px" }} />
                </div>
                <div
                    style={{ position: "absolute", right: "-150px", top: "50%", transform: "translateY(-50%)", zIndex: "0", opacity: "0.08", pointerEvents: "none" }}>
                    <img src="assets/images/backgrounds/home_bg_shape_cog.webp" alt="" style={{ width: "800px" }} />
                </div>
                <div className="container" style={{ position: "relative", zIndex: "1" }}>
                    <div className="project-one__top">
                        <div className="section-title text-left sec-title-animation animation-style2">
                            <div className="section-title__tagline-box">
                                <div className="section-title__tagline-shape"></div>
                                <span className="section-title__tagline">Our Commitment's</span>
                            </div>
                            <h2 className="section-title__title title-animation">Health Safety Environment</h2>
                        </div>
                    </div>
                </div>
                <div className="project-one__bottom">
                    <div className="container">
                        <div className="row align-items-stretch">
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                                <div className="commitment-card h-100">
                                    <h3 className="mb-4 text-center">Our Guiding Principles
                                    </h3>
                                    <div className="commitments-list" style={{ textAlign: "left" }}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="commitment-icon me-3 d-flex justify-content-center align-items-center"
                                                style={{ width: "35px", height: "35px", flexShrink: "0", backgroundColor: "var(--builza-base)", borderRadius: "50%", color: "var(--builza-white)", fontSize: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-1" style={{ fontSize: "20px", fontWeight: "700" }}>Leadership &
                                                    Accountability</h5>
                                                <p className="mb-0 commitment-card-text" style={{ fontSize: "18px" }}>Management
                                                    leads by example, and every employee is empowered to take responsibility
                                                    for HSE.</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="commitment-icon me-3 d-flex justify-content-center align-items-center"
                                                style={{ width: "35px", height: "35px", flexShrink: "0", backgroundColor: "var(--builza-base)", borderRadius: "50%", color: "var(--builza-white)", fontSize: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-1" style={{ fontSize: "20px", fontWeight: "700" }}>Risk Management
                                                </h5>
                                                <p className="mb-0 commitment-card-text" style={{ fontSize: "18px" }}>Hazards are
                                                    identified, assessed, and controlled proactively to prevent harm.</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="commitment-icon me-3 d-flex justify-content-center align-items-center"
                                                style={{ width: "35px", height: "35px", flexShrink: "0", backgroundColor: "var(--builza-base)", borderRadius: "50%", color: "var(--builza-white)", fontSize: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-1" style={{ fontSize: "20px", fontWeight: "700" }}>Open
                                                    Communication</h5>
                                                <p className="mb-0 commitment-card-text" style={{ fontSize: "18px" }}>We encourage
                                                    reporting of unsafe conditions and near-misses without fear of reprisal.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="commitment-icon me-3 d-flex justify-content-center align-items-center"
                                                style={{ width: "35px", height: "35px", flexShrink: "0", backgroundColor: "var(--builza-base)", borderRadius: "50%", color: "var(--builza-white)", fontSize: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-1" style={{ fontSize: "20px", fontWeight: "700" }}>Integration with
                                                    Operations</h5>
                                                <p className="mb-0 commitment-card-text" style={{ fontSize: "18px" }}>HSE is not an
                                                    add-on; it is integral to planning, design, and execution of all
                                                    projects.</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="commitment-icon me-3 d-flex justify-content-center align-items-center"
                                                style={{ width: "35px", height: "35px", flexShrink: "0", backgroundColor: "var(--builza-base)", borderRadius: "50%", color: "var(--builza-white)", fontSize: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-1" style={{ fontSize: "20px", fontWeight: "700" }}>Sustainability
                                                    Focus</h5>
                                                <p className="mb-0 commitment-card-text" style={{ fontSize: "18px" }}>We align our
                                                    solutions with global decarbonization goals and environmental
                                                    stewardship.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                                <div className="commitment-card h-100">
                                    <img src="assets/images/new_images/safety_image.webp" alt="Health Safety Environment"
                                        className="img-fluid rounded mb-4"
                                        style={{ width: "100%", height: "260px", objectFit: "cover" }} />
                                    <h4><strong>At TROT</strong></h4><br />
                                    <p>We believe that protecting people, safeguarding the
                                        environment, and ensuring operational integrity are fundamental to our
                                        success. <br /><br /> We are committed to achieving excellence in Health, Safety, and
                                        Environment (HSE) by embedding these principles into every aspect of our
                                        operations.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 col-md-12 mb-4">
                                <div className="commitment-card h-100">
                                    <h3 className="mb-4 text-center">HSE Commitments</h3>
                                    <div className="commitments-list" style={{ textAlign: "left" }}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="commitment-icon me-3 d-flex justify-content-center align-items-center"
                                                style={{ width: "35px", height: "35px", flexShrink: "0", backgroundColor: "var(--builza-base)", borderRadius: "50%", color: "var(--builza-white)", fontSize: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-1" style={{ fontSize: "20px", fontWeight: "700" }}>Zero Harm</h5>
                                                <p className="mb-0 commitment-card-text" style={{ fontSize: "18px" }}>Safeguarding
                                                    lives and preventing injuries in every operation</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="commitment-icon me-3 d-flex justify-content-center align-items-center"
                                                style={{ width: "35px", height: "35px", flexShrink: "0", backgroundColor: "var(--builza-base)", borderRadius: "50%", color: "var(--builza-white)", fontSize: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-1" style={{ fontSize: "20px", fontWeight: "700" }}>Sustainability
                                                </h5>
                                                <p className="mb-0 commitment-card-text" style={{ fontSize: "18px" }}>Integrating
                                                    decarbonization and eco-friendly solutions into our services</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="commitment-icon me-3 d-flex justify-content-center align-items-center"
                                                style={{ width: "35px", height: "35px", flexShrink: "0", backgroundColor: "var(--builza-base)", borderRadius: "50%", color: "var(--builza-white)", fontSize: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-1" style={{ fontSize: "20px", fontWeight: "700" }}>Compliance</h5>
                                                <p className="mb-0 commitment-card-text" style={{ fontSize: "18px" }}>Adhering to
                                                    global HSE standards, laws, and ethical practices</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="commitment-icon me-3 d-flex justify-content-center align-items-center"
                                                style={{ width: "35px", height: "35px", flexShrink: "0", backgroundColor: "var(--builza-base)", borderRadius: "50%", color: "var(--builza-white)", fontSize: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-1" style={{ fontSize: "20px", fontWeight: "700" }}>Transparency
                                                </h5>
                                                <p className="mb-0 commitment-card-text" style={{ fontSize: "18px" }}>Openly
                                                    reporting performance, incidents and progress</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-0">
                                            <div className="commitment-icon me-3 d-flex justify-content-center align-items-center"
                                                style={{ width: "35px", height: "35px", flexShrink: "0", backgroundColor: "var(--builza-base)", borderRadius: "50%", color: "var(--builza-white)", fontSize: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-1" style={{ fontSize: "20px", fontWeight: "700" }}>Continuous
                                                    Improvement</h5>
                                                <p className="mb-0 commitment-card-text" style={{ fontSize: "18px" }}>Investing in
                                                    innovation, training, and feedback loops</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Project One End  */}
    </>
  );
}
