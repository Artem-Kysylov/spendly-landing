import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Founder from "@/components/sections/Founder";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import Pricing from "@/components/sections/Pricing";
import Features from "@/components/sections/Features";
import WhyChooseSpendly from "@/components/sections/WhyChooseSpendly";
import Roadmap from "@/components/sections/Roadmap";
import BlogSection from "@/components/sections/BlogSection";

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <WhyChooseSpendly />
      <Founder />
      <Roadmap />
      <BlogSection locale={locale} />
      <Cta />
      <Faq />
    </div>
  );
}
