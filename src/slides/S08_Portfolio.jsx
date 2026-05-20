import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { PORTFOLIO } from '../data'

// '90505 / 90575' → '90505'
const skuId = (sku) => sku.split(/[\s/]/)[0]

export default function S08_Portfolio({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="07 · Ассортиментный портфель">
      <SlideHead
        eyebrow="Портфель"
        title={<>Основные <span className="text-green-700">SKU линейки</span> Green Panda</>}
        subtitle={PORTFOLIO.intro}
      />

      <div className="mt-6 grid grid-cols-3 gap-4">
        {PORTFOLIO.categories.map((p, i) => {
          const Icon = Icons[p.icon] || Icons.Sparkles
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
              className="rounded-2xl bg-white/80 border border-line p-3 flex gap-3 items-stretch"
            >
              <div className="w-20 h-28 rounded-lg overflow-hidden shrink-0 bg-paper border border-line/50">
                <img
                  src={`/sku/${skuId(p.sku)}.jpg`}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fb = e.currentTarget.parentElement?.querySelector('[data-fb]')
                    if (fb) fb.style.display = 'flex'
                  }}
                />
                <div
                  data-fb
                  className="w-full h-full items-center justify-center bg-green-50 text-green-700"
                  style={{ display: 'none' }}
                >
                  <Icon size={28} strokeWidth={2} />
                </div>
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="font-bold text-ink-900 text-[14px] leading-tight">{p.name}</div>
                <div className="text-[11.5px] text-ink-700/70 mt-1">{p.vol}</div>
                <div className="text-[10px] uppercase tracking-widest font-mono text-muted mt-1.5">Арт. {p.sku}</div>
                <div className="mt-auto pt-2 text-[10px] uppercase tracking-widest font-semibold text-muted">
                  Рост: <span className="text-green-700 font-bold tracking-normal">{p.growth}</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SlideShell>
  )
}
