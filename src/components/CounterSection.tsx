import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import AnimatedCounter from "./shared/AnimatedCounter";

const CounterSection = () => {
  const counters = [
    {
      src: "//elmadrasah.com/cdn/shop/t/55/assets/home-img19.png?v=106217282165058249101689194789",
      count: "200",
      text: "معلم محترف ومدرب",
    },
    {
      src: "//elmadrasah.com/cdn/shop/t/55/assets/home-img20.png?v=109686504649150335081689194827",
      count: "170",
      text: "دورة تدريبية في كل التخصصات",
    },
    {
      src: "//elmadrasah.com/cdn/shop/t/55/assets/home-img21.png?v=114082002549029409361689194867",
      count: "2000",
      text: "طـالب التحقوا بدوراتنا",
    },
    {
      src: "//elmadrasah.com/cdn/shop/t/55/assets/home-img22.png?v=38914025416030417561689194873",
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
                  <div className="text-xl">
                    <h4 className=" font-bold text-green-600">
                      <AnimatedCounter target={+counter.count} />+
                    </h4>
                    <p className="text-sm">{counter.text}</p>
                  </div>
                  <div className="mb-2 bg-[#f8f8f8] p-3 rounded-full">
                    <img
                      className="lazyload"
                      src={counter.src}
                      alt="image"
                      loading="lazy"
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
