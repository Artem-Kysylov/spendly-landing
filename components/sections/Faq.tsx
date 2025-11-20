'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import { fadeUp, viewportDefault } from '@/components/utils/motion'

const Faq = () => {
  const t = useTranslations('faq')
  return (
    <section className='mt-[120px] mb-[120px]' id='faq'>
      <div className='landing__container'>
        <motion.h2 className='text-3xl md:text-4xl font-semibold text-foreground text-center mb-8'
          initial='hidden' whileInView='visible' viewport={viewportDefault} variants={fadeUp(0)}>{t('title')}</motion.h2>
        <Accordion type='single' collapsible className='space-y-4'>
          <AccordionItem value='q1'>
            <AccordionTrigger className='text-[20px] font-semibold hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary'>
              {t('q1')}
            </AccordionTrigger>
            <AccordionContent className='text-[16px]'>
              {t('a1')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='q2'>
            <AccordionTrigger className='text-[20px] font-semibold hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary'>
              {t('q2')}
            </AccordionTrigger>
            <AccordionContent className='text-[16px]'>
              {t('a2')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='q3'>
            <AccordionTrigger className='text-[20px] font-semibold hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary'>
              {t('q3')}
            </AccordionTrigger>
            <AccordionContent className='text-[16px]'>
              {t('a3')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='q4'>
            <AccordionTrigger className='text-[20px] font-semibold hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary'>
              {t('q4')}
            </AccordionTrigger>
            <AccordionContent className='text-[16px]'>
              {t('a4')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='q5'>
            <AccordionTrigger className='text-[20px] font-semibold hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary'>
              {t('q5')}
            </AccordionTrigger>
            <AccordionContent className='text-[16px]'>
              {t('a5')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Faq