

'use client'
import { useTranslations } from 'next-intl'
// Import components 
import Button from "../ui-elements/Button"

const Cta = () => {
  const t = useTranslations('cta')
  return (
    <section className='mt-[120px] mb-[120px]' id='final-cta'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-[15px]'>
          <h2 className='text-[55px] font-semibold text-foreground text-center'>{t('title')}</h2>
          <Button
            text={t('button')}
            className="w-[250px]"
          />
          <span className='text-center block text-[14px] text-muted-foreground'>{t('subtitle')}</span>
        </div>
      </div>
    </section>
  )
}

export default Cta