import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { QUALITY } from '../data'

export default function S09_Quality({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="08 · Контроль качества и безопасность" decoration="light">
      <SlideHead
        eyebrow="Качество и безопасность"
        title={<>Полный пакет документов и <span className="text-green-700">собственная лаборатория</span></>}
        subtitle="Контроль рецептуры на каждом замесе. Документы готовы для входа в матрицу сети, маркетплейса или тендера."
      />

      <div className="mt-9 grid grid-cols-12 gap-6">
        {/* Cert pills */}
        <div className="col-span-7">
          <div className="grid grid-cols-2 gap-3">
            {QUALITY.certs.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
                className="rounded-2xl border border-line bg-white/65 p-5 flex gap-4 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-green-700 text-paper flex items-center justify-center font-extrabold text-[15px] shrink-0 tracking-wider">
                  {c.code}
                </div>
                <div>
                  <div className="font-bold text-ink-900 text-[14px] leading-tight">{c.title}</div>
                  <div className="text-[12.5px] text-ink-700/85 mt-1 leading-relaxed">{c.body}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality pillars */}
        <div className="col-span-5 flex flex-col gap-3">
          {QUALITY.pillars.map((p, i) => {
            const Icon = Icons[p.icon] || Icons.Sparkles
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.45 + i * 0.07 }}
                className="rounded-xl bg-paper2/80 border border-line/70 p-4 flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0">
                  <Icon size={20} strokeWidth={2.1} />
                </div>
                <div>
                  <div className="font-bold text-ink-900 text-[14px]">{p.title}</div>
                  <div className="text-[12.5px] text-ink-700/85 mt-0.5 leading-relaxed">{p.text}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SlideShell>
  )
}
