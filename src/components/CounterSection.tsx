import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import AnimatedCounter from "./shared/AnimatedCounter";
import Image from "next/image";

const CounterSection = () => {
  const counters = [
    {
      src: "/images/counter/counter-1.png",
      count: "200",
      text: "معلم محترف ومدرب",
    },
    {
      src: "/images/counter/counter-2.png",
      count: "170",
      text: "دورة تدريبية في كل التخصصات",
    },
    {
      src: "/images/counter/counter-3.png",
      count: "2000",
      text: "طـالب التحقوا بدوراتنا",
    },
    {
      src: "/images/counter/counter-4.png",
      count: "780",
      text: "درس تفاعلي في كل المواد",
    },
  ];

  return (
    <section>
      <div className="p-5">
        <MaxWidthWrapper>
          <ul className="lg:grid-cols-4 shadow-custom md:p-4 grid grid-cols-2 gap-4 p-1">
            {counters.map((counter, index) => (
              <li key={index}>
                <div className="flex items-center justify-center gap-2 p-4 text-right">
                  <div className="text-lg">
                    <h4 className=" font-bold text-green-600">
                      <AnimatedCounter target={+counter.count} />+
                    </h4>
                    <p className="text-xs sm:textsm">{counter.text}</p>
                  </div>
                  <div className="mb-2 bg-[#f8f8f8] p-3 rounded-full">
                    <Image
                      width={30}
                      height={30}
                      src={counter.src}
                      alt="image"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default CounterSection;
