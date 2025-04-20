
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturedDoctors from "@/components/home/FeaturedDoctors";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DownloadAppSection from "@/components/home/DownloadAppSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SpecialtiesSection />
      <HowItWorksSection />
      <FeaturedDoctors />
      <TestimonialsSection />
      <DownloadAppSection />
    </Layout>
  );
};

export default Index;
