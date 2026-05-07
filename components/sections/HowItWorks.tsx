'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeUpSlow, viewportDefault, containerStagger } from '@/components/utils/motion'

const STEPS = [
  { emoji: '🏦', title: 'Join the waitlist', desc: 'Reserve your spot and get early-access benefits before the public launch.' },
  { emoji: '⚡', title: 'Get notified first', desc: 'We\'ll reach out with exclusive beta access as we approach launch.' },
  { emoji: '📂', title: 'Set up in seconds', desc: 'Organize your finances into categories effortlessly on your iPhone.' },
  { emoji: '🧠', title: 'AI insights', desc: 'Get personalized suggestions and stay in control of your spending.' },
]

const HowItWorks = () => {
  return (
    <section className="mt-[120px]" id="how-it-works">
      <div className="landing__container">
        <motion.h2
          className="text-[40px] font-bold text-foreground text-center mb-[30px] tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={fadeUpSlow(0)}
        >
          How it works
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={containerStagger(0.12)}
        >
          {STEPS.map(({ emoji, title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center"
              variants={fadeUpSlow(i * 0.12)}
            >
              <h3 className="text-[30px] mb-4">{emoji}</h3>
              <h4 className="text-[20px] font-semibold text-foreground mb-2">{title}</h4>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
