'use client'
import { useState, useEffect } from 'react'
import { Share2, Copy, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const t = useTranslations('blogPost')
  const [copied, setCopied] = useState(false)
  const [hasNativeShare, setHasNativeShare] = useState(false)

  useEffect(() => {
    setHasNativeShare(typeof navigator !== 'undefined' && 'share' in navigator)
  }, [])

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        })
      } catch (error) {
        // User cancelled or error occurred
      }
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, '_blank', 'noopener,noreferrer')
  }

  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="border-t border-border pt-8 mt-16 mb-16">
      <h3 className="text-lg font-semibold mb-4 text-foreground">
        {t('shareArticle')}
      </h3>

      {/* Mobile: Native Share Button */}
      <div className="block md:hidden">
        {hasNativeShare ? (
          <button
            onClick={handleNativeShare}
            className="w-full px-6 py-3 bg-transparent text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center font-medium"
          >
            {t('share')}
          </button>
        ) : (
          <button
            onClick={handleCopyLink}
            className="w-full px-6 py-3 bg-transparent text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center font-medium"
          >
            {copied ? t('copied') : t('copyLink')}
          </button>
        )}
      </div>

      {/* Desktop: Individual Share Buttons */}
      <div className="hidden md:flex flex-row gap-3">
        <button
          onClick={shareOnTwitter}
          className="flex-1 px-6 py-3 bg-transparent text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center font-medium"
        >
          X
        </button>

        <button
          onClick={shareOnLinkedIn}
          className="flex-1 px-6 py-3 bg-transparent text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center font-medium"
        >
          LinkedIn
        </button>

        <button
          onClick={handleCopyLink}
          className="flex-1 px-6 py-3 bg-transparent text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center font-medium"
        >
          {copied ? t('copied') : t('copyLink')}
        </button>
      </div>
    </div>
  )
}
