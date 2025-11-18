'use client'
import React from 'react'

const Roadmap = () => {
  const items = [
    { emoji: '📧', text: 'Gmail receipt parsing', desc: 'Automatically parse receipts from Gmail. Faster input, fewer mistakes.' },
    { emoji: '👥', text: 'Shared budgets', desc: 'Create budgets with family or teammates. Collaborate and stay aligned.' },
    // { emoji: '📱', text: 'Mobile apps', desc: 'iOS and Android apps for quick tracking on the go. Sync everywhere.' },
    { emoji: '🧾', text: 'Advanced subscription manager', desc: 'Track renewals and cancellations with reminders. No more surprise charges.' },
    { emoji: '🛍️', text: 'Spendly Shopping', desc: 'Smart shopping lists and price tracking to save more.' },
  ]

  return (
    <section className='mt-[120px]' id='roadmap'>
      <div className='landing__container'>
        <h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'>What’s next</h2>
        <div>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px]'>
            {items.map((it, i) => (
              <li key={i} className='bg-card border border-border rounded-lg p-[20px] h-[260px] flex flex-col items-center text-center'>
                <span className='text-2xl leading-none mb-3'>{it.emoji}</span>
                <span className='text-[20px] font-semibold mb-2'>{it.text}</span>
                <p className='text-[16px] text-foreground'>
                  {it.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Roadmap