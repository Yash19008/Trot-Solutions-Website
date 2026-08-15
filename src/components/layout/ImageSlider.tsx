import React from 'react';

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  if (!images || images.length === 0) return null;
  
  return (
    <div className="service-details__img-carousel" style={{position: 'relative'}}>
      <div className="brand-one__carousel swiper-container">
        <div className="swiper-wrapper">
          {images.map((src, index) => (
            <div className="swiper-slide" key={index}>
              <img
                src={src}
                style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="swiper-nav" style={{ display: "flex", gap: "10px", marginTop: "20px", justifyContent: "flex-end" }}>
        <div id="swiper-button-next1" style={{ position: "relative", cursor: "pointer", width: "45px", height: "45px", background: "var(--builza-base)", color: "var(--builza-black)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontSize: "18px", transition: "all 0.3s ease", zIndex: 10 }}>
          <i className="fas fa-angle-left"></i>
        </div>
        <div id="swiper-button-prev1" style={{ position: "relative", cursor: "pointer", width: "45px", height: "45px", background: "var(--builza-base)", color: "var(--builza-black)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontSize: "18px", transition: "all 0.3s ease", zIndex: 10 }}>
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}
