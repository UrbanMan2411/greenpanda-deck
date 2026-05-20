import React from 'react'
import { motion } from 'framer-motion'
import { SlideShell } from '../components/SlideShell'
import { SunOrb } from '../components/Decoration'
import { BRAND } from '../data'

export default function S01_Title({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="Презентация для партнёров" decoration="bamboo" hideChrome={false}>
      <SunOrb className="top-[6%] right-[8%] w-[280px] h-[280px]" />

      <div className="relative h-full w-full grid grid-cols-12 gap-8 items-center">
        <div className="col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="eyebrow text-green-700">Бренд эко-бытовой химии · с 2015 года</div>
            <h1 className="display font-extrabold text-[clamp(72px,9vw,170px)] mt-6 text-green-900 leading-[0.92]">
              GREEN
              <br />
              <span className="text-green-700">PANDA</span>
            </h1>
            <p className="mt-6 text-[clamp(20px,1.7vw,32px)] font-light text-ink-700 italic" style={{ fontFamily: 'Georgia, serif' }}>
              {BRAND.tagline}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="col-span-3 flex flex-col gap-3 justify-self-end self-end"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        >
          <div className="text-right">
            <div className="eyebrow text-green-700/70">Производитель</div>
            <div className="text-ink-900 font-bold text-lg mt-1">{BRAND.producer}</div>
            <div className="text-ink-700/70 text-sm mt-1">{BRAND.address}</div>
          </div>
          <div className="hairline my-2" />
          <div className="text-right text-[12px] tracking-[0.18em] uppercase font-semibold text-green-700">
            Премиум · Эко · Российское производство
          </div>
        </motion.div>
      </div>
    </SlideShell>
  )
}
