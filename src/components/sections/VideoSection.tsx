export default function VideoSection() {
  return (
    <section className="video-one">
      <div
        className="video-one__bg jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgposition="50% 0%"
        style={{
          backgroundImage: "url(assets/images/backgrounds/video-one-bg.jpg)",
        }}
      ></div>
      <div
        className="video-one__bg-shape"
        style={{
          backgroundImage: "url(assets/images/shapes/video-one-bg-shape.png)",
        }}
      ></div>
      <div className="container">
        <div
          className="video-one__inner wow fadeInLeft"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div className="video-one__box">
            <a href="assets/videos/video.mp4" className="video-popup">
              <div className="video-one__icon">
                <span className="fas fa-play"></span>
                <i className="ripple"></i>
              </div>
            </a>
            <span className="border-animation border-1"></span>
            <span className="border-animation border-2"></span>
            <span className="border-animation border-3"></span>
          </div>

          <div className="title-box">
            <h2>
              Hundreds of customers trust <br /> our company
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
