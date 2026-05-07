'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeUpDelayed, fadeUpScale, containerStagger, viewportDefault } from '@/components/utils/motion'
import { ArrowRight, Loader2 } from 'lucide-react'

const Hero = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      // POST to your form service — replace URL with real endpoint
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
    <section className="mt-[120px]" id="hero">
      <div className="landing__container">
        <motion.div
          className="flex flex-col items-center gap-6 max-w-3xl mx-auto mb-[30px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={containerStagger(0.08)}
        >
          {/* Badge */}
          <motion.div variants={fadeUp(0)}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20">
              Coming to the App Store — Summer 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-[38px] sm:text-[50px] md:text-[62px] font-bold text-foreground text-center leading-[1.1] tracking-tight"
            variants={fadeUp(0)}
          >
            Financial Zen.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-[17px] md:text-[19px] text-muted-foreground text-center max-w-2xl leading-relaxed"
            variants={fadeUp(0.05)}
          >
            A native iPhone app designed to help you track spending effortlessly and stay
            financially mindful. Clarity, without the noise.
          </motion.p>

          {/* Email form */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-3 mt-2"
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
                  Join the iOS Waitlist
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>

          {status === 'error' && (
            <p className="text-sm text-destructive -mt-1">
              Something went wrong. Please try again.
            </p>
          )}

          {/* Microcopy */}
          <motion.p
            className="text-[13px] text-muted-foreground text-center"
            variants={fadeUp(0.15)}
          >
            Limited early access · Lifetime launch discount
          </motion.p>
        </motion.div>

        {/* Video preview */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
        >
          <motion.span
            variants={fadeUp(0.1)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-muted text-muted-foreground border border-border"
          >
            Early Interface Prototype
          </motion.span>
          <motion.div variants={fadeUpScale(0.15)}>
            <video
              src="/hero-screen.mp4"
              className="w-full max-w-[250px] h-auto rounded-[28px] border-[5px] border-neutral-300 shadow-xl"
              muted
              autoPlay
              loop
              playsInline
            />
          </motion.div>
          <motion.p
            variants={fadeUp(0.2)}
            className="text-[13px] text-muted-foreground text-center"
          >
            A glimpse into the effortless tracking experience coming this Summer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
