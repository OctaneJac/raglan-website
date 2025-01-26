import CaseStudy1 from "@/components/CaseStudy1";
import FAQSection from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
// import CaseStudy2 from "@/components/CaseStudy2";
import Hero from "@/components/Hero";
// import FeatureShowcaseSection from "@/components/OurAutomations";
import TestimonialSection from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
    <Hero />
    <CaseStudy1/>
    <CaseStudy1/>
    <TestimonialSection/>
    <FAQSection/>
    {/* <FeatureShowcaseSection/> */}
    <FinalCTA/>
    </div>
  );
}
