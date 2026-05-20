import React from 'react'
import { motion } from 'framer-motion'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { POSITIONING } from '../data'

export default function S05_Positioning({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="04 · Позиционирование">
      <SlideHead
        eyebrow="Позиционирование"
        title={<>Сегмент <span className="text-green-700">«комфорт»</span> — между масс-маркетом и премиумом</>}
        subtitle={POSITIONING.statement}
      />

      <div className="mt-8 grid grid-cols-12 gap-5">
        {/* 4 pillars */}
        <div className="col-span-12 grid grid-cols-4 gap-3">
          {POSITIONING.pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              className="rounded-2xl bg-paper2/80 border border-line p-5 flex flex-col"
            >
              <div className="text-[32px] font-extrabold tracking-tight text-green-300">{p.num}</div>
              <div className="mt-2 font-bold text-ink-900 text-[14px]">{p.title}</div>
              <div className="mt-2 text-[12px] text-ink-700 leading-relaxed">{p.text}</div>
            </motion.div>
          ))}
        </div>

        {/* Comfort segment scale */}
        <div className="col-span-12 mt-3">
          <div className="eyebrow mb-3">Сегментация</div>
          <div className="grid grid-cols-3 gap-3">
            {POSITIONING.segments.map((s, i) => {
              const isAccent = s.tone === 'accent'
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                  className={`rounded-2xl p-5 flex flex-col gap-2 border ${
                    isAccent
                      ? 'bg-green-900 text-paper border-green-700 shadow-xl shadow-green-900/25'
                      : 'bg-white/55 text-ink-900 border-line'
                  }`}
                >
                  <div className={`eyebrow ${isAccent ? 'text-sage' : 'text-ink-700/55'}`}>{s.price}</div>
                  <div className={`font-extrabold text-[16px] leading-tight ${isAccent ? 'text-paper' : 'text-ink-900'}`}>
                    {s.tier}
                  </div>
                  <div className={`text-[12.5px] leading-relaxed ${isAccent ? 'text-paper/85' : 'text-ink-700/85'}`}>
                    {s.what}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
