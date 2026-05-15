'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'spendly-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    void Promise.resolve().then(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored !== 'accepted') {
          setVisible(true)
        }
      } catch {
        setVisible(true)
      }
    })
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      // Storage may be unavailable; still dismiss for this session
    }
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div
      className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[100] flex w-auto max-w-none flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 shadow-lg backdrop-blur-md sm:inset-x-auto sm:right-[max(1.5rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:left-auto sm:max-w-sm sm:px-5 sm:py-4"
      role="region"
      aria-label="Cookie consent"
    >
      <p className="text-[13px] leading-snug text-white/90 sm:leading-relaxed">
        We use cookies to improve your experience. By using our site, you agree to our{' '}
        <Link
          href="/privacy-policy"
          className="font-medium text-white underline decoration-white/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="min-h-[44px] w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background sm:w-auto sm:self-end sm:min-h-0 sm:py-2"
      >
        Accept
      </button>
    </div>
  )
}
