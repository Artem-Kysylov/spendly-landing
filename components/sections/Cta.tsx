'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeUpDelayed, viewportDefault, containerStagger } from '@/components/utils/motion'
import { ArrowRight, Loader2 } from 'lucide-react'

const Cta = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      await fetch('https://formspree.io/f/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="mt-[120px] mb-[120px]" id="final-cta">
      <div className="landing__container">
        <motion.div
          className="flex flex-col items-center gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={containerStagger(0.08)}
        >
          <motion.h2
            className="text-[40px] md:text-[50px] font-bold text-foreground text-center leading-tight tracking-tight max-w-2xl"
            variants={fadeUp(0)}
          >
            Start managing your money smarter — today.
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[600px] flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            variants={fadeUpDelayed(0.1)}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-[54px] w-full shrink-0 rounded-full border border-border bg-white px-6 text-base text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 sm:w-[320px] sm:max-w-[320px]"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="flex h-[54px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-semibold tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-60 sm:w-[260px] sm:max-w-[260px] whitespace-nowrap"
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : status === 'success' ? (
                "You're on the list ✓"
              ) : (
                <>
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>

          {status === 'error' && (
            <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
          )}

          <motion.span
            className="text-center text-[13px] text-muted-foreground"
            variants={fadeUp(0.15)}
          >
            Free forever · No ads · Limited early-access discount
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}

export default Cta
