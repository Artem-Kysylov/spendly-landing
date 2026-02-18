'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

type AspectRatio = 'video' | 'square' | 'portrait'
type Fit = 'cover' | 'contain'

interface BlogImageProps {
  src: string
  alt: string
  caption?: string
  aspectRatio?: AspectRatio
  fit?: Fit
}

const aspectRatioStyle: Record<AspectRatio, string> = {
  video: '16 / 9',
  square: '1 / 1',
  portrait: '9 / 16',
}

export default function BlogImage({
  src,
  alt,
  caption,
  fit = 'cover',
  aspectRatio = 'video',
}: BlogImageProps) {
  const ratio = aspectRatioStyle[aspectRatio] ?? aspectRatioStyle.video
  const isPortraitOrSquare = aspectRatio === 'portrait' || aspectRatio === 'square'

  return (
    <figure className="mb-8">
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm'
        )}
        style={{
          aspectRatio: ratio,
          ...(isPortraitOrSquare ? { maxWidth: 'min(100%, 360px)' } : null),
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 768px"
          className={cn('!mt-0')}
          style={{ objectFit: fit }}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-left text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
