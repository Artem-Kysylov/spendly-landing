// Imports 
import Image from 'next/image'

const Founder = () => {
  return (
    <section className='mt-[120px]' id='founder'>
      <div className='landing__container'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-[30px]'>
          <div className='md:w-1/2'>
            <h2 className='text-[40px] font-semibold text-foreground mb-[20px]'>Built by someone tired of overcomplicated finance apps</h2>
            <p className='text-[16px] text-foreground mb-4'>Короткий личный текст о том, что Spendly — не корпоративный продукт, а инструмент, созданный фаундером, которому важна простота и реальная польза.</p>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <div className='relative w-full max-w-[400px] aspect-square'>
              <Image
                src='/about.png'
                alt='Artem - Creator of Spendly'
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