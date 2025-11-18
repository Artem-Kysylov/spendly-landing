import React from 'react'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

const Features = () => {
  return (
    <section className='mt-[120px]' id='features'>
      <div className='landing__container'>
        <h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'>Spendly Features</h2>
        <Tabs defaultValue='ai'>
          <TabsList className='mb-6 w-full h-14 rounded-lg p-2 bg-transparent border border-primary/30'>
            <TabsTrigger value='ai' className='flex-1 h-full text-base font-semibold'>AI-first</TabsTrigger>
            <TabsTrigger value='core' className='flex-1 h-full text-base font-semibold'>Core</TabsTrigger>
            <TabsTrigger value='experience' className='flex-1 h-full text-base font-semibold'>Experience</TabsTrigger>
          </TabsList>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
            <div>
              <TabsContent value='ai'>
                <div className='space-y-10'>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>AI Chat for your finances</h3>
                    <p className='text-[16px] text-foreground'>Ask anything — Spendly explains your spending, overspending and patterns.</p>
                  </div>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>AI Insights & smart analytics</h3>
                    <p className='text-[16px] text-foreground'>Weekly summaries, predictions and personalized suggestions.</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value='core'>
                <div className='space-y-10'>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>Add expenses in seconds</h3>
                    <p className='text-[16px] text-foreground'>Manual entry or instant AI categorization.</p>
                  </div>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>Recurring transactions</h3>
                    <p className='text-[16px] text-foreground'>Automatically track subscriptions & monthly bills.</p>
                  </div>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>Budgets, categories & folders</h3>
                    <p className='text-[16px] text-foreground'>Organize your money the way you like.</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value='experience'>
                <div className='space-y-10'>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>Light & dark themes</h3>
                    <p className='text-[16px] text-foreground'>Beautiful and consistent UI.</p>
                  </div>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>7 languages</h3>
                    <p className='text-[16px] text-foreground'>EN · RU · UA · KR · HI · ID · JP</p>
                  </div>
                  <div>
                    <h3 className='text-[20px] font-semibold text-foreground mb-2'>Notifications</h3>
                    <p className='text-[16px] text-foreground'>Overspending alerts, budget reminders, weekly reports.</p>
                  </div>
                </div>
              </TabsContent>
            </div>

            <div className='flex justify-center'>
              <TabsContent value='ai'>
                <Image src='/landing-img-1.png' alt='Spendly preview — AI' width={875} height={500} className='w-full max-w-[875px] h-auto rounded-lg border border-border' />
              </TabsContent>
              <TabsContent value='core'>
                <Image src='/landing-img-1.png' alt='Spendly preview — Core' width={875} height={500} className='w-full max-w-[875px] h-auto rounded-lg border border-border' />
              </TabsContent>
              <TabsContent value='experience'>
                <Image src='/landing-img-1.png' alt='Spendly preview — Experience' width={875} height={500} className='w-full max-w-[875px] h-auto rounded-lg border border-border' />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Features