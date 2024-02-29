import HeroSection from "@/components/sections/HeroSection";
import CounterSection from "@/components/sections/CounterSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SubjectsSection from "@/components/sections/SubjectsSection";
import LearningHome from "@/components/sections/LearningSection";
import FeatureSection from "@/components/sections/FeatureSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CounterSection />
      <ServicesSection />
      <FeatureSection />
      <SubjectsSection />
      <LearningHome />
    </div>
  );
};

export default Home;
