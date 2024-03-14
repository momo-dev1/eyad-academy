import CourseFeatures from "@/components/sections/CourseFeatures";
import HeroSection from "@/components/sections/HeroSection";
import { courseFeatures2, slidesData2 } from "@/utils/data";

const Enroll = () => {
  return (
    <div>
      <HeroSection data={slidesData2} />
      <CourseFeatures features={courseFeatures2} />
    </div>
  );
};

export default Enroll;
