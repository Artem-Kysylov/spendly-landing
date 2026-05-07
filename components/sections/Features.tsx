'use client'
import { motion } from 'framer-motion'
import { fadeUp, viewportDefault, containerStagger } from '@/components/utils/motion'
import { Sparkles, Radar, Smartphone } from 'lucide-react'

const FEATURES = [
  {
    icon: Sparkles,
    title: 'Calm by Design',
    desc: 'Spendly helps you understand your finances without dashboard overload. We replaced complex spreadsheets with an airy, minimalist interface.',
  },
  {
    icon: Radar,
    title: 'Smart Radar',
    desc: 'Quietly notices unusual spending patterns and recurring habits before they become routines. Financial awareness that works for you.',
  },
  {
    icon: Smartphone,
    title: 'Built for iPhone',
    desc: 'Designed exclusively for iOS. Experience zero-compromise native speed, FaceID privacy, and subtle haptic feedback on every tap.',
  },
]

const Features = () => {
  return (
    <section className="mt-[120px]" id="features">
      <div className="landing__container">
        <motion.h2
          className="text-[40px] font-bold text-foreground text-center mb-4 tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={fadeUp(0)}
        >
          What Spendly feels like
        </motion.h2>
        <motion.p
          className="text-[17px] text-muted-foreground text-center mb-[56px] max-w-lg mx-auto leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={fadeUp(0.05)}
        >
          Everything you need to stay financially mindful — nothing you don&apos;t.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={containerStagger(0.1)}
        >
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp(i * 0.08)}
              className="bg-card p-10 flex flex-col gap-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                <Icon className="text-primary" size={22} />
              </div>
              <h3 className="text-[20px] font-bold text-foreground leading-snug tracking-tight">
                {title}
              </h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
