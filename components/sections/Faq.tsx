import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const Faq = () => {
  return (
    <section className='mt-[120px] mb-[120px]' id='faq'>
      <div className='landing__container'>
        <h2 className='text-3xl md:text-4xl font-semibold text-foreground text-center mb-8'>Frequently Asked Questions</h2>
        <Accordion type='single' collapsible className='space-y-4'>
          <AccordionItem value='q1'>
            <AccordionTrigger className='text-[20px] font-semibold hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary'>
              Is Spendly free?
            </AccordionTrigger>
            <AccordionContent className='text-[16px]'>
              Yes. The Free plan includes the core functionality without ads.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='q2'>
            <AccordionTrigger className='text-[20px] font-semibold hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary'>
              Can I sign up without Google?
            </AccordionTrigger>
            <AccordionContent className='text-[16px]'>
              Yes. You can sign up with email in addition to Google.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='q3'>
            <AccordionTrigger className='text-[20px] font-semibold hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary'>
              How does AI work?
            </AccordionTrigger>
            <AccordionContent className='text-[16px]'>
              Spendly provides insights, summaries and categorization using AI.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='q4'>
            <AccordionTrigger className='text-[20px] font-semibold hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary'>
              Is my data safe?
            </AccordionTrigger>
            <AccordionContent className='text-[16px]'>
              Privacy-first: we protect your data and avoid unnecessary tracking.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='q5'>
            <AccordionTrigger className='text-[20px] font-semibold hover:no-underline transition-colors duration-200 hover:text-primary data-[state=open]:text-primary'>
              Is there a mobile app?
            </AccordionTrigger>
            <AccordionContent className='text-[16px]'>
              Mobile apps are on the roadmap.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Faq