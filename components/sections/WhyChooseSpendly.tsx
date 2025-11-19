'use client'
import React from 'react'
import { CircleCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'

const WhyChooseUs = () => {
  const t = useTranslations('why')
  return (
    <section className='mt-[120px]' id='why-choose-us'>
      <div className='landing__container'>
        <h2 className='text-[40px] font-semibold text-foreground text-center mb-[30px]'>{t('title')}</h2>
        <div className='flex flex-col xl:flex-row items-center justify-center gap-[30px]'>
            <ul className='flex flex-col items-start gap-[30px] w-full xl:w-[50vw]'>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>{t('bullets.0')}</p>
              </li>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>{t('bullets.1')}</p>
              </li>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>{t('bullets.2')}</p>
              </li>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>{t('bullets.3')}</p>
              </li>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>{t('bullets.4')}</p>
              </li>
              <li className='flex items-center w-full'>
                <CircleCheck className="mr-2 text-primary" size={20} />
                <p className='text-[16px] font-semibold text-foreground'>{t('bullets.5')}</p>
              </li>
            </ul>
          <div className='flex justify-center'>
            <img 
              src="/landing-img-1.png" 
              alt={t('image_alt')} 
              className="w-full max-w-[581px] h-auto rounded-lg border border-border"
            />
          </div>
        </div>
      </div>  
    </section>
  )
}

export default WhyChooseUs