import React from 'react'

/** Inline SVG wordmark — no external font/image dependency. */
export function BrandMark({ tone = 'dark', size = 28 }) {
  const fg = tone === 'dark' ? '#0F3D2E' : '#FBF6EC'
  const accent = '#1FB061'
  return (
    <div className="inline-flex items-center gap-3 select-none">
      {/* leaf icon */}
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="bmLeaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor={accent} />
            <stop offset="100%" stopColor="#10743F" />
          </linearGradient>
        </defs>
        <path
          d="M 4 28 C 6 14 16 4 28 4 C 28 16 22 26 8 28 Z"
          fill="url(#bmLeaf)"
        />
        <path d="M 8 28 C 14 22 22 14 28 4" stroke="#FBF6EC" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-none" style={{ color: fg }}>
        <span className="font-extrabold text-[15px] tracking-tight">GREEN PANDA</span>
        <span className="text-[10px] tracking-[0.18em] uppercase opacity-70 mt-1">Мягкая сила чистоты</span>
      </div>
    </div>
  )
}
