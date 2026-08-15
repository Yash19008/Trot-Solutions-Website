"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function EquipmentSlider({
  images,
  title,
}: {
  images: (string | null | undefined)[];
  title: string;
}) {
  const validImages = images.filter(
    (img): img is string => typeof img === "string" && img.trim() !== ""
  );

  // Fallback to default image if no valid images are found
  if (validImages.length === 0) {
    validImages.push("assets/images/new_images/a5fc8a71b16c87cfd6006e2365924773.jpg");
  }

  return (
    <div style={{ width: "100%", height: "300px", backgroundColor: "#f3f4f6" }}>
      <Swiper
        modules={[Navigation]}
        navigation={validImages.length > 1}
        spaceBetween={0}
        slidesPerView={1}
        style={{ width: "100%", height: "100%" }}
        className="equipment-swiper"
      >
        {validImages.map((img, idx) => (
          <SwiperSlide key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={img}
              alt={`${title} - Slide ${idx + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill", // Fits the image properly without cropping
                padding: "0px", // Slight padding so it doesn't touch the very edge
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles to make swiper arrows look good */}
      <style>{`
        .equipment-swiper .swiper-button-next,
        .equipment-swiper .swiper-button-prev {
          color: #1e293b !important;
          background: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .equipment-swiper .swiper-button-next svg,
        .equipment-swiper .swiper-button-prev svg {
          display: none !important;
        }
        .equipment-swiper .swiper-button-next:hover,
        .equipment-swiper .swiper-button-prev:hover {
          background: var(--builza-base, #eab308);
          color: #ffffff !important;
        }
        .equipment-swiper .swiper-button-next:after {
          content: '❯' !important;
          font-size: 16px !important;
          font-weight: 900;
        }
        .equipment-swiper .swiper-button-prev:after {
          content: '❮' !important;
          font-size: 16px !important;
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}
