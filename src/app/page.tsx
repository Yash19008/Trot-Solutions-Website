import HeroBanner from "@/components/sections/HeroBanner";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SlidingText from "@/components/sections/SlidingText";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel";
import CoreValues from "@/components/sections/CoreValues";
import VisionMission from "@/components/sections/VisionMission";
import CoreCommitments from "@/components/sections/CoreCommitments";
import ServiceOfferings from "@/components/sections/ServiceOfferings";
import StatsCounter from "@/components/sections/StatsCounter";
import GlobalNetwork from "@/components/sections/GlobalNetwork";
import VideoSection from "@/components/sections/VideoSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ServicesGrid />
      <SlidingText />
      <ProjectsCarousel />
      <CoreValues />
      <VisionMission />
      <CoreCommitments />
      <ServiceOfferings />
      <StatsCounter />
      <GlobalNetwork />
      <VideoSection />
    </>
  );
}
