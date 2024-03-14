import HeroSection from "@/components/sections/HeroSection";
import CounterSection from "@/components/sections/CounterSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SubjectsSection from "@/components/sections/SubjectsSection";
import CourseFeatures from "@/components/sections/CourseFeatures";
import FeatureSection from "@/components/sections/FeatureSection";
import { courseFeatures1, slidesData } from "@/utils/data";

const Home = () => {
  return (
    <div>
      <HeroSection data={slidesData} />
      <CounterSection />
      <ServicesSection />
      <FeatureSection />
      <SubjectsSection />
      <CourseFeatures features={courseFeatures1} />
    </div>
  );
};

export default Home;
