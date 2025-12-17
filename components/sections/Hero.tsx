'use client'
import Button from "../ui-elements/Button"

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeUp, fadeUpDelayed, fadeUpScale, containerStagger, viewportDefault } from '@/components/utils/motion'

const Hero = () => {
  const t = useTranslations('hero')
  return (
    <section className='mt-[120px]'>
      <div className='landing__container'>
        <motion.div className='flex flex-col items-center gap-[24px] max-w-4xl mx-auto mb-[30px]'
          initial='hidden' whileInView='visible' viewport={viewportDefault} variants={containerStagger(0.08)}>
          <motion.h1 className="text-[36px] sm:text-[44px] md:text-[55px] font-semibold text-foreground text-center" variants={fadeUp(0)}>{t('title')}</motion.h1>
          <motion.p className="font-medium text-foreground text-center" variants={fadeUp(0.05)}>{t('subtitle_line1')}
{t('subtitle_line2')}</motion.p>
          <motion.div className='w-full flex flex-col sm:flex-row items-center justify-center gap-3' variants={fadeUpDelayed(0.1)}>
            <Button text={t('cta_primary')} className='w-full sm:w-auto' href='https://spendly-app-blue.vercel.app/en' />
            <Button text={t('cta_secondary')} variant='outline' className='w-full sm:w-[203px]' href='https://spendly-app-blue.vercel.app/en' />
          </motion.div>
        </motion.div>
        <motion.div className='flex justify-center' initial='hidden' whileInView='visible' viewport={viewportDefault}>
          <motion.div variants={fadeUpScale(0.15)}>
            <video
              src="/hero-screen.mp4"
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

export default Hero
