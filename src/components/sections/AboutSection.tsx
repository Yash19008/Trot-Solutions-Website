export default function AboutSection() {
    return (
        <>
            {/* About One Start  */}
            <section className="about-one" style={{ position: "relative", zIndex: "1", overflow: "hidden" }}>
                <div className="about-one__shape-bg"
                    style={{ position: "absolute", right: "-250px", top: "50px", zIndex: "-1", opacity: "0.05" }}>
                    <img src="assets/images/backgrounds/home_bg_shape_cog.webp" alt="" style={{ width: "800px" }} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="about-one__img-box">
                                    <div className="about-one__img">
                                        <img src="assets/images/resources/dubai_skyline.webp" alt="" />
                                        <div className="about-one__shape-1">
                                            <img src="assets/images/resources/trot_black_logo_global.webp" alt="" />
                                        </div>
                                        {/*  <div className="about-one__video-link">
                                        <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                            <div className="about-one__video-icon">
                                                <span className="fas fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>  */}
                                    </div>
                                    <div className="about-one__img-2">
                                        <img src="assets/images/new_images/about-us-2nd.webp" alt="" />
                                    </div>
                                    <div className="about-one__experience-box">
                                        <div className="about-one__experience-count">
                                            <h3 className="odometer" data-count="25" style={{ color: "var(--builza-black)" }}>00</h3>
                                            <span style={{ color: "var(--builza-black)" }}>+</span>
                                        </div>
                                        <p className="about-one__experience-count-text">Years Of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-one__right">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape"></div>
                                        <span className="section-title__tagline">About Us</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">Trot Solutions is a part of the
                                        Trot Global Group, headquartered in Dubai, UAE. </h2>
                                </div>
                                <p className="about-one__text" style={{ fontSize: "22px" }}>Founded on a bolder
                                    vision to democratize access to ideas and
                                    technology, empowering individuals, business partners Port Authorities, and port
                                    operators to unlock their full operational potential. While our core strength lies in
                                    port technical services, our impact extends far beyond machinery and maintenance.</p>
                                <p className="about-one__text" style={{ fontSize: "22px", marginTop: "20px" }}>
                                    Global trade pulses through ports, but true progress is powered
                                    by people. We operate at the intersection of engineering excellence and human
                                    empowerment, helping ports evolve into smarter, safer, more resilient, and more
                                    sustainable gateways for the world.</p>
                                <div className="about-one__point-box">
                                    <ul className="about-one__point">
                                        <li>
                                            {/*  <div className="about-one__point-icon">
                                            <span className="icon-plan"></span>
                                        </div>  */}
                                            <div className="about-one__point-content">
                                                <h4>Crane Services</h4>
                                                <ul className="about-one__point-two" style={{ marginTop: "15px" }}>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>Life Cycle Management</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>Extended Life Cycle Services</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>End of Life Services</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>Training</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            {/*  <div className="about-one__point-icon">
                                            <span className="icon-interior-design-1"></span>
                                        </div>  */}
                                            <div className="about-one__point-content">
                                                <h4>After Sales & Service</h4>
                                                <ul className="about-one__point-two" style={{ marginTop: "15px" }}>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>OEM Spare Parts</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>MRO Spare Parts</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>Used & Refub Parts</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>Dealership Spare Parts</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About One End  */}
        </>
    );
}
