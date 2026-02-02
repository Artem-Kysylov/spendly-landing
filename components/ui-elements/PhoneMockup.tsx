'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type PhoneMockupProps = {
  videoSrc?: string
  imageSrc?: string
  imageAlt?: string
  className?: string
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ videoSrc, imageSrc, imageAlt, className }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    const update = () => setIsDark(root.classList.contains('dark'))
    update()
    const observer = new MutationObserver(update)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    const handler = () => update()
    window.addEventListener('theme-preference-updated', handler as EventListener)
    return () => {
      observer.disconnect()
      window.removeEventListener('theme-preference-updated', handler as EventListener)
    }
  }, [])

  const frameSrc = isDark ? '/iphone-black.png' : '/iphone-white.png'

  return (
    <div className={cn('relative flex w-full items-center justify-center', className)}>
      <div className='pointer-events-none absolute inset-0 -z-10 flex items-center justify-center'>
        <div className='h-[260px] w-[260px] rounded-full bg-primary/25 blur-3xl' />
      </div>

      <div className='relative w-full max-w-[420px]'>
        <div className='relative w-full pb-[216%]'>
          <Image
            src={frameSrc}
            alt='Phone mockup frame'
            fill
            priority={false}
            className='pointer-events-none z-10 select-none object-contain'
          />
          <div className='absolute left-[11%] right-[11%] top-[7.5%] bottom-[9.5%] rounded-[32px] overflow-hidden z-0 bg-black'>
            {videoSrc ? (
              <video
                src={videoSrc}
                className='h-full w-full object-cover'
                muted
                autoPlay
                loop
                playsInline
              />
            ) : imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt ?? ''}
                fill
                className='h-full w-full object-cover'
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneMockup
