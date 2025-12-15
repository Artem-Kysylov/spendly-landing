'use client'
import React from 'react'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeUp, fadeUpScale, viewportDefault, containerStagger } from '@/components/utils/motion'

const Features = () => {
  const t = useTranslations('features')
  return (
    <section className='mt-[120px]' id='features'>
      <div className='landing__container'>
        <motion.h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'
          initial='hidden' whileInView='visible' viewport={viewportDefault} variants={fadeUp(0)}>{t('title')}</motion.h2>
        <Tabs defaultValue='ai'>
          <motion.div className='mb-6 w-full h-14 rounded-lg p-2 bg-transparent border border-primary/30'
            initial='hidden' whileInView='visible' viewport={viewportDefault} variants={containerStagger(0.06)}>
            <TabsList className='w-full h-full'>
              <TabsTrigger value='ai' className='flex-1 h-full text-base font-semibold'>{t('tabs.ai')}</TabsTrigger>
              <TabsTrigger value='core' className='flex-1 h-full text-base font-semibold'>{t('tabs.core')}</TabsTrigger>
              <TabsTrigger value='experience' className='flex-1 h-full text-base font-semibold'>{t('tabs.experience')}</TabsTrigger>
            </TabsList>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
            <div>
              <TabsContent value='ai'>
                <motion.div className='space-y-10' initial='hidden' whileInView='visible' viewport={viewportDefault} variants={containerStagger(0.06)}>
                  <motion.div variants={fadeUp(0)}>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('ai.chat.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('ai.chat.desc')}</p>
                  </motion.div>
                  <motion.div variants={fadeUp(0.05)}>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('ai.insights.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('ai.insights.desc')}</p>
                  </motion.div>
                </motion.div>
              </TabsContent>
              <TabsContent value='core'>
                <motion.div className='space-y-10' initial='hidden' whileInView='visible' viewport={viewportDefault} variants={containerStagger(0.06)}>
                  <motion.div variants={fadeUp(0)}>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('core.add.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('core.add.desc')}</p>
                  </motion.div>
                  <motion.div variants={fadeUp(0.05)}>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('core.recurring.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('core.recurring.desc')}</p>
                  </motion.div>
                  <motion.div variants={fadeUp(0.1)}>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('core.budgets.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('core.budgets.desc')}</p>
                  </motion.div>
                </motion.div>
              </TabsContent>
              <TabsContent value='experience'>
                <motion.div className='space-y-10' initial='hidden' whileInView='visible' viewport={viewportDefault} variants={containerStagger(0.06)}>
                  <motion.div variants={fadeUp(0)}>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('experience.themes.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('experience.themes.desc')}</p>
                  </motion.div>
                  <motion.div variants={fadeUp(0.05)}>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('experience.languages.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('experience.languages.desc')}</p>
                  </motion.div>
                  <motion.div variants={fadeUp(0.1)}>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>{t('experience.notifications.title')}</h3>
                    <p className='text-[16px] text-foreground'>{t('experience.notifications.desc')}</p>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </div>
            <div className='flex justify-center'>
              <TabsContent value='ai'>
                <motion.div initial='hidden' whileInView='visible' viewport={viewportDefault} variants={fadeUpScale(0.1)}>
                  <div className='w-full max-w-[875px] aspect-video rounded-[10px] border border-border overflow-hidden'>
                    <video
                      src='/Spendly-Features-AI-first.mp4'
                      className='w-full h-full object-cover lg:object-left lg:scale-[1.08] lg:origin-left lg:translate-x-[-6%]'
                      muted
                      autoPlay
                      loop
                      playsInline
                    />
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent value='core'>
                <motion.div initial='hidden' whileInView='visible' viewport={viewportDefault} variants={fadeUpScale(0.1)}>
                  <video
                    src='/Spendly-Features-Core.mp4'
                    className='w-full max-w-[875px] h-auto rounded-lg border border-border'
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                </motion.div>
              </TabsContent>
              <TabsContent value='experience'>
                <motion.div initial='hidden' whileInView='visible' viewport={viewportDefault} variants={fadeUpScale(0.1)}>
                  <div className='w-full max-w-[875px] aspect-video rounded-[10px] border border-border overflow-hidden'>
                    <video
                      src='/Spendly-features-Experience.mp4'
                      className='w-full h-full object-cover'
                      muted
                      autoPlay
                      loop
                      playsInline
                    />
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Features