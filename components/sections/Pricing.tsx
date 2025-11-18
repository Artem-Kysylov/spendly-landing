import React from 'react'
import { Check } from 'lucide-react'
import Button from '@/components/ui-elements/Button'

const Pricing = () => {
  return (
    <section className='mt-[120px]' id='pricing'>
      <div className='landing__container'>
        <h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'>Simple pricing. No surprises.</h2>

        <div className='flex flex-col md:flex-row justify-center gap-[30px]'>
          <div className='bg-card border border-border rounded-lg p-[30px] w-full md:w-[22rem] font-semibold'>
            <h3 className='text-[28px] font-semibold mb-[20px]'>Free</h3>
            <ul className='space-y-3 mb-[20px] text-foreground'>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />Unlimited manual expenses</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />Unlimited categories & folders</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />Light & dark themes</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />7 languages</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />Basic analytics</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />Weekly summaries</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />No ads</li>
            </ul>
            <Button text='Get started for FREE' className='w-full' variant='outline' />
          </div>

          <div className='bg-card border border-primary rounded-lg p-[30px] w-full md:w-[22rem] font-semibold'>
            <h3 className='text-[28px] font-semibold mb-[20px]'>Pro <span className='text-foreground'>— $7/mo</span></h3>
            <ul className='space-y-3 mb-[20px] text-foreground'>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />All Free features</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />AI Chat</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />AI Insights</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />Recurring transactions</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />Notifications</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />Advanced analytics & charts</li>
              <li className='flex items-center gap-2'><Check className='size-4 text-primary' />Priority feature access</li>
            </ul>
            <Button text='Upgrade to Pro' className='w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing