import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface WaitlistCtaProps {
  children: React.ReactNode
}

export default function WaitlistCta({ children }: WaitlistCtaProps) {
  return (
    <Link
      href="/#hero"
      className="inline-flex items-center gap-2 h-[48px] px-6 rounded-lg bg-primary text-primary-foreground text-[15px] font-semibold tracking-wide shadow-sm transition-colors hover:bg-primary/90 no-underline"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}