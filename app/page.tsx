import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import WhyChooseSpendly from '@/components/sections/WhyChooseSpendly'
import Founder from '@/components/sections/Founder'
import Roadmap from '@/components/sections/Roadmap'
import BlogSection from '@/components/sections/BlogSection'
import Faq from '@/components/sections/Faq'
import Cta from '@/components/sections/Cta'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <WhyChooseSpendly />
      <Founder />
      <Roadmap />
      <BlogSection />
      <Faq />
      <Cta />
    </div>
  )
}
