'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

const HowItWorks = () => {
  const t = useTranslations('howItWorks')
  return (
    <section className='mt-[120px]' id='how-it-works'>
      <div className='landing__container'>
        <h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'>{t('title')}</h2>

        <div className='flex flex-col lg:flex-row items-start justify-between gap-[30px]'>
          <div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center'>
            <h3 className='text-[30px] mb-4'>🏦</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>{t('step1_title')}</h4>
            <p>{t('step1_desc')}</p>
          </div>

          <div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center'>
            <h3 className='text-[30px] mb-4'>⚡</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>{t('step2_title')}</h4>
            <p>{t('step2_desc')}</p>
          </div>

          <div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center'>
            <h3 className='text-[30px] mb-4'>📂</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>{t('step3_title')}</h4>
            <p>{t('step3_desc')}</p>
          </div>

          <div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center'>
            <h3 className='text-[30px] mb-4'>🧠</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>{t('step4_title')}</h4>
            <p>{t('step4_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks