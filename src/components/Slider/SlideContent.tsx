import Link from "next/link";
import LessonNotice from "./LessonNotice";
import Image from "next/image";

interface IProps {
  title: string;
  subTitle: string;
  description: string;
  imageSrc: string;
  buttonText?: string;
  buttonHref?: string;
  isBooked: boolean;
}
const SlideContent = ({
  title,
  subTitle,
  description,
  imageSrc,
  isBooked,
  buttonText = "احجز درسك الآن",
  buttonHref = "https://api.whatsapp.com/send?phone=01009261036",
}: IProps) => (
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center justify-center">
      <div className="md:w-1/2 w-full p-4 space-y-3">
        <h3 className="text-lg font-semibold text-[#1c8a44]">{subTitle}</h3>
        <h1 className="relative text-2xl md:leading-[3rem] md:text-3xl font-bold pb-6">
          {title}
        </h1>
        <p className="text-secondry md:text-base my-4 text-sm">{description}</p>
        <div className="md:justify-normal flex items-center justify-center gap-2 mt-4 text-center">
          <Link
            href={buttonHref}
            target="_blank"
            className="hover:bg-transparent hover:text-black md:w-auto inline-block w-full px-4 py-2 text-xl font-bold text-white duration-150 bg-green-700 border border-green-700 rounded"
          >
            {buttonText}
          </Link>
          <LessonNotice isBooked={isBooked} />
        </div>
      </div>
      <div className="md:w-1/2 w-full p-4">
        <Image width="665" height="565" src={imageSrc} alt="image" />
      </div>
    </div>
  </div>
);
export default SlideContent;
