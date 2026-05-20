import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { PORTFOLIO } from '../data'

export default function S08_Portfolio({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="07 · Ассортиментный портфель" decoration="light">
      <SlideHead
        eyebrow="Портфель"
        title={<>Шесть направлений, <span className="text-green-700">один бренд — весь дом и B2B</span></>}
        subtitle={PORTFOLIO.intro}
      />

      <div className="mt-10 grid grid-cols-3 gap-4">
        {PORTFOLIO.categories.map((p, i) => {
          const Icon = Icons[p.icon] || Icons.Sparkles
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
              className="rounded-2xl bg-white/70 border border-line p-5 flex gap-4 items-center group hover:bg-white transition"
            >
              <div className="w-14 h-14 rounded-xl bg-green-50 text-green-700 flex items-center justify-center shrink-0">
                <Icon size={26} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-ink-900 text-[15px] leading-tight">{p.name}</div>
                <div className="text-[12px] text-ink-700/70 mt-1">{p.vol}</div>
                <div className="text-[10px] uppercase tracking-widest font-mono text-muted mt-2">Арт. {p.sku}</div>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-[10px] uppercase tracking-widest font-semibold text-muted">Рост категории</div>
                <div className="text-green-700 font-bold text-base mt-0.5">{p.growth}</div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-[5.5%] left-[5.5%] right-[5.5%] grid grid-cols-3 gap-4"
      >
        {[
          { v: '6+',  t: 'базовых SKU Green Panda' },
          { v: '3',   t: 'формата фасовки: 0,75 · 1,5 · 5 л' },
          { v: '320+', t: 'SKU в общем каталоге производителя' },
        ].map((s, i) => (
          <div key={i} className="rounded-xl bg-green-900 text-paper p-3 px-5 flex items-baseline gap-4">
            <span className="text-2xl font-extrabold text-green-300">{s.v}</span>
            <span className="text-[12px] text-paper/80">{s.t}</span>
          </div>
        ))}
      </motion.div>
    </SlideShell>
  )
}
