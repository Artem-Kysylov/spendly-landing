'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeUp, containerStagger, viewportDefault } from '@/components/utils/motion'

const Roadmap = () => {
  const t = useTranslations('roadmap')
  const items = [
    { emoji: '📧', text: t('gmail.text'), desc: t('gmail.desc') },
    { emoji: '👥', text: t('shared.text'), desc: t('shared.desc') },
    { emoji: '🧾', text: t('subs.text'), desc: t('subs.desc') },
    { emoji: '🛍️', text: t('shopping.text'), desc: t('shopping.desc') },
  ]

  return (
    <section className='mt-[120px]' id='roadmap'>
      <div className='landing__container'>
        <motion.h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'
          initial='hidden' whileInView='visible' viewport={viewportDefault} variants={fadeUp(0)}>{t('title')}</motion.h2>
        <div>
          <motion.ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px]'
            initial='hidden' whileInView='visible' viewport={viewportDefault} variants={containerStagger(0.08)}>
            {items.map((it, i) => (
              <motion.li key={i} className='bg-card border border-border rounded-lg p-[20px] h-[260px] flex flex-col items-center text-center' variants={fadeUp(i*0.05)}>
                <span className='text-2xl leading-none mb-3'>{it.emoji}</span>
                <span className='text-[20px] font-semibold mb-2'>{it.text}</span>
                <p className='text-[16px] text-foreground'>
                  {it.desc}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export default Roadmap