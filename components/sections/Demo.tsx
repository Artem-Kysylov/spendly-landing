'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeUp, fadeUpScale, viewportDefault, containerStagger } from '@/components/utils/motion'

const Demo = () => {
  const t = useTranslations('demo')
  return (
    <section className='mt-[120px]' id='demo'>
      <div className='landing__container'>
        <motion.div className='flex flex-col items-center gap-[15px] mb-[30px]'
          initial='hidden' whileInView='visible' viewport={viewportDefault} variants={containerStagger(0.08)}>
          <motion.h2 className='text-[40px] font-semibold text-foreground text-center' variants={fadeUp(0)}>{t('title')}</motion.h2>
          <motion.p className='text-[18px] text-muted-foreground text-center' variants={fadeUp(0.05)}>{t('subtitle')}</motion.p>
        </motion.div>
        <motion.div className='flex justify-center' initial='hidden' whileInView='visible' viewport={viewportDefault}>
          <motion.div variants={fadeUpScale(0.15)}>
            <Image
              src='/landing-img-1.png'
              alt={t('image_alt')}
              width={875}
              height={500}
              className='w-full max-w-[875px] h-auto rounded-lg border border-border'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Demo