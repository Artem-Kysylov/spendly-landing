// Import components 
import Button from "../ui-elements/Button"
import Image from 'next/image'

const Hero = () => {

  return (
    <section className='mt-[120px] flex flex-col items-center'>
      <div className='flex flex-col items-center gap-[30px] max-w-4xl mb-[30px]'>
        <h1 className="text-[55px] font-semibold text-foreground text-center">Take control of your money — without spreadsheets, chaos or stress.</h1>
        <p className="font-medium text-foreground text-center">Track expenses, build budgets, analyze reports and get AI-powered insights.
Supports 7 languages, light/dark themes, and takes 30 seconds to set up.</p>
        <div className='flex flex-col sm:flex-row items-center gap-3'>
          <Button text='Get started for FREE' />
          <Button text='Log in to Spendly' variant='outline' className='w-[203px]' />
        </div>
      </div>
        <Image
          src="/landing-img-1.png" 
          alt="Dashboard image" 
          width={875}
          height={500}
          className="w-full max-w-[875px] h-auto" 
        />        
    </section>
  )
}

export default Hero