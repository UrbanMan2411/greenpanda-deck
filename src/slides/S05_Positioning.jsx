import React from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { POSITIONING } from '../data'

export default function S05_Positioning({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="04 · Позиционирование и УТП" decoration="light">
      <SlideHead
        eyebrow="Позиционирование"
        title={<>Премиум-эко в среднеценовом сегменте — <span className="text-green-700">формула российского производителя</span></>}
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
              <div className="text-[36px] font-extrabold tracking-tight text-green-300">{p.num}</div>
              <div className="mt-2 font-bold text-ink-900">{p.title}</div>
              <div className="mt-2 text-[13px] text-ink-700 leading-relaxed">{p.text}</div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="col-span-12 mt-3">
          <div className="eyebrow mb-3">Локальный производитель vs импорт</div>
          <div className="rounded-2xl overflow-hidden border border-line bg-white/60">
            <div className="grid grid-cols-[1fr,1.4fr,1.4fr] text-[11px] uppercase tracking-widest font-bold bg-green-900 text-paper">
              <div className="p-3 px-5">Параметр</div>
              <div className="p-3 px-5">GREEN PANDA</div>
              <div className="p-3 px-5">Импортный бренд</div>
            </div>
            {POSITIONING.vsImport.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.45 + i * 0.07 }}
                className="grid grid-cols-[1fr,1.4fr,1.4fr] items-center text-sm border-t border-line/70"
              >
                <div className="p-3 px-5 font-semibold text-ink-900">{r.label}</div>
                <div className="p-3 px-5 text-green-800 flex items-center gap-2"><Check size={16} className="text-green-600 shrink-0" /> {r.us}</div>
                <div className="p-3 px-5 text-ink-700/70 flex items-center gap-2"><X size={16} className="text-muted shrink-0" /> {r.them}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
