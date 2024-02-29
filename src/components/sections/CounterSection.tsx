import React from "react";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import AnimatedCounter from "../shared/AnimatedCounter";
import Image from "next/image";
import { countersData } from "@/utils/data";

const CounterSection = () => {
  return (
    <section>
      <div className="p-5">
        <MaxWidthWrapper>
          <ul className="lg:grid-cols-4 shadow-custom md:p-4 grid grid-cols-2 gap-4 p-1">
            {countersData.map((counter, index) => (
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
