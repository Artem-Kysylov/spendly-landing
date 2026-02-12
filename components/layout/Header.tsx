'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from "lucide-react"

// Import components
import Button from '../ui-elements/Button'
import ThemeSwitcher from '../ui-elements/ThemeSwitcher'
import LanguageSwitcher from '../ui-elements/LanguageSwitcher'
import { handleAuthRedirect } from '@/lib/auth-redirect'
import { useTranslations } from 'next-intl'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const t = useTranslations('nav')
  

  const handleGetStarted = handleAuthRedirect

  useEffect(() => {
    if (!showMenu) return

    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    return () => {
      const top = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''

      const restoredScrollY = top ? Math.abs(parseInt(top, 10)) : scrollY
      window.scrollTo(0, restoredScrollY)
    }
  }, [showMenu])



  return (
    <header className='border-b'>
      <div className='landing__container'>
        <div className='pt-[20px] pb-[20px] flex justify-between items-center'>
          <div className="flex items-center">
            <Link href="/">
              <Image
                  src="/Spendly-logo.svg" 
                  alt={t('logoAlt')} 
                  width={130}
                  height={50}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <a href="#features" className="font-medium text-foreground hover:text-primary transition-colors duration-200">{t('features')}</a>
              </li>
              <li>
                <a href="#how-it-works" className="font-medium text-foreground hover:text-primary transition-colors duration-200">{t('howItWorks')}</a>
              </li>
              <li>
                <a href="#pricing" className="font-medium text-foreground hover:text-primary transition-colors duration-200">{t('pricing')}</a>
              </li>
              <li>
                <a href="#why-choose-us" className="font-medium text-foreground hover:text-primary transition-colors duration-200">{t('why')}</a>
              </li>
              <li>
                <a href="#blog" className="font-medium text-foreground hover:text-primary transition-colors duration-200">{t('blog')}</a>
              </li>
              <li>
                <a href="#faq" className="font-medium text-foreground hover:text-primary transition-colors duration-200">{t('faq')}</a>
              </li>
            </ul>
          </nav>
          
          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-5">
            <ThemeSwitcher />
            <button 
              className="text-foreground" 
              onClick={() => setShowMenu(true)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {showMenu && (
            <div
              className="fixed inset-0 w-full min-h-[100dvh] bg-background z-50 flex flex-col"
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
                    <a href="#features" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>{t('features')}</a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>{t('howItWorks')}</a>
                  </li>
                  <li>
                    <a href="#pricing" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>{t('pricing')}</a>
                  </li>
                  <li>
                    <a href="#why-choose-us" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>{t('why')}</a>
                  </li>
                  <li>
                    <a href="#blog" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>{t('blog')}</a>
                  </li>
                  <li>
                    <a href="#faq" className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200" onClick={() => setShowMenu(false)}>{t('faq')}</a>
                  </li>
                  <li>
                    <LanguageSwitcher />
                  </li>
                </ul>
              </nav>

              {/* Mobile Button */}
              <div className="hidden md:block absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[90%]">
                <Button
                  text={t('cta')}
                  className="w-full"
                  onClick={handleGetStarted}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header