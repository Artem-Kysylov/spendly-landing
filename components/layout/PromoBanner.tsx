'use client'

import { useCallback, useMemo, useState } from 'react'
import { X } from 'lucide-react'

const DISMISS_STORAGE_KEY = 'spendly:tablexport-promo-dismissed'
/** Ephemeral ID per browsing session (survives reloads until the tab/session ends). */
const SESSION_MARKER_KEY = 'spendly:browser-session-marker'

const TABLEXPORT_URL = 'https://www.tablexport.com' as const

type PromoLine = { full: string; short: string }

const PROMO_LINES: readonly PromoLine[] = [
  {
    full:
      'Tired of manual data entry? Export any web table to Excel in one click with TableXport.',
    short: 'Export web tables to Excel in one click — TableXport.',
  },
  {
    full: 'Convert messy web data into clean spreadsheets instantly. Meet TableXport.',
    short: 'Web data → clean spreadsheets. Meet TableXport.',
  },
  {
    full: 'Stop copy-pasting. Move web tables to Excel or CSV effortlessly with TableXport.',
    short: 'Web tables → Excel or CSV effortlessly — TableXport.',
  },
]

function getOrCreateSessionMarker(): string | null {
  try {
    let marker = sessionStorage.getItem(SESSION_MARKER_KEY)
    if (!marker) {
      marker = crypto.randomUUID()
      sessionStorage.setItem(SESSION_MARKER_KEY, marker)
    }
    return marker
  } catch {
    return null
  }
}

function variantIndexFromMarker(marker: string): number {
  let hash = 0
  for (let i = 0; i < marker.length; i += 1) {
    hash = (hash * 31 + marker.charCodeAt(i)) >>> 0
  }
  return hash % PROMO_LINES.length
}

type PromoInit = { dismissed: boolean; variantIndex: number }

function readInitialPromoState(): PromoInit {
  if (typeof window === 'undefined') {
    return { dismissed: false, variantIndex: 0 }
  }
  try {
    const marker = getOrCreateSessionMarker()
    if (!marker) return { dismissed: false, variantIndex: 0 }

    const dismissedFor = localStorage.getItem(DISMISS_STORAGE_KEY)
    return {
      dismissed: dismissedFor === marker,
      variantIndex: variantIndexFromMarker(marker),
    }
  } catch {
    return { dismissed: false, variantIndex: 0 }
  }
}

function PromoBanner() {
  const [{ dismissed, variantIndex }, setPromo] = useState<PromoInit>(readInitialPromoState)

  const line = useMemo(() => PROMO_LINES[variantIndex % PROMO_LINES.length], [variantIndex])

  const dismiss = useCallback(() => {
    try {
      const marker = getOrCreateSessionMarker()
      if (marker) {
        localStorage.setItem(DISMISS_STORAGE_KEY, marker)
      }
    } catch {
      /* ignore */
    }
    setPromo((prev) => ({ ...prev, dismissed: true }))
  }, [])

  if (dismissed) {
    return null
  }

  return (
    <aside
      role="region"
      aria-label="TableXport promotion"
      className="border-t border-white/[0.08] bg-[#060a12] text-[13px] leading-snug tracking-tight text-zinc-100 sm:text-[13px]"
    >
      <div className="landing__container relative">
        <div className="flex flex-col items-center justify-center gap-2.5 py-2 pl-3 pr-11 sm:flex-row sm:gap-4 sm:py-2.5 sm:pl-4 sm:pr-14 md:justify-center md:gap-5">
          <p className="max-w-xl text-center text-xs text-zinc-100/95 sm:text-left md:max-w-none md:text-[13px]">
            <span className="sm:hidden">{line.short}</span>
            <span className="hidden sm:inline">{line.full}</span>
          </p>

          <a
            href={TABLEXPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center rounded-md border border-zinc-200/90 bg-transparent px-3.5 py-1 text-xs font-medium text-zinc-100 transition-colors hover:border-white hover:bg-white/[0.04] md:py-1.5 md:text-[13px]"
          >
            Try TableXport&nbsp;→
          </a>
        </div>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss TableXport promotion"
          className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white sm:right-2"
        >
          <X className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        </button>
      </div>
    </aside>
  )
}

export default PromoBanner
