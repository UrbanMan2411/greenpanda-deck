import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { AUDIENCE } from '../data'

export default function S06_Audience({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="05 · Целевая аудитория" decoration="light">
      <SlideHead
        eyebrow="Кому подходит"
        title={<>Шесть профилей B2B-партнёров — <span className="text-green-700">от полки до тендера</span></>}
        subtitle="Ассортимент Green Panda собран так, чтобы один контракт закрывал сразу несколько категорий: розница, онлайн, профессиональный клининг и HoReCa получают одинаково надёжный продукт от одного производителя."
      />

      <div className="mt-10 grid grid-cols-3 gap-4">
        {AUDIENCE.map((a, i) => {
          const Icon = Icons[a.icon] || Icons.Users
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="relative rounded-2xl bg-white/65 border border-line p-6 flex flex-col gap-3 overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-green-50" aria-hidden />
              <div className="relative w-12 h-12 rounded-xl bg-green-700 text-paper flex items-center justify-center shadow-md shadow-green-900/20">
                <Icon size={22} strokeWidth={2.1} />
              </div>
              <div className="relative font-bold text-ink-900 text-[17px]">{a.title}</div>
              <div className="relative text-[13px] text-ink-700/85 leading-relaxed">{a.desc}</div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-[6%] left-[5.5%] right-[5.5%] rounded-xl bg-green-900 text-paper px-6 py-3 flex items-center gap-6 text-[13px]"
      >
        <span className="eyebrow text-sage">Главное</span>
        <span className="opacity-90">
          Профессиональный B2B-сегмент в РФ растёт двузначно — клининг +11% г/г, HoReCa возвращает докризисные объёмы, маркетплейсы дают ×2,4 оборота за 3 года.
        </span>
      </motion.div>
    </SlideShell>
  )
}
