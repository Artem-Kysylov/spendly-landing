'use client'
import { motion } from 'framer-motion'
import { fadeUp, fadeUpDelayed, viewportDefault, containerStagger } from '@/components/utils/motion'
import WaitlistForm from '@/components/sections/WaitlistForm'

const Cta = () => {
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

          <motion.div
            className="w-full flex flex-col items-center gap-3"
            variants={fadeUpDelayed(0.1)}
          >
            <WaitlistForm
              buttonLabel="Join the Waitlist"
              inputWidth="sm:w-[320px] sm:max-w-[320px]"
              buttonWidth="sm:w-[260px] sm:max-w-[260px]"
            />
          </motion.div>

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
