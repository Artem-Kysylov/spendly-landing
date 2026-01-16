'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function RefundPolicyPage() {
  const t = useTranslations('refundPolicy')

  return (
    <section className='mt-[60px] mb-[120px]' id='refund-policy'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-2 mb-[20px]'>
          <h1 className='text-[40px] font-semibold text-foreground text-center'>{t('title')}</h1>
          <p className='text-[14px] text-muted-foreground'>{t('lastUpdated')}</p>
        </div>

        <div className='space-y-6 [&>div]:space-y-4 [&>div>p]:mb-[30px]'>
          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.digitalProducts.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.digitalProducts.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.moneyBack.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.moneyBack.body')}
            </p>
            <p className='text-[16px] text-foreground'>
              {t('sections.moneyBack.note')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.cancellations.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.cancellations.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.merchantOfRecord.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.merchantOfRecord.body')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
