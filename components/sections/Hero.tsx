'use client'
import { motion } from 'framer-motion'
import { fadeUp, fadeUpDelayed, fadeUpScale, containerStagger, viewportDefault } from '@/components/utils/motion'
import WaitlistForm from '@/components/sections/WaitlistForm'

const Hero = () => {
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

          <motion.div
            className="mt-2 w-full flex flex-col items-center gap-3"
            variants={fadeUpDelayed(0.1)}
          >
            <WaitlistForm
              buttonLabel="Join the iOS Waitlist"
              inputWidth="sm:w-[320px] sm:max-w-[320px]"
              buttonWidth="sm:w-[260px] sm:max-w-[260px]"
            />
          </motion.div>

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
