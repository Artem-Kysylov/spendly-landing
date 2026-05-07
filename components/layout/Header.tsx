'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
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
      window.scrollTo(0, top ? Math.abs(parseInt(top, 10)) : scrollY)
    }
  }, [showMenu])

  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="landing__container">
        <div className="pt-[16px] pb-[16px] flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/Spendly-logo.svg" alt="Spendly Logo" width={120} height={44} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#hero"
              className="h-[42px] px-6 rounded-lg bg-primary text-primary-foreground text-sm font-semibold tracking-wide flex items-center hover:bg-primary/90 transition-colors shadow-sm"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile burger */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href="#hero"
              className="h-[38px] px-5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold tracking-wide flex items-center hover:bg-primary/90 transition-colors shadow-sm"
            >
              Join Waitlist
            </a>
            <button className="text-foreground" onClick={() => setShowMenu(true)}>
              <Menu size={22} />
            </button>
          </div>

          {/* Mobile menu */}
          {showMenu && (
            <div className="fixed inset-0 w-full min-h-[100dvh] bg-background z-50 flex flex-col">
              <button
                className="absolute top-[18px] right-[20px] text-foreground"
                onClick={() => setShowMenu(false)}
              >
                <X size={28} />
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
                  <li>
                    <a
                      href="#hero"
                      onClick={() => setShowMenu(false)}
                      className="h-[50px] px-8 rounded-lg bg-primary text-primary-foreground font-semibold tracking-wide text-[18px] flex items-center hover:bg-primary/90 transition-colors"
                    >
                      Join Waitlist
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
