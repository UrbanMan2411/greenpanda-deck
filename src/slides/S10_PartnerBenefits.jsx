import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { PARTNER_BENEFITS } from '../data'

export default function S10_PartnerBenefits({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="09 · Преимущества для партнёров" tone="dark" decoration="none">
      <div className="grid grid-cols-12 gap-10 h-full">
        <div className="col-span-4 flex flex-col justify-center">
          <div className="eyebrow text-sage mb-4">Партнёрам</div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="display font-extrabold text-[clamp(34px,3.5vw,56px)] text-paper leading-tight"
          >
            Прямые условия
            <span className="text-green-300">.</span>
            <br />
            Минимум посредников.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 text-paper/75 text-[clamp(13px,1vw,16px)] leading-relaxed max-w-sm"
          >
            Контракт напрямую с производителем — без посредников между вами и линией розлива.
            Все этапы — от рецептуры до маркировки маркетплейсов — в одном контуре.
          </motion.p>

          {/* Mini KPI strip */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-xl glass-dark p-4">
              <div className="text-3xl font-extrabold text-green-300">25–45%</div>
              <div className="text-[11px] uppercase tracking-widest text-paper/60 mt-1">маржа партнёра</div>
            </div>
            <div className="rounded-xl glass-dark p-4">
              <div className="text-3xl font-extrabold text-green-300">5–10 дн.</div>
              <div className="text-[11px] uppercase tracking-widest text-paper/60 mt-1">отгрузка после оплаты</div>
            </div>
          </div>
        </div>

        <div className="col-span-8 grid grid-cols-2 gap-3 self-center">
          {PARTNER_BENEFITS.map((b, i) => {
            const Icon = Icons[b.icon] || Icons.Sparkles
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                className="rounded-2xl glass-dark p-5 flex gap-4 items-start"
              >
                <div className="w-11 h-11 rounded-lg bg-green-500/20 text-green-300 flex items-center justify-center shrink-0">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <div className="font-bold text-paper text-[15px]">{b.title}</div>
                  <div className="text-[13px] text-paper/75 mt-1 leading-relaxed">{b.text}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SlideShell>
  )
}
