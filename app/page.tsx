import CaseStudy1 from "@/components/CaseStudy1";
import FAQSection from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import CaseStudy2 from "@/components/CaseStudy2";
import Hero from "@/components/Hero";
import TestimonialSection from "@/components/Testimonial";
import OurAutomations from "@/components/OurAutomations";

export default function Home() {
  return (
    <div>
    <Hero />
    <CaseStudy1/>
    <CaseStudy2/>
    <TestimonialSection/>
    <OurAutomations/>
    <FAQSection/>
    <FinalCTA/>
    </div>
  );
}
