// Import components 
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Founder from "@/components/sections/Founder";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import Pricing from "@/components/sections/Pricing";
import Features from "@/components/sections/Features";
// import Demo from "@/components/sections/Demo";
import WhyChooseSpendly from "@/components/sections/WhyChooseSpendly";
import Roadmap from "@/components/sections/Roadmap";



export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      {/* <Demo /> */}
      <HowItWorks />
      <Pricing />
      <WhyChooseSpendly />
      <Founder />
      <Roadmap />
      <Cta />
      <Faq />
    </div>
  );
}
