'use client'
import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why choose us', href: '#why-choose-us' },
  { label: 'Financial Insights', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
]

const Footer = () => {
  return (
    <footer className="p-[20px] border-t">
      <div className="landing__container">
        <div className="flex flex-col lg:flex-row gap-[30px] items-center justify-between mb-10">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/Spendly-logo.svg" alt="Spendly Logo" width={130} height={50} />
            </Link>
          </div>

          <nav>
            <ul className="flex flex-col lg:flex-row items-center gap-8">
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
        </div>

        {/* Row 2: email + socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full items-center gap-6 md:gap-0 mb-6">
          <div className="flex flex-col items-center md:items-start order-1">
            <a
              href="mailto:hello@getspendly.net"
              className="text-[18px] font-semibold text-foreground hover:text-primary transition-colors duration-200"
            >
              hello@getspendly.net
            </a>
            <a
              href="mailto:support@getspendly.net"
              className="text-[18px] font-semibold text-foreground hover:text-primary transition-colors duration-200"
            >
              support@getspendly.net
            </a>
          </div>
          <div className="flex items-center gap-8 order-2">
            <a
              href="https://www.linkedin.com/in/artem-k-3392b3366/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] font-semibold text-primary transition-all duration-200 ease-in-out hover:opacity-50"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] font-semibold text-primary transition-all duration-200 ease-in-out hover:opacity-50"
            >
              X
            </a>
          </div>
        </div>

        {/* Row 3: policies + copyright */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between w-full">
          <div className="flex items-center gap-6 order-1 md:order-none">
            <Link
              href="/privacy-policy"
              className="text-[14px] text-foreground transition-colors duration-200 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-[14px] text-foreground transition-colors duration-200 hover:text-primary"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/refund-policy"
              className="text-[14px] text-foreground transition-colors duration-200 hover:text-primary"
            >
              Refund Policy
            </Link>
          </div>
          <span className="text-[14px] text-muted-foreground order-2 md:order-none">
            Copyright. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
