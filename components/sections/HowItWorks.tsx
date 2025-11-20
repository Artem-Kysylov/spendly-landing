'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeUpSlow, viewportStrict, containerStagger } from '@/components/utils/motion'

const HowItWorks = () => {
  const t = useTranslations('howItWorks')
  return (
    <section className='mt-[120px]' id='how-it-works'>
      <div className='landing__container'>
        <motion.h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'
          initial='hidden' whileInView='visible' viewport={viewportStrict} variants={fadeUpSlow(0)}>{t('title')}</motion.h2>

        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]'
          initial='hidden' whileInView='visible' viewport={viewportStrict} variants={containerStagger(0.12)}>
          <motion.div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center' variants={fadeUpSlow(0)}>
            <h3 className='text-[30px] mb-4'>🏦</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>{t('step1_title')}</h4>
            <p>{t('step1_desc')}</p>
          </motion.div>

          <motion.div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center' variants={fadeUpSlow(0.12)}>
            <h3 className='text-[30px] mb-4'>⚡</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>{t('step2_title')}</h4>
            <p>{t('step2_desc')}</p>
          </motion.div>

          <motion.div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center' variants={fadeUpSlow(0.1)}>
            <h3 className='text-[30px] mb-4'>📂</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>{t('step3_title')}</h4>
            <p>{t('step3_desc')}</p>
          </motion.div>

          <motion.div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center' variants={fadeUpSlow(0.24)}>
            <h3 className='text-[30px] mb-4'>🧠</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>{t('step4_title')}</h4>
            <p>{t('step4_desc')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks