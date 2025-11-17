import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='p-[20px] border-t light-grey'>
      <div className='landing__container'>
        <div className='flex flex-col lg:flex-row gap-[30px] items-center justify-between mb-8'>
          <div className="flex items-center">
            <Image
                src="/Spendly-logo.svg" 
                alt="Spendly Logo" 
                width={100}
                height={50}
            />
            </div>

            <nav>
              <ul className="flex flex-col lg:flex-row items-center gap-6">
                <li>
                  <a href="#features" className="font-medium text-secondary-black hover:text-primary transition-colors duration-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#demo" className="font-medium text-secondary-black hover:text-primary transition-colors duration-200">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="font-medium text-secondary-black hover:text-primary transition-colors duration-200">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="font-medium text-secondary-black hover:text-primary transition-colors duration-200">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="font-medium text-secondary-black hover:text-primary transition-colors duration-200">
                    Why choose us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="font-medium text-secondary-black hover:text-primary transition-colors duration-200">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
        </div>
        <span className='text-center block text-[14px] text-secondary-black opacity-70'>Copyright. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer