import React from 'react'
import { CircleCheck } from 'lucide-react'

const WhyChooseUs = () => {
  return (
    <section className='mt-[120px]' id='why-choose-us'>
      <div className='landing__container'>
        <h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'>Why choose us?</h2>
        <div className='flex flex-col xl:flex-row items-center justify-center gap-[30px]'>
            <ul className='flex flex-col items-start gap-[30px] w-full xl:w-[50vw]'>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>No bloated analytics — only essentials</p>
              </li>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>AI that helps, not overwhelms</p>
              </li>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>Clean, modern UI</p>
              </li>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>Free plan with core functionality</p>
              </li>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>Fastest experience among personal finance apps</p>
              </li>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>Privacy-first</p>
              </li>
            </ul>
          <div className='flex justify-center'>
            <img 
              src="/landing-img-1.png" 
              alt="Spendly preview" 
              className="w-[50vw] max-w-[581px] h-auto rounded-lg border border-border"
            />
          </div>
        </div>
      </div>  
    </section>
  )
}

export default WhyChooseUs