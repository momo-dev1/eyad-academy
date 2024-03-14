"use client";
import React from "react";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SlideContent from "../slider/SlideContent";

interface IProps {
  data: {
    title: string;
    subTitle: string;
    description: string;
    imageSrc: string;
    isBooked: boolean;
  }[];
}

const HeroSection = ({ data }: IProps) => {
  return (
    <section className="bg-custom-gradient  pt-40">
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
            {data.map((slide, index) => (
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
