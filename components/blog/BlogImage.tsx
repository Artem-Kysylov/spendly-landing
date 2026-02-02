'use client'

import Image from 'next/image'
import PhoneMockup from '@/components/ui-elements/PhoneMockup'
import { cn } from '@/lib/utils'

type AspectRatio = 'video' | 'square'

interface BlogImageProps {
  src: string
  alt: string
  caption?: string
  withMockup?: boolean
  aspectRatio?: AspectRatio
}

const aspectRatioClass: Record<AspectRatio, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
}

export default function BlogImage({
  src,
  alt,
  caption,
  withMockup = false,
  aspectRatio = 'video',
}: BlogImageProps) {
  const ratioClass = aspectRatioClass[aspectRatio] ?? aspectRatioClass.video

  const image = (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm',
        ratioClass
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover"
      />
    </div>
  )

  return (
    <figure className="my-8">
      {withMockup ? <PhoneMockup imageSrc={src} imageAlt={alt} /> : image}
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
