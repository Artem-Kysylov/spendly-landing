'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from "lucide-react"

// Import components
import Button from '../ui-elements/Button'
import ThemeSwitcher from '../ui-elements/ThemeSwitcher'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  const handleGoogleClick = () => {}

  return (
    <header className='border-b'>
      <div className='landing__container'>
        <div className='pt-[20px] pb-[20px] flex justify-between items-center'>
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <a href="#features" className="font-medium text-foreground hover:text-primary transition-colors duration-200">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="font-medium text-foreground hover:text-primary transition-colors duration-200">How it works</a>
              </li>
              <li>
                <a href="#pricing" className="font-medium text-foreground hover:text-primary transition-colors duration-200">Pricing</a>
              </li>
              <li>
                <a href="#why-choose-us" className="font-medium text-foreground hover:text-primary transition-colors duration-200">Why choose us</a>
              </li>
              <li>
                <a href="#faq" className="font-medium text-foreground hover:text-primary transition-colors duration-200">FAQ</a>
              </li>
            </ul>
          </nav>
          
          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeSwitcher />
            <Button 
              text='Get started for FREE'
              onClick={handleGoogleClick}        
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-foreground" 
            onClick={() => setShowMenu(true)}
          >
            <Menu size={24} />
          </button>

          {/* Mobile Menu */}
          <div 
            className={`fixed left-0 w-full h-screen bg-background z-50 flex flex-col transition-all duration-300 ${
              showMenu ? 'top-0' : 'top-[-100%]'
            }`}
          >
            <button 
              className="absolute top-[20px] right-[20px] text-foreground" 
              onClick={() => setShowMenu(false)}
            >
              <X size={30} />
            </button>

            {/* Mobile Navigation */}
            <nav className="flex-1 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-8">
                <li>
                  <a href="#features" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>Features</a>
                </li>
                <li>
                  <a href="#demo" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>Demo</a>
                </li>
                <li>
                  <a href="#how-it-works" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>How it works</a>
                </li>
                <li>
                  <a href="#pricing" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>Pricing</a>
                </li>
                <li>
                  <a href="#why-choose-us" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>Why choose us</a>
                </li>
                <li>
                  <a href="#faq" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>FAQ</a>
                </li>
              </ul>
            </nav>

            {/* Mobile Button */}
            <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[90%]">
              <Button 
                text='Sign in with Google'
                className="w-full"
                onClick={handleGoogleClick} 
              />       
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header