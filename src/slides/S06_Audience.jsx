import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { AUDIENCE, AUDIENCE_MAIN } from '../data'

export default function S06_Audience({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="05 · Целевая аудитория">
      <SlideHead
        eyebrow="Кому подходит"
        title={<>Шесть профилей B2B-партнёров — <span className="text-green-700">от полки до тендера</span></>}
      />

      <div className="mt-8 grid grid-cols-3 gap-3">
        {AUDIENCE.map((a, i) => {
          const Icon = Icons[a.icon] || Icons.Users
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="relative rounded-2xl bg-white/65 border border-line p-5 flex flex-col gap-2 overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-green-50" aria-hidden />
              <div className="relative w-10 h-10 rounded-xl bg-green-700 text-paper flex items-center justify-center shadow-md shadow-green-900/20">
                <Icon size={20} strokeWidth={2.1} />
              </div>
              <div className="relative font-bold text-ink-900 text-[15px] mt-1">{a.title}</div>
              <div className="relative text-[12px] text-ink-700/85 leading-relaxed">{a.desc}</div>
            </motion.div>
          )
        })}
      </div>

      {/* MAIN takeaway — bigger, prominent footer band */}
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-[5%] left-[5.5%] right-[5.5%] rounded-2xl bg-green-900 text-paper px-8 py-6 flex items-start gap-6 shadow-2xl shadow-green-900/30"
      >
        <div className="shrink-0 flex flex-col items-center justify-center w-20">
          <div className="eyebrow text-sage">Главное</div>
          <div className="mt-1 text-[34px] leading-none font-extrabold text-green-300">★</div>
        </div>
        <div className="flex-1 text-[clamp(14px,1.15vw,18px)] leading-relaxed text-paper/95">
          {AUDIENCE_MAIN}
        </div>
      </motion.div>
    </SlideShell>
  )
}
