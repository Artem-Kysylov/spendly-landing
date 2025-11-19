'use client'
// Imports 
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Founder = () => {
  const t = useTranslations('founder')
  return (
    <section className='mt-[120px]' id='founder'>
      <div className='landing__container'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-[30px]'>
          <div className='md:w-1/2'>
            <h2 className='text-[40px] font-semibold text-foreground mb-[20px]'>{t('title')}</h2>
            <p className='text-[16px] text-foreground mb-4'>{t('text')}</p>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <div className='relative w-full max-w-[400px] aspect-square'>
              <Image
                src='/about.png'
                alt={t('image_alt')}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className='object-cover rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder