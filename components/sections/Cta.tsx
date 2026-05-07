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
            className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            variants={fadeUpDelayed(0.1)}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-[54px] px-5 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="h-[54px] px-7 rounded-lg bg-primary text-primary-foreground font-semibold tracking-wide text-base flex items-center justify-center gap-2 shadow-sm hover:bg-primary/90 transition-colors disabled:opacity-60 whitespace-nowrap"
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
