import React from 'react'

const HowItWorks = () => {
  return (
    <section className='mt-[120px]' id='how-it-works'>
      <div className='landing__container'>
        <h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'>How it works?</h2>

        <div className='flex flex-col lg:flex-row items-start justify-between gap-[30px]'>
          <div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center'>
            <h3 className='text-[30px] mb-4'>🏦</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>Quick signup</h4>
            <p>Sign up with Google or email in just a few clicks</p>
          </div>

          <div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center'>
            <h3 className='text-[30px] mb-4'>⚡</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>Add expenses in seconds</h4>
            <p>Record transactions in just a few clicks</p>
          </div>

          <div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center'>
            <h3 className='text-[30px] mb-4'>📂</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>Budgets & categories</h4>
            <p>Organize your finances into folders for convenience</p>
          </div>

          <div className='bg-card text-center p-[30px] border border-border rounded-lg w-full h-[260px] flex flex-col items-center'>
            <h3 className='text-[30px] mb-4'>🧠</h3>
            <h4 className='text-[20px] font-semibold text-foreground mb-2'>AI insights</h4>
            <p>Get personalized suggestions and stay in control</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks