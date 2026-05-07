'use client'
import React from 'react'
import { CircleCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, viewportDefault, containerStagger, fadeUpScale } from '@/components/utils/motion'

const BULLETS = [
  'Free core tracker — forever',
  'No ads, no data selling',
  'FaceID-protected privacy',
  'Native iOS — zero lag',
  'AI spending insights',
  'Effortlessly minimalist design',
]

const WhyChooseUs = () => {
  return (
    <section className="mt-[120px]" id="why-choose-us">
      <div className="landing__container">
        <motion.h2
          className="text-[40px] font-bold text-foreground text-center mb-[30px] tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={fadeUp(0)}
        >
          Why choose Spendly?
        </motion.h2>
        <motion.div
          className="mx-auto w-fit flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-center gap-[12px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={containerStagger(0.08)}
        >
          <motion.ul className="flex flex-col items-start gap-[12px] w-full xl:w-auto xl:flex-none" variants={containerStagger(0.08)}>
            {BULLETS.map((text, i) => (
              <motion.li key={text} className="flex items-center w-full" variants={fadeUp(i * 0.05)}>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className="text-[16px] font-semibold text-foreground">{text}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="flex justify-center xl:justify-start w-full xl:w-auto xl:flex-none"
            variants={fadeUpScale(0.15)}
          >
            <video
              src="/why-choose-us.mp4"
              className="w-full max-w-[250px] h-auto rounded-[28px] border-[5px] border-neutral-300 shadow-lg"
              muted
              autoPlay
              loop
              playsInline
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
