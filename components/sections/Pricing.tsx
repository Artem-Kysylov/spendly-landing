'use client'
import React from 'react'
import { Check } from 'lucide-react'
import Button from '@/components/ui-elements/Button'
import { useTranslations, useLocale } from 'next-intl'

const Pricing = () => {
  const t = useTranslations('pricing')
  const tc = useTranslations('common')
  const locale = useLocale()
  const localeMap: Record<string, string> = {
    en: 'en-US',
    ru: 'ru-RU',
    uk: 'uk-UA',
    hi: 'hi-IN',
    ko: 'ko-KR',
    id: 'id-ID',
    ja: 'ja-JP'
  }
  const resolved = localeMap[locale] || 'en-US'
  const priceUSD = new Intl.NumberFormat(resolved, { style: 'currency', currency: 'USD' }).format(7)
  const perMonth = tc('perMonthShort')
  return (
    <section className='mt-[120px]' id='pricing'>
      <div className='landing__container'>
        <h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'>{t('title')}</h2>

        <div className='flex flex-col md:flex-row justify-center gap-[30px]'>
          <div className='bg-card border border-border rounded-lg p-[30px] w-full md:w-[22rem] font-semibold'>
            <h3 className='text-[28px] font-semibold mb-[20px]'>{t('free.title')}</h3>
            <ul className='space-y-3 mb-[20px] text-foreground'>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('free.features.0')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('free.features.1')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('free.features.2')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('free.features.3')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('free.features.4')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('free.features.5')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('free.features.6')}</li>
            </ul>
            <Button text={t('free.cta')} className='w-full' variant='outline' />
          </div>

          <div className='bg-card border border-primary rounded-lg p-[30px] w-full md:w-[22rem] font-semibold'>
            <h3 className='text-[28px] font-semibold mb-[20px]'>{t('pro.title')} <span className='text-foreground'>— {priceUSD}{perMonth}</span></h3>
            <ul className='space-y-3 mb-[20px] text-foreground'>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('pro.features.0')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('pro.features.1')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('pro.features.2')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('pro.features.3')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('pro.features.4')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('pro.features.5')}</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />{t('pro.features.6')}</li>
            </ul>
            <Button text={t('pro.cta')} className='w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing