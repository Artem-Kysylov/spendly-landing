

'use client'
import { useTranslations } from 'next-intl'
import Button from "../ui-elements/Button"
import { motion } from 'framer-motion'
import { fadeUp, fadeUpDelayed, viewportDefault, containerStagger } from '@/components/utils/motion'

const Cta = () => {
  const t = useTranslations('cta')
  
  const handleDevAlert = () => {
    alert("The application is currently under development. Thank you for your understanding.")
  }

  return (
    <section className='mt-[120px] mb-[120px]' id='final-cta'>
      <div className='landing__container'>
        <motion.div className='flex flex-col items-center gap-[15px]'
          initial='hidden' whileInView='visible' viewport={viewportDefault} variants={containerStagger(0.08)}>
          <motion.h2 className='text-[55px] font-semibold text-foreground text-center' variants={fadeUp(0)}>{t('title')}</motion.h2>
          <motion.div variants={fadeUpDelayed(0.1)}>
            <Button
              text={t('button')}
              className="w/[250px]"
              onClick={handleDevAlert}
            />
          </motion.div>
          <motion.span className='text-center block text-[14px] text-muted-foreground' variants={fadeUp(0.15)}>{t('subtitle')}</motion.span>
        </motion.div>
      </div>
    </section>
  )
}

export default Cta