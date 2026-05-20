import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SlideShell, SlideHead } from '../components/SlideShell'
import { CHANNELS } from '../data'

export default function S07_Channels({ num, total }) {
  return (
    <SlideShell num={num} total={total} eyebrow="06 · Каналы продаж" decoration="light">
      <SlideHead
        eyebrow="Каналы продаж"
        title={<>Маркетплейсы — <span className="text-green-700">основной драйвер</span> новых брендов в РФ</>}
        subtitle="Доля онлайн-продаж бытовой химии за 3 года выросла ×2,4. У локального производителя со своим контентом и стабильным наличием — конкурентное преимущество перед импортом."
      />

      <div className="mt-10 grid grid-cols-12 gap-5">
        {CHANNELS.map((c, i) => {
          const Icon = Icons[c.icon] || Icons.Boxes
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className={`col-span-${i === 0 ? 6 : i === 1 ? 6 : 4} rounded-2xl border border-line bg-white/65 p-6 flex flex-col gap-3`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-green-700 text-paper flex items-center justify-center">
                  <Icon size={22} strokeWidth={2.1} />
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-widest font-semibold text-muted">Доля</div>
                  <div className="text-[clamp(22px,2.2vw,32px)] font-extrabold text-green-700 leading-none mt-1">{c.share}</div>
                </div>
              </div>
              <div className="font-bold text-ink-900 text-[17px]">{c.name}</div>
              <div className="text-[13px] text-ink-700/85 leading-relaxed">{c.note}</div>
              {/* progress bar by parsed share max */}
              <ChannelBar share={c.share} />
            </motion.div>
          )
        })}
      </div>
    </SlideShell>
  )
}

function ChannelBar({ share }) {
  const m = share.match(/(\d+)/g)
  const pct = m ? Number(m[m.length - 1]) : 8
  return (
    <div className="mt-1 h-1.5 rounded-full bg-green-900/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }} animate={{ width: `${pct}%` }}
        transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
        className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-700"
      />
    </div>
  )
}
