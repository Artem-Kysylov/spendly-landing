'use client'
import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import { fadeUp, viewportDefault } from '@/components/utils/motion'

const FAQ_ITEMS = [
  {
    q: 'Why are you focusing on iPhone first?',
    a: 'To deliver a premium, zero-compromise experience that fully leverages native iOS features — the Taptic Engine for haptic feedback, FaceID for instant privacy, and the Neural Engine for on-device AI. A web app simply can\'t do that.',
  },
  {
    q: 'What happened to the web version?',
    a: 'We sunsetted the web app to focus 100% on building the ultimate native mobile experience. Every line of code we write now goes toward the iOS release launching Summer 2026.',
  },
  {
    q: 'How does the early-access discount work?',
    a: 'Everyone who joins the waitlist before launch gets a lifetime discount and priority access to the closed beta. The earlier you join, the better your deal.',
  },
  {
    q: 'Is Spendly free?',
    a: 'Yes. The core tracking experience is free forever. Premium AI features and advanced analytics will be available through an optional subscription.',
  },
  {
    q: 'Is my financial data private?',
    a: 'Privacy-first by design. On iOS, sensitive operations use Apple\'s Secure Enclave. We never sell your data and avoid unnecessary tracking.',
  },
]

const Faq = () => {
  return (
    <section className="mt-[120px] mb-[120px]" id="faq">
      <div className="landing__container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8 tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={fadeUp(0)}
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`q${i}`}>
              <AccordionTrigger className="text-[18px] font-semibold text-foreground hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary text-left">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] text-foreground leading-relaxed">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
