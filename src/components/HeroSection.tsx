"use client";
import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <section className="bg-custom-gradient md:pt-24  pt-20">
      <MaxWidthWrapper>
        {/* <!-- Slider main container --> */}
        <div dir="rtl" className="slide-container">
          {/* <!-- Additional required wrapper --> */}
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {/* <!-- Slides --> */}
            <SwiperSlide className="slide-item-1">
              <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-center">
                  <div className="md:w-1/2 w-full p-4 space-y-3">
                    <h3 className="text-lg font-semibold text-[#1c8a44]">
                      مرحباً بك في منصة اكاديمية إياد.كوم
                    </h3>
                    <h1 className="relative text-2xl md:leading-[3rem] md:text-3xl font-bold pb-6">
                      أفضل منصة تعليمية مصرية متخصصة في دورات المناهج الدولية IG
                    </h1>
                    <p className="text-secondry md:text-base my-4 text-sm">
                      نحن الرائدون في مجال التعليم الإلكتروني بالوطن العربي،
                      مقدمين دورات شاملة لجميع الفئات العمرية. منصتنا تتخصص في
                      تقديم دورات تعليمية متعددة الأنماط تغطي مناهج الشهادة
                      الدولية العامة IG، مصممة خصيصًا لتلبية احتياجات الطلاب
                      الراغبين في التفوق والنجاح في هذه المناهج. استكشف معنا طرق
                      التعلم الحديثة والفعالة عبر الإنترنت، وانضم إلى رحلتك
                      التعليمية نحو التميز والإبداع.
                    </p>
                    <div className="md:justify-normal flex flex-wrap items-center justify-center gap-2 mt-4 text-center">
                      <div className=" md:inline-flex items-center justify-center hidden gap-2 font-bold">
                        <Link href="" className=" gap-2 text-lg lg:text-2xl">
                          الفيديو التعريفي
                        </Link>
                        <Image
                          width="30"
                          height="30"
                          className="lazyload ml-2"
                          src="/images/hero-play.png"
                          alt="image"
                        />
                      </div>
                      <Link
                        href="https://api.whatsapp.com/send?phone=01009261036"
                        target="_blank"
                        className="hover:bg-transparent hover:text-black md:w-auto inline-block w-full px-4 py-2 text-xl font-bold text-white duration-150 bg-green-700 border border-green-700 rounded"
                      >
                        احجز درسك الآن
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full p-4">
                    <div>
                      <Image
                        width="665"
                        height="565"
                        src="/images/hero-1.webp"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="slide-item-2">
              <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-center">
                  <div className="md:w-1/2 w-full p-4 space-y-3">
                    <h3 className="text-lg font-semibold text-[#1c8a44]">
                      مرحباً بك في منصة اكاديمية إياد.كوم
                    </h3>
                    <h1 className="relative text-2xl md:leading-[3rem] md:text-3xl font-bold pb-6">
                      دورات تطــوير الأطفـــال في كل المواد من منصة اكاديمية
                      إياد.كوم
                    </h1>
                    <p className="text-secondry md:text-base my-4 text-sm">
                      تقدم البرامج التعليمية دروسًا شاملة في كافة المواد
                      الدراسية للطلاب من الصف الأول وحتى الثاني عشر. كل ما عليك
                      فعله هو اختيار الباقة التي تناسبك وأطفالك لضمان مواصلة
                      تعليمهم، إنجاز واجباتهم الدراسية، والحصول على دعم متواصل.
                    </p>
                    <div className="md:justify-normal flex items-center justify-center gap-2 mt-4 text-center">
                      <Link
                        href="https://api.whatsapp.com/send?phone=01009261036"
                        target="_blank"
                        className="hover:bg-transparent hover:text-black md:w-auto flex-wrap inline-block w-full px-4 py-2 text-xl font-bold text-white duration-150 bg-green-700 border border-green-700 rounded"
                      >
                        احجز درسك الآن
                      </Link>
                      <span className="hidden lg:inline-block">
                        تبدأ الدروس بعد <strong>يوم واحد فقط</strong> من الحجز
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full p-4">
                    <div>
                      <Image
                        width="665"
                        height="565"
                        src="/images/hero-2.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="slide-item-3">
              <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-center">
                  <div className="md:w-1/2 w-full p-4 space-y-3">
                    <h3 className="text-lg font-semibold text-[#1c8a44]">
                      مرحباً بك في منصة اكاديمية إياد.كوم
                    </h3>
                    <h1 className="relative text-2xl md:leading-[3rem] md:text-3xl font-bold pb-6">
                      استمتع بأقــــوى الخصـــومـــــات على جميــــع دوراتنــــا
                      وباقــاتنـــا
                    </h1>
                    <p className="text-secondry md:text-base my-4 text-sm">
                      توفر منصة اكاديمية إياد.كوم تخفيضات اسعار وعروض مختلفة
                      تناسب الجميع على كل الدورات ولكل المراحل التعليمية.
                    </p>
                    <div className="md:justify-normal flex items-center justify-center gap-2 mt-4 text-center">
                      <Link
                        href="https://api.whatsapp.com/send?phone=01009261036"
                        target="_blank"
                        className="hover:bg-transparent hover:text-black md:w-auto flex-wrap inline-block w-full px-4 py-2 text-xl font-bold text-white duration-150 bg-green-700 border border-green-700 rounded"
                      >
                        احجز درسك الآن
                      </Link>
                      <span className="hidden lg:inline-block">
                        تبدأ الدروس بعد <strong>يوم واحد فقط</strong> من الحجز
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full p-4">
                    <div>
                      <Image
                        width="665"
                        height="565"
                        src="/images/hero-3.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
