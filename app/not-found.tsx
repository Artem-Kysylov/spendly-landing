'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, fadeUpDelayed, viewportDefault } from '@/components/utils/motion'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ 
        backgroundImage: "url(/bg.png)", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
        backgroundPosition: "top center" 
      }}
    >
      <div className="max-w-md w-full text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={viewportDefault}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* 404 Title */}
          <motion.h1 
            className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-foreground mb-4 leading-none"
            variants={fadeUp(0)}
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4"
            variants={fadeUp(0.1)}
          >
            {t('subtitle')}
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground mb-8 max-w-sm mx-auto"
            variants={fadeUp(0.2)}
          >
            {t('description')}
          </motion.p>

          {/* Back to Home Button */}
          <motion.div variants={fadeUpDelayed(0.3)}>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {t('button')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
