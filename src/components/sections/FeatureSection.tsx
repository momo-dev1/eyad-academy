import Image from "next/image";
import Button from "../shared/Button";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import { VideoLinks, features } from "@/utils/data";

const FeatureSection = () => {
  return (
    <section dir="rtl" className=" md:mx-auto max-w-5xl mx-5 my-20">
      <div className="bg-custom-gradient rounded-3xl p-5 text-[#51585a] grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="mb-5">
            <h2 className="mb-10 text-2xl font-bold text-black">
              لما عليك اختيار منصة اكاديمية إياد.كوم؟
            </h2>
            <p className="text-sm max-w-[500px]">
              تمتلك منصة اياد.كوم التعليمية عبر الإنترنت العديد من المميزات التي
              تجعلها الخيار الأفضل والأمثل منها ما يلي
            </p>
          </div>

          <div>
            <ul className="space-y-5">
              {features.map((feature: any) => (
                <li key={feature.id} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      width={65}
                      height={65}
                      src={feature.imageUrl}
                      alt="feature-icon"
                    />
                  </div>
                  <div className="flex-grow pl-4">
                    <h3 className="font-bold text-sm md:text-lg text-[#353735]">
                      {feature.title}
                    </h3>
                    <p className="md:text-sm mt-2 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5">
          <div className="group relative mb-4 overflow-hidden border border-green-600 rounded-lg">
            <Link href="">
              <Image
                width={960}
                height={540}
                src="/images/features/feature-vid.png"
                alt="Main video"
                className="w-full h-auto"
              />
            </Link>
            <div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2">
              <Image
                width={75}
                height={75}
                className="group-hover:scale-90 duration-300 transform"
                src="/images/play-button.png"
                alt="play-button"
              />
            </div>
          </div>
          <ul className="flex flex-1 gap-1 ">
            {VideoLinks.map((video) => (
              <li
                key={video.id}
                className="relative overflow-hidden border border-green-600 rounded-lg group"
              >
                <Link href={video.href}>
                  <Image
                    width={65}
                    height={65}
                    src={video.src}
                    alt={video.alt}
                    className="w-full h-auto opacity-50"
                  />
                </Link>
                <FaPlayCircle className="top-1/2 left-1/2 absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 text-gray-700 opacity-75 group-hover:scale-90 duration-300" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center">
        <Button href="" variant="secondary">
          تواصل مع المشرفين الأكادميين
        </Button>
      </div>
    </section>
  );
};

export default FeatureSection;
