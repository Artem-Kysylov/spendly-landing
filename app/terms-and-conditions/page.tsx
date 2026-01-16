'use client'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'

export default function TermsPage() {
  const locale = useLocale()
  const t = useTranslations('terms')
  const lastUpdated = new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date())
  const effectiveDate = lastUpdated

  return (
    <section className='mt-[60px] mb-[120px]' id='terms-and-conditions'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-2 mb-[20px]'>
          <h1 className='text-[40px] font-semibold text-foreground text-center'>{t('title')}</h1>
          <p className='text-[14px] text-muted-foreground'>{t('lastUpdatedEffective', { last: lastUpdated, effective: effectiveDate })}</p>
        </div>

        <div className='space-y-6 [&>div]:space-y-4 [&>div>p]:mb-[30px]'>
          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.acceptance.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.acceptance.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.eligibility.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.eligibility.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.description.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.description.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.accounts.title')}</h2>
            <h3 className='text-[18px] font-semibold text-foreground'>{t('sections.accounts.registration.title')}</h3>
            <p className='text-[16px] text-foreground'>{t('sections.accounts.registration.body')}</p>
            <h3 className='text-[18px] font-semibold text-foreground'>{t('sections.accounts.security.title')}</h3>
            <p className='text-[16px] text-foreground'>{t('sections.accounts.security.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.payments.title')}</h2>
            <h3 className='text-[18px] font-semibold text-foreground'>{t('sections.payments.orderProcess.title')}</h3>
            <p className='text-[16px] text-foreground'>{t('sections.payments.orderProcess.body')}</p>
            <h3 className='text-[18px] font-semibold text-foreground'>{t('sections.payments.pricing.title')}</h3>
            <p className='text-[16px] text-foreground'>{t('sections.payments.pricing.body')}</p>
            <h3 className='text-[18px] font-semibold text-foreground'>{t('sections.payments.billing.title')}</h3>
            <p className='text-[16px] text-foreground'>{t('sections.payments.billing.body')}</p>
            <h3 className='text-[18px] font-semibold text-foreground'>{t('sections.payments.refunds.title')}</h3>
            <p className='text-[16px] text-foreground'>{t('sections.payments.refunds.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.aiUse.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.aiUse.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.userContent.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.userContent.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.storage.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.storage.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.acceptableUse.title')}</h2>
            <ul className='list-disc pl-5 text-[16px] text-foreground'>
              <li>{t('sections.acceptableUse.list.0')}</li>
              <li>{t('sections.acceptableUse.list.1')}</li>
              <li>{t('sections.acceptableUse.list.2')}</li>
              <li>{t('sections.acceptableUse.list.3')}</li>
            </ul>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.availability.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.availability.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.thirdParty.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.thirdParty.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.termination.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.termination.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.liability.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.liability.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.disclaimer.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.disclaimer.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.law.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.law.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.changes.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.changes.body')}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{t('sections.contact.title')}</h2>
            <p className='text-[16px] text-foreground'>{t('sections.contact.body')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
