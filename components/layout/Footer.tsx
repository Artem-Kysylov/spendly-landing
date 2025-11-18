import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='p-[20px] border-t'>
      <div className='landing__container'>
        <div className='flex flex-col lg:flex-row gap-[30px] items-center justify-between mb-10'>
          <div className="flex items-center">
            <Link href="/">
              <Image
                  src="/Spendly-logo.svg" 
                  alt="Spendly Logo" 
                  width={130}
                  height={50}
              />
            </Link>
            </div>

            <nav>
              <ul className="flex flex-col lg:flex-row items-center gap-8">
                <li><a href="#features" className="font-medium text-foreground hover:text-primary transition-colors duration-200">Features</a></li>
                <li><a href="#how-it-works" className="font-medium text-foreground hover:text-primary transition-colors duration-200">How it works</a></li>
                <li><a href="#pricing" className="font-medium text-foreground hover:text-primary transition-colors duration-200">Pricing</a></li>
                <li><a href="#why-choose-us" className="font-medium text-foreground hover:text-primary transition-colors duration-200">Why choose us</a></li>
                <li><a href="#faq" className="font-medium text-foreground hover:text-primary transition-colors duration-200">FAQ</a></li>
              </ul>
            </nav>
        </div>
        {/* Row 2: email + socials */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full items-center gap-6 md:gap-0 mb-6'>
          <a href='mailto:tabxport@gmail.com' className='text-[18px] font-semibold text-foreground hover:text-primary transition-colors duration-200 order-1'>hello@spendly.com</a>
          <div className='flex items-center gap-8 order-2'>
            <a href='https://www.linkedin.com/in/artem-k-3392b3366/' target='_blank' rel='noopener noreferrer' className='text-[16px] font-semibold text-primary transition-all duration-200 ease-in-out hover:opacity-50'>
              Linkedin
            </a>
            <a href='https://x.com/tabXport' target='_blank' rel='noopener noreferrer' className='text-[16px] font-semibold text-primary transition-all duration-200 ease-in-out hover:opacity-50'>
              X
            </a>
          </div>
        </div>
        {/* Row 3: policies + copyright */}
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-6'>
            <a href='/privacy-policy' className='text-[14px] text-foreground transition-colors duration-200 hover:text-primary'>Privacy Policy</a>
            <a href='/terms-and-conditions' className='text-[14px] text-foreground transition-colors duration-200 hover:text-primary'>Terms & Conditions</a>
          </div>
          <span className='text-[14px] text-muted-foreground'>Copyright. All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer