import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-custom-gradient pt-20 md:pt-24 ">
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
                      <h1 className="relative text-2xl md:leading-[3rem] md:text-3xl font-bold py-6">
                        أفضل منصة تعليمية مصرية متخصصة في دورات المناهج الدولية
                        IG
                      </h1>
                      <p className="text-secondry md:text-base  my-4 text-sm">
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
                          <Link href="" className=" gap-2 text-2xl">
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
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
