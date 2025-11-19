'use client'
import React from 'react'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'

const Features = () => {
  const t = useTranslations('features')
  return (
    <section className='mt-[120px]' id='features'>
      <div className='landing__container'>
        <h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'>{t('title')}</h2>
        <Tabs defaultValue='ai'>
          <TabsList className='mb-6 w-full h-14 rounded-lg p-2 bg-transparent border border-primary/30'>
            <TabsTrigger value='ai' className='flex-1 h-full text-base font-semibold'>{t('tabs.ai')}</TabsTrigger>
            <TabsTrigger value='core' className='flex-1 h-full text-base font-semibold'>{t('tabs.core')}</TabsTrigger>
            <TabsTrigger value='experience' className='flex-1 h-full text-base font-semibold'>{t('tabs.experience')}</TabsTrigger>
          </TabsList>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
            <div>
              <TabsContent value='ai'>
                <div className='space-y-10'>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('ai.chat.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('ai.chat.desc')}</p>
                  </div>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('ai.insights.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('ai.insights.desc')}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value='core'>
                <div className='space-y-10'>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('core.add.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('core.add.desc')}</p>
                  </div>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('core.recurring.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('core.recurring.desc')}</p>
                  </div>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('core.budgets.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('core.budgets.desc')}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value='experience'>
                <div className='space-y-10'>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('experience.themes.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('experience.themes.desc')}</p>
                  </div>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('experience.languages.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('experience.languages.desc')}</p>
                  </div>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('experience.notifications.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('experience.notifications.desc')}</p>
                  </div>
                </div>
              </TabsContent>
            </div>

            <div className='flex justify-center'>
              <TabsContent value='ai'>
                <Image src='/landing-img-1.png' alt={t('imageAlt.ai')} width={875} height={500} className='w-full max-w-[875px] h-auto rounded-lg border border-border' />
              </TabsContent>
              <TabsContent value='core'>
                <Image src='/landing-img-1.png' alt={t('imageAlt.core')} width={875} height={500} className='w-full max-w-[875px] h-auto rounded-lg border border-border' />
              </TabsContent>
              <TabsContent value='experience'>
                <Image src='/landing-img-1.png' alt={t('imageAlt.experience')} width={875} height={500} className='w-full max-w-[875px] h-auto rounded-lg border border-border' />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Features