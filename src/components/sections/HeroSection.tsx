"use client";
import React from "react";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SlideContent from "../slider/SlideContent";
import { slidesData } from "@/utils/data";

const HeroSection = () => {
  return (
    <section className="bg-custom-gradient md:pt-24 pt-20">
      <MaxWidthWrapper>
        <div dir="rtl" className="slide-container">
          <Swiper
            pagination={{ dynamicBullets: true }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index} className={`slide-item-${index + 1}`}>
                <SlideContent {...slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
