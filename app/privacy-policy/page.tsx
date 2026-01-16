'use client'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'

export default function PrivacyPolicyPage() {
  const locale = useLocale()
  const t = useTranslations('privacy')
  const lastUpdated = new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date())
  return (
    <section className='mt-[60px] mb-[120px]' id='privacy-policy'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-2 mb-[20px]'>
          <h1 className='text-[40px] font-semibold text-foreground text-center'>{t('title')}</h1>
          <p className='text-[14px] text-muted-foreground'>{t('lastUpdated', {date: lastUpdated})}</p>
        </div>

        <div className='space-y-6 [&>div]:space-y-4 [&>div>p]:mb-[30px]'>
          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-8'>{t('sections.information.title')}</h2>
            <h3 className='text-[18px] font-semibold text-foreground mb-1'>{t('sections.information.youProvide.title')}</h3>
            <p className='text-[16px] text-foreground'>
              {t('sections.information.youProvide.body')}
            </p>
            <h3 className='text-[18px] font-semibold text-foreground mt-4 mb-1'>{t('sections.information.auto.title')}</h3>
            <p className='text-[16px] text-foreground'>
              {t('sections.information.auto.body')}
            </p>
            <h3 className='text-[18px] font-semibold text-foreground mt-4 mb-1'>{t('sections.information.ai.title')}</h3>
            <p className='text-[16px] text-foreground'>
              {t('sections.information.ai.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.use.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.use.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.storage.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.storage.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.aiPrivacy.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.aiPrivacy.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.cookies.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.cookies.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.share.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.share.body')}
            </p>
            <h3 className='text-[18px] font-semibold text-foreground mt-4 mb-1'>{t('sections.share.payments.title')}</h3>
            <p className='text-[16px] text-foreground'>
              {t('sections.share.payments.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.retention.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.retention.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.rights.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.rights.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.children.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.children.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.changes.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.changes.body')}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{t('sections.contact.title')}</h2>
            <p className='text-[16px] text-foreground'>
              {t('sections.contact.body')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
