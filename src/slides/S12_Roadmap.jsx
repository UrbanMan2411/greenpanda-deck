import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { ROADMAP } from '../data'

export default function S12_Roadmap({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="11 · Планы развития бренда" decoration="light">
      <SlideHead
        eyebrow="Roadmap 2026 — 2028"
        title={<>Двукратный рост — <span className="text-green-700">по плану</span>, не по случаю</>}
        subtitle="Стратегия развития бренда на трёхлетний горизонт: усиление присутствия, расширение портфеля, география, производственный масштаб."
      />

      <div className="mt-10 relative">
        {/* Horizontal timeline line */}
        <div className="absolute top-[34px] left-[3%] right-[3%] h-0.5 bg-gradient-to-r from-green-700/0 via-green-700/60 to-green-700/0" />
        <div className="grid grid-cols-4 gap-3">
          {ROADMAP.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="flex flex-col"
            >
              {/* Period chip */}
              <div className="self-center px-4 py-2 rounded-full bg-green-700 text-paper text-[12px] font-bold tracking-widest uppercase shadow-md shadow-green-900/15 z-10">
                {r.period}
              </div>
              <div className="self-center w-px h-6 bg-green-700/40" />
              {/* Card */}
              <div className="rounded-2xl bg-white/70 border border-line p-5 flex flex-col gap-3">
                <div className="font-bold text-ink-900 text-[16px]">{r.title}</div>
                <ul className="flex flex-col gap-2">
                  {r.items.map((it, j) => (
                    <li key={j} className="flex gap-2 items-start text-[12.5px] text-ink-700 leading-snug">
                      <Sparkles size={13} strokeWidth={2.4} className="text-green-600 mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Big closing stat */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-[5.5%] left-[5.5%] right-[5.5%] rounded-2xl bg-green-900 text-paper px-6 py-4 flex items-center gap-6"
      >
        <div className="text-[clamp(28px,3vw,42px)] font-extrabold text-green-300 leading-none">×2</div>
        <div className="text-[14px] text-paper/85 leading-snug">
          Цель — удвоить оборот за 3 года: рост за счёт маркетплейсов, расширения портфеля и выхода в новые регионы.
        </div>
      </motion.div>
    </SlideShell>
  )
}
