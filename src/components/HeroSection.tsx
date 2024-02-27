import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const HeroSection = () => {
  return (
    <section className="home-slide-view bg-[#f8f8f8] pt-20 ">
      <MaxWidthWrapper>
        {/* <!-- Slider main container --> */}
        <div dir="rtl" className="slide-container">
          {/* <!-- Additional required wrapper --> */}
          <div className="slide-wrapper">
            {/* <!-- Slides --> */}
            <div className="slide-item">
              <div className="slide-content slide1">
                <div className="container mx-auto">
                  <div className="flex flex-wrap items-center justify-center">
                    <div className="md:w-1/2 w-full p-4 space-y-3">
                      <h3 className="text-lg font-semibold text-[#1c8a44]">
                        مرحباً بك في منصة اكاديمية إياد.كوم
                      </h3>
                      <h1 className="bg-hero-pattern relative text-2xl md:text-3xl font-bold">
                        أفضل منصة تعليمية مصرية متخصصة في دورات المناهج الدولية
                        IG
                      </h1>
                      <p className="my-4 text-secondry text-sm md:text-base">
                        نحن الرائدون في مجال التعليم الإلكتروني بالوطن العربي،
                        مقدمين دورات شاملة لجميع الفئات العمرية. منصتنا تتخصص في
                        تقديم دورات تعليمية متعددة الأنماط تغطي مناهج الشهادة
                        الدولية العامة IG، مصممة خصيصًا لتلبية احتياجات الطلاب
                        الراغبين في التفوق والنجاح في هذه المناهج. استكشف معنا
                        طرق التعلم الحديثة والفعالة عبر الإنترنت، وانضم إلى
                        رحلتك التعليمية نحو التميز والإبداع.
                      </p>
                      <div className="md:justify-normal flex flex-wrap items-center justify-center gap-2 mt-4 text-center">
                        <div className=" md:inline-flex items-center justify-center hidden gap-2 font-bold">
                          <a href="" className=" gap-2 text-2xl">
                            الفيديو التعريفي
                          </a>
                          <img
                            className="lazyload ml-2"
                            src="/images/hero-play.png"
                            alt="image"
                          />
                        </div>
                        <a
                          href="https://api.whatsapp.com/send?phone=971509959271"
                          target="_blank"
                          className="hover:bg-transparent hover:text-black md:w-auto inline-block w-full px-4 py-2 text-xl font-bold text-white duration-150 bg-green-700 border border-green-700 rounded"
                        >
                          احجز درسك الآن
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/2 w-full p-4">
                      <div>
                        <img
                          className="lazyload"
                          src="/images/hero-1.webp"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;