'use client'

import dynamic from 'next/dynamic'

import Header from '@/components/layout/Header'

const PromoBanner = dynamic(() => import('@/components/layout/PromoBanner'), { ssr: false })

export function StickyHeaderBlock() {
  return (
    <div className="sticky top-0 z-40">
      <PromoBanner />
      <Header />
    </div>
  )
}
