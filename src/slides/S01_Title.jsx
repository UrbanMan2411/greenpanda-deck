import React from 'react'
import { motion } from 'framer-motion'
import { SlideShell } from '../components/SlideShell'
import { BRAND } from '../data'

export default function S01_Title({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="Презентация для партнёров" hideChrome={false}>
      <div className="relative h-full w-full grid grid-cols-12 gap-6 items-center">
        {/* Left: title block */}
        <div className="col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="eyebrow text-green-700">Бренд бытовой химии</div>
            <h1 className="display font-extrabold text-[clamp(56px,7vw,128px)] mt-4 text-green-900 leading-[0.92]">
              GREEN
              <br />
              <span className="text-green-700">PANDA</span>
            </h1>
            <p className="mt-5 text-[clamp(18px,1.5vw,28px)] font-light text-ink-700">
              {BRAND.tagline}
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <div className="eyebrow text-green-700/70">Производитель</div>
            <div className="text-ink-900 font-bold text-base mt-1">{BRAND.producer}</div>
            <div className="text-ink-700/70 text-sm mt-1">{BRAND.address}</div>
          </motion.div>
        </div>

        {/* Right: panda hero */}
        <motion.div
          className="col-span-5 relative h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            src="/panda.png"
            alt="Green Panda"
            className="max-h-[86%] w-auto rounded-3xl shadow-2xl shadow-green-900/20 object-cover"
          />
        </motion.div>
      </div>
    </SlideShell>
  )
}
