import React from 'react'
import { motion } from 'framer-motion'
import { Factory, MapPin, CalendarDays, Boxes } from 'lucide-react'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { ABOUT, BRAND } from '../data'

export default function S03_About({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="02 · О компании-производителе">
      <SlideHead
        eyebrow="О производителе"
        title={<>Своё производство <span className="text-green-700">в Новороссийске</span> — от рецептуры до отгрузки</>}
      />

      <div className="mt-12 grid grid-cols-12 gap-8">
        <div className="col-span-7 flex flex-col gap-5">
          {ABOUT.body.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="text-[clamp(13px,1vw,17px)] leading-relaxed text-ink-700"
            >
              {p}
            </motion.p>
          ))}

          <div className="mt-4 grid grid-cols-2 gap-4">
            {[
              { icon: CalendarDays, label: 'Основано', val: ABOUT.founded + ' г.' },
              { icon: MapPin,       label: 'Площадка', val: ABOUT.city + ', ' + ABOUT.region },
              { icon: Factory,      label: 'Площадь',  val: '1000+ м²' },
              { icon: Boxes,        label: 'СТМ',      val: 'Производство под индивидуальные задачи' },
            ].map((it, i) => {
              const Icon = it.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.45 + i * 0.06 }}
                  className="flex items-start gap-3 p-3 rounded-xl border border-line/70 bg-white/55"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-semibold text-muted">{it.label}</div>
                    <div className="text-ink-900 font-bold mt-0.5 text-[13px]">{it.val}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="col-span-5 grid grid-cols-2 gap-3 self-center">
          {ABOUT.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="rounded-2xl bg-green-900 text-paper p-6 flex flex-col items-start"
            >
              <div className="text-[clamp(28px,3vw,48px)] font-extrabold tracking-tightest leading-none text-green-100">
                {s.v}
              </div>
              <div className="mt-3 text-[12px] leading-snug text-paper/80">{s.t}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[5%] left-[5.5%] right-[5.5%] text-[11px] tracking-widest uppercase text-ink-700/55 font-semibold flex items-center gap-6">
        <span>{BRAND.producer}</span>
        <span className="opacity-30">·</span>
        <span>ИНН {BRAND.inn}</span>
        <span className="opacity-30">·</span>
        <span>{BRAND.address}</span>
      </div>
    </SlideShell>
  )
}
