import React from 'react'
import Image from 'next/image'

const Demo = () => {
  return (
    <section className='mt-[120px]' id='demo'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-[15px] mb-[30px]'>
          <h2 className='text-[40px] font-semibold text-foreground text-center'>See Spendly in action</h2>
          <p className='text-[18px] text-muted-foreground text-center'>Minimal, fast and focused on what actually matters.</p>
        </div>
        <div className='flex justify-center'>
          <Image
            src='/landing-img-1.png'
            alt='Demo preview'
            width={875}
            height={500}
            className='w-full max-w-[875px] h-auto rounded-lg border border-border'
          />
        </div>
      </div>
    </section>
  )
}

export default Demo