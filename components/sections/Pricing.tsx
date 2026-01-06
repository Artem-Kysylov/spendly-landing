'use client'
import React from 'react'
import { Check } from 'lucide-react'
import Button from '@/components/ui-elements/Button'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeUp, containerStagger, viewportDefault } from '@/components/utils/motion'

const Pricing = () => {
  const t = useTranslations('pricing')
  const locale = useLocale()

  return (
    <section className='mt-[120px]' id='pricing'>
      <div className='landing__container'>
        <motion.h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'
          initial='hidden' whileInView='visible' viewport={viewportDefault} variants={fadeUp(0)}>{t('title')}</motion.h2>

        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]'
          initial='hidden' whileInView='visible' viewport={viewportDefault} variants={containerStagger(0.08)}>

          {/* FREE PLAN */}
          <motion.div className='bg-card border border-border rounded-xl p-[24px] flex flex-col h-full' variants={fadeUp(0)}>
            <div className='mb-4'>
              <h3 className='text-[20px] font-semibold mb-2'>{t('free.title')}</h3>
              <div className='text-[32px] font-bold'>{t('free.price')}</div>
            </div>

            <ul className='space-y-3 mb-6 flex-1'>
              {['0', '1', '2', '3', '4'].map((i) => (
                <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                  <Check className='size-4 text-foreground mt-0.5 shrink-0' />
                  <span className='break-words'>{t(`free.features.${i}`)}</span>
                </li>
              ))}
            </ul>
            <Button text={t('free.cta')} className='w-full mt-auto' variant='outline' href={`/${locale}/sign-up`} />
          </motion.div>

          {/* MONTHLY PLAN */}
          <motion.div className='bg-card border border-border rounded-xl p-[24px] flex flex-col h-full' variants={fadeUp(0.1)}>
            <div className='mb-4'>
              <h3 className='text-[20px] font-semibold mb-2'>{t('monthly.title')}</h3>
              <div className='flex items-baseline gap-1'>
                <span className='text-[32px] font-bold'>{t('monthly.price')}</span>
                <span className='text-sm text-muted-foreground'>{t('monthly.period')}</span>
              </div>
            </div>

            <ul className='space-y-3 mb-6 flex-1'>
              {['0', '1', '2', '3', '4'].map((i) => (
                <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                  <Check className='size-4 text-primary mt-0.5 shrink-0' />
                  <span className='break-words'>{t(`monthly.features.${i}`)}</span>
                </li>
              ))}
            </ul>
            <Button text={t('monthly.cta')} className='w-full mt-auto' href={`/${locale}/paywall`} />
          </motion.div>

          {/* YEARLY PLAN (Best Value) */}
          <motion.div className='relative dark:bg-card bg-[#F0F7FF] border-2 border-primary rounded-xl p-[24px] flex flex-col h-full shadow-lg' variants={fadeUp(0.2)}>
            <div className='absolute -top-3 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg'>
              {t('badges.recommended')}
            </div>
            <div className='mb-4 mt-2'>
              <h3 className='text-[20px] font-semibold mb-2 text-primary'>{t('yearly.title')}</h3>
              <div className='flex items-baseline gap-1'>
                <span className='text-[32px] font-bold dark:text-white text-slate-900'>{t('yearly.price')}</span>
                <span className='text-sm dark:text-muted-foreground text-slate-500'>{t('yearly.period')}</span>
              </div>
            </div>

            <ul className='space-y-3 mb-6 flex-1'>
              {['0', '1', '2', '3', '4'].map((i) => (
                <li key={i} className='flex items-start gap-2 text-sm dark:text-muted-foreground text-slate-600 font-medium'>
                  <Check className='size-4 text-primary mt-0.5 shrink-0' />
                  <span className='break-words'>{t(`yearly.features.${i}`)}</span>
                </li>
              ))}
            </ul>
            <Button text={t('yearly.cta')} className='w-full mt-auto font-bold shadow-md' href={`/${locale}/paywall`} />
          </motion.div>

          {/* LIFETIME PLAN (Gold/Founder's Edition) */}
          <motion.div className='relative dark:bg-[#0A0A0A] bg-[#FFFBEB] border-2 border-[#EAB308] rounded-xl p-[24px] flex flex-col h-full shadow-[0_0_15px_rgba(234,179,8,0.1)]' variants={fadeUp(0.3)}>
            <div className='absolute -top-3 right-4 bg-[#EAB308] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg'>
              {t('badges.exclusive')}
            </div>
            <div className='mb-4 mt-2'>
              <h3 className='text-[20px] font-semibold mb-2 dark:text-white text-slate-900'>{t('lifetime.title')}</h3>
              <div className='flex flex-col mb-1'>
                <span className='text-[36px] font-bold dark:text-[#EAB308] text-[#B45309]'>{t('lifetime.price')}</span>
                <span className='text-xs dark:text-muted-foreground text-amber-700 uppercase tracking-wider font-semibold'>{t('lifetime.period')}</span>
              </div>
            </div>

            <ul className='space-y-3 mb-6 flex-1'>
              {['0', '1', '2', '3', '4'].map((i) => (
                <li key={i} className='flex items-start gap-2 text-sm dark:text-foreground/90 text-amber-950 font-medium'>
                  <Check className='size-4 dark:text-[#EAB308] text-[#B45309] mt-0.5 shrink-0' />
                  <span className='break-words'>{t(`lifetime.features.${i}`)}</span>
                </li>
              ))}
            </ul>
            <Button
              text={t('lifetime.cta')}
              className='w-full mt-auto bg-[#EAB308] hover:bg-[#CA8A04] text-black border-none font-bold shadow-md'
              href={`/${locale}/paywall`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing