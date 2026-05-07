'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, fadeUpScale, viewportDefault, containerStagger } from '@/components/utils/motion'

const Founder = () => {
  /**
   * next/image кеширует оптимизированный файл по URL. При замене public/about.png
   * с тем же именем увеличьте число ниже — иначе может показываться старое изображение.
   */
  const aboutImageSrc = `/about.png?v=2`

  return (
    <section className="mt-[120px]" id="founder">
      <div className="landing__container">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-[30px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={containerStagger(0.08)}
        >
          <motion.div className="md:w-1/2" variants={fadeUp(0)}>
            <h2 className="text-[36px] md:text-[40px] font-bold text-foreground mb-[20px] leading-tight tracking-tight">
              Why I killed the web app to build something better.
            </h2>
            <p className="text-[16px] text-foreground leading-relaxed mb-4">
              The web version worked — but "fast for a website" is a compromise I was no longer
              willing to make. Every PWA limitation pulled me away from the experience I wanted
              to give you: instant, effortless, and deeply personal.
            </p>
            <p className="text-[16px] text-foreground leading-relaxed mb-4">
              Going native iOS isn't just a technical decision. It's about FaceID-level privacy,
              the Taptic Engine's satisfying feedback on every tap, and a 120Hz interface that
              feels like it belongs on your phone — because it was built only for your phone.
            </p>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Quality over quantity. One platform, done perfectly. That's the promise behind
              everything we are building this summer.
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={fadeUpScale(0.15)}
          >
            <div className="relative w-full max-w-[400px] h-[320px] sm:h-[400px]">
              <Image
                src={aboutImageSrc}
                alt="Artem - Creator of Spendly"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Founder
