'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Loader2, CheckCircle2, X } from 'lucide-react'
import confetti from 'canvas-confetti'
import { joinWaitlist } from '@/actions/waitlist'

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

interface WaitlistFormProps {
  buttonLabel?: string
  inputWidth?: string
  buttonWidth?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fireConfetti = () => {
  const softIndigo = '#5B6CFF'
  const gold = '#F5C842'

  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: [softIndigo, gold, '#ffffff'],
    scalar: 1.1,
  })

  setTimeout(() => {
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: [softIndigo, gold],
    })
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: [softIndigo, gold],
    })
  }, 200)
}

export default function WaitlistForm({
  buttonLabel = 'Join the iOS Waitlist',
  inputWidth = 'sm:w-[320px] sm:max-w-[320px]',
  buttonWidth = 'sm:w-[260px] sm:max-w-[260px]',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      if (!EMAIL_REGEX.test(email.trim())) {
        setStatus('error')
        setErrorMessage('Please enter a valid email address.')
        return
      }

      setStatus('loading')
      setErrorMessage('')

      const result = await joinWaitlist(email)

      if (result.success) {
        setStatus('success')
        setEmail('')
        fireConfetti()
        setShowModal(true)
      } else if ('duplicate' in result && result.duplicate) {
        setStatus('duplicate')
        setErrorMessage(result.error)
      } else {
        setStatus('error')
        setErrorMessage(result.error)
      }
    },
    [email]
  )

  const handleCloseModal = () => {
    setShowModal(false)
    setStatus('idle')
  }

  const isSubmitting = status === 'loading'
  const isDisabled = isSubmitting || status === 'success'

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[600px] flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        noValidate
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          placeholder="Enter your email"
          className={`h-[54px] w-full shrink-0 rounded-lg border border-border bg-white px-6 text-base text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${inputWidth}`}
        />
        <button
          type="submit"
          disabled={isDisabled}
          className={`flex h-[54px] w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-semibold tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-60 whitespace-nowrap ${buttonWidth}`}
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : status === 'success' ? (
            "You're on the list ✓"
          ) : (
            <>
              {buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {(status === 'error' || status === 'duplicate') && errorMessage && (
        <p className="text-sm text-center text-muted-foreground -mt-1">
          {errorMessage}
        </p>
      )}

      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-xl"
            onClick={handleCloseModal}
          >
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className="relative w-full max-w-[420px] rounded-[20px] bg-white p-10 shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50">
                  <CheckCircle2 className="h-9 w-9 text-green-500 stroke-[1.5]" />
                </div>
              </div>

              <h3 className="text-[26px] font-bold text-foreground tracking-tight mb-3">
                You&apos;re on the list!
              </h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Thank you for joining. We&apos;ll notify you as soon as we launch on the App Store this Summer.
              </p>

              <button
                onClick={handleCloseModal}
                className="mt-8 h-[50px] w-full rounded-lg bg-primary text-primary-foreground text-base font-semibold tracking-wide transition-colors hover:bg-primary/90"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
