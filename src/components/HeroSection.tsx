"use client";
import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SlideContent from "./Slider/SlideContent";

// Slide data array
const slides = [
  {
    title: "أفضل منصة تعليمية مصرية متخصصة في دورات المناهج الدولية IG",
    subTitle: "مرحباً بك في منصة اكاديمية إياد.كوم",
    description:
      "نحن الرائدون في مجال التعليم الإلكتروني بالوطن العربي، مقدمين دورات شاملة لجميع الفئات العمرية. منصتنا تتخصص في تقديم دورات تعليمية متعددة الأنماط تغطي مناهج الشهادة الدولية العامة IG، مصممة خصيصًا لتلبية احتياجات الطلاب الراغبين في التفوق والنجاح في هذه المناهج. استكشف معنا طرق التعلم الحديثة والفعالة عبر الإنترنت، وانضم إلى رحلتك التعليمية نحو التميز والإبداع.",
    imageSrc: "/images/hero-1.webp",
    isBooked: false,
  },
  {
    title: "دورات تطــوير الأطفـــال في كل المواد من منصة اكاديمية إياد.كوم",
    subTitle: "مرحباً بك في منصة اكاديمية إياد.كوم",
    description:
      "تقدم البرامج التعليمية دروسًا شاملة في كافة المواد الدراسية للطلاب من الصف الأول وحتى الثاني عشر. كل ما عليك فعله هو اختيار الباقة التي تناسبك وأطفالك لضمان مواصلة تعليمهم، إنجاز واجباتهم الدراسية، والحصول على دعم متواصل.",
    imageSrc: "/images/hero-2.png",
    isBooked: true,
  },
  {
    title:
      "استمتع بأقــــوى الخصـــومـــــات على جميــــع دوراتنــــا وباقــاتنـــا",
    subTitle: "مرحباً بك في منصة اكاديمية إياد.كوم",
    description:
      "توفر منصة اكاديمية إياد.كوم تخفيضات اسعار وعروض مختلفة تناسب الجميع على كل الدورات ولكل المراحل التعليمية.",
    imageSrc: "/images/hero-3.png",
    isBooked: true,
  },
];

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
            {slides.map((slide, index) => (
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
