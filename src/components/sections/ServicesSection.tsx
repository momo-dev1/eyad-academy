import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Title from "../shared/SectionTitle";
import Image from "next/image";
import Button from "../shared/Button";
import { servicesData } from "@/utils/data";

export default function ServicesSection() {
  return (
    <section className="my-10">
      <MaxWidthWrapper>
        <div className="sec-title text-center pt-14">
          <Title textSize="large" title="ماذا تقدم منصة اكاديمية إياد.كوم؟" />
        </div>
        <div className="flex flex-wrap justify-center mt-14">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="md:w-1/2 lg:w-1/3 w-full p-4 text-center"
            >
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="mb-4">
                  <Image
                    width="420"
                    height="375"
                    className="w-full"
                    src={service.imageSrc}
                    alt={service.title}
                  />
                </div>
                <div className="box ">
                  <h3 className=" mb-2 text-lg font-bold">{service.title}</h3>
                  <p className="mb-4 text-secondry text-xs md:text-sm">
                    {service.description}
                  </p>
                  <Button
                    href={service.link}
                    variant="minimal"
                    className="inline-flex justify-center gap-2 hover:text-green-700"
                  >
                    <FaArrowLeft className="text-lg mt-2" /> ابدأ الآن
                    <i className="fa fa-arrow-left ml-2" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
