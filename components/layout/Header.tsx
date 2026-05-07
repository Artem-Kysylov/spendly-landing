'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Button from '../ui-elements/Button'
import ThemeSwitcher from '../ui-elements/ThemeSwitcher'
import { handleAuthRedirect } from '@/lib/auth-redirect'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why choose us', href: '#why-choose-us' },
  { label: 'Financial Insights', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
]

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

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
    <header className="border-b">
      <div className="landing__container">
        <div className="pt-[20px] pb-[20px] flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/Spendly-logo.svg" alt="Spendly Logo" width={130} height={50} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeSwitcher />
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-5">
            <ThemeSwitcher />
            <button className="text-foreground" onClick={() => setShowMenu(true)}>
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {showMenu && (
            <div className="fixed inset-0 w-full min-h-[100dvh] bg-background z-50 flex flex-col">
              <button
                className="absolute top-[20px] right-[20px] text-foreground"
                onClick={() => setShowMenu(false)}
              >
                <X size={30} />
              </button>

              <nav className="flex-1 flex items-center justify-center">
                <ul className="flex flex-col items-center gap-8">
                  {NAV_LINKS.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="font-semibold text-foreground text-[20px] hover:text-primary transition-colors duration-200"
                        onClick={() => setShowMenu(false)}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="hidden md:block absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[90%]">
                <Button text="Get started for FREE" className="w-full" onClick={handleAuthRedirect} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
