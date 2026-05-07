'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, containerStagger, viewportDefault } from '@/components/utils/motion'

const ROADMAP_ITEMS = [
  {
    emoji: '🏦',
    title: 'Bank Sync',
    desc: 'Automatic import of transactions from your bank account.',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Family Budgets',
    desc: 'Shared budgets and spending visibility for the whole family.',
  },
  {
    emoji: '🎙️',
    title: 'Voice Input',
    desc: 'Add expenses hands-free using natural voice commands.',
  },
  {
    emoji: '✨',
    title: 'AI Guardian',
    desc: 'Proactive AI that catches unusual charges and suspicious patterns.',
  },
]

const Roadmap = () => {
  return (
    <section className="mt-[120px]" id="roadmap">
      <div className="landing__container">
        <motion.h2
          className="text-[40px] font-bold text-foreground text-center mb-[30px] tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={fadeUp(0)}
        >
          What&apos;s coming next
        </motion.h2>
        <div>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            variants={containerStagger(0.08)}
          >
            {ROADMAP_ITEMS.map(({ emoji, title, desc }, i) => (
              <motion.li
                key={title}
                className="relative bg-card border border-border rounded-lg p-[20px] h-full flex flex-col items-center text-center"
                variants={fadeUp(i * 0.05)}
              >
                <span className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium bg-primary/10 text-primary">
                  Coming soon
                </span>
                <span className="mt-6 text-2xl leading-none mb-3">{emoji}</span>
                <span className="text-[20px] font-semibold mb-2">{title}</span>
                <p className="text-[16px] text-muted-foreground">{desc}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
