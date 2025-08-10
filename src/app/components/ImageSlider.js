"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function DXOImageSlider() {
  const slides = [
      "/images/col-11.jpg",
    "/images/col-765.jpeg",
    "/images/col-8.webp",
    "/images/col-9.webp",
    "/images/col-6.jpg",
  ];

  return (
    <div className="w-full relative pt-1">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[400px] md:h-[550px]"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              layout="fill"
              objectFit="cover"
              priority={idx === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
