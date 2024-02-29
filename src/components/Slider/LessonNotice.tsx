import Image from "next/image";
import Link from "next/link";

const LessonNotice = ({ isBooked }: any) => {
  return (
    <>
      {isBooked ? (
        <span className="hidden lg:inline-block">
          تبدأ الدروس بعد <strong>يوم واحد فقط</strong> من الحجز
        </span>
      ) : (
        <div className="md:justify-normal flex flex-wrap items-center justify-center gap-2  text-center">
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
        </div>
      )}
    </>
  );
};
export default LessonNotice;
