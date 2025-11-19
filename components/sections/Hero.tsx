'use client'
// Import components 
import Button from "../ui-elements/Button"
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('hero')
  return (
    <section className='mt-[120px]'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-[24px] max-w-4xl mx-auto mb-[30px]'>
          <h1 className="text-[36px] sm:text-[44px] md:text-[55px] font-semibold text-foreground text-center">{t('title')}</h1>
          <p className="font-medium text-foreground text-center">{t('subtitle_line1')}
{t('subtitle_line2')}</p>
          <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-3'>
            <Button text={t('cta_primary')} className='w-full sm:w-auto' />
            <Button text={t('cta_secondary')} variant='outline' className='w-full sm:w-[203px]' />
          </div>
        </div>
        <div className='flex justify-center'>
          <Image
            src="/landing-img-1.png" 
            alt={t('image_alt')} 
            width={875}
            height={500}
            className="w-full max-w-[875px] h-auto" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero