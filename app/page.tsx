import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Founder from '@/components/sections/Founder'
import BlogSection from '@/components/sections/BlogSection'
import Faq from '@/components/sections/Faq'
import Cta from '@/components/sections/Cta'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Founder />
      <BlogSection />
      <Faq />
      <Cta />
    </div>
  )
}
