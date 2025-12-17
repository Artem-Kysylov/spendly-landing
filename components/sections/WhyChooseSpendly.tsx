'use client'
import React from 'react'
import { CircleCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeUp, viewportDefault, containerStagger, fadeUpScale } from '@/components/utils/motion'

const WhyChooseUs = () => {
  const t = useTranslations('why')
  return (
    <section className='mt-[120px]' id='why-choose-us'>
      <div className='landing__container'>
        <motion.h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'
          initial='hidden' whileInView='visible' viewport={viewportDefault} variants={fadeUp(0)}>{t('title')}</motion.h2>
        <motion.div
          className='mx-auto w-fit flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-center gap-[12px]'
          initial='hidden'
          whileInView='visible'
          viewport={viewportDefault}
          variants={containerStagger(0.08)}
        >
            <motion.ul className='flex flex-col items-start gap-[12px] w-full xl:w-auto xl:flex-none' variants={containerStagger(0.08)}>
              {[0,1,2,3,4,5].map((i) => (
                <motion.li key={i} className='flex items-center w-full' variants={fadeUp(i*0.05)}>
                  <CircleCheck className="mr-2 text-primary" size={20} />
                  <p className='text-[16px] font-semibold text-foreground'>{t(`bullets.${i}`)}</p>
                </motion.li>
              ))}
            </motion.ul>
          <motion.div className='flex justify-center xl:justify-start w-full xl:w-auto xl:flex-none' variants={fadeUpScale(0.15)}>
            <video
              src="/why-choose-us.mp4"
              className="w-full max-w-[250px] h-auto rounded-[28px] border-[5px] border-neutral-400 dark:border-neutral-600"
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