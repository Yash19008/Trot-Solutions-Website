export default function StatsCounter() {
  return (
    <>
            {/* Counter One Start  */}
            <section className="counter-one">
                <div className="counter-one__shape-1">
                    {/*  <img src="assets/images/shapes/counter-one-shape-1.webp" alt="" />  */}
                </div>
                <div className="container">
                    <div className="counter-one__wrap">
                        <ul className="counter-one__inner list-unstyled">
                            <li className="wow fadeInLeft" data-wow-delay="100ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__icon">
                                        <span className="icon-trophy"></span>
                                    </div>
                                    <div className="counter-one__content">
                                        <div className="counter-one__count count-box">
                                            <h3 className="count-text" data-stop="300" data-speed="2500">0</h3>
                                            <span>+</span>
                                        </div>
                                        <p className="counter-one__count-text">Project Completd</p>
                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInLeft" data-wow-delay="200ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__icon">
                                        <span className="icon-professional"></span>
                                    </div>
                                    <div className="counter-one__content">
                                        <div className="counter-one__count count-box">
                                            <h3 className="count-text" data-stop="7" data-speed="2500">0</h3>
                                            <span>+</span>
                                        </div>
                                        <p className="counter-one__count-text">Countries Presence</p>
                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay="100ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__icon">
                                        <span className="icon-costumer"></span>
                                    </div>
                                    <div className="counter-one__content">
                                        <div className="counter-one__count count-box">
                                            <h3 className="count-text" data-stop="100" data-speed="2500">0</h3>
                                            <span>+</span>
                                        </div>
                                        <p className="counter-one__count-text">Skilled Human Capital</p>
                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay="200ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__icon">
                                        <span className="icon-property-1"></span>
                                    </div>
                                    <div className="counter-one__content">
                                        <div className="counter-one__count count-box">
                                            <h3 className="count-text" data-stop="0" data-speed="2500">-100</h3>
                                            {/*  <span>K+</span>  */}
                                        </div>
                                        <p className="counter-one__count-text">Zero LTI</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Counter One End  */}
    </>
  );
}
