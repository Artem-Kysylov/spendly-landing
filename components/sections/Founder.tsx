'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeUp, fadeUpScale, viewportDefault, containerStagger } from '@/components/utils/motion'

const Founder = () => {
  const t = useTranslations('founder')
  return (
    <section className='mt-[120px]' id='founder'>
      <div className='landing__container'>
        <motion.div className='flex flex-col md:flex-row items-center justify-center gap-[30px]'
          initial='hidden' whileInView='visible' viewport={viewportDefault} variants={containerStagger(0.08)}>
          <motion.div className='md:w-1/2' variants={fadeUp(0)}>
            <h2 className='text-[40px] font-semibold text-foreground mb-[20px]'>{t('title')}</h2>
            <p className='text-[16px] text-foreground mb-4'>{t('text')}</p>
          </motion.div>
          <motion.div className='md:w-1/2 flex justify-center' variants={fadeUpScale(0.15)}>
            <div className='relative w-full max-w-[400px] aspect-square'>
              <Image
                src='/about.png'
                alt={t('image_alt')}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className='object-cover rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300'
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Founder