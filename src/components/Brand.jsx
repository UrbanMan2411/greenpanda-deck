import React from 'react'

/**
 * Brand wordmark — the supplied "Green Panda" logo image, rendered white.
 * `tone` kept for API compatibility; logo is always white via filter.
 */
export function BrandMark({ tone = 'dark', size = 28 }) {
  return (
    <div className="inline-flex items-center select-none">
      <img
        src="/logo.png"
        alt="Green Panda"
        aria-label="Green Panda"
        style={{
          height: size + 14,
          width: 'auto',
          display: 'block',
          // white wordmark with a thin dark outline (stacked tight
          // drop-shadows on 4 sides) so it reads on any background
          filter: [
            'brightness(0) invert(1)',
            'drop-shadow(1px 0 0 rgba(10,38,28,.85))',
            'drop-shadow(-1px 0 0 rgba(10,38,28,.85))',
            'drop-shadow(0 1px 0 rgba(10,38,28,.85))',
            'drop-shadow(0 -1px 0 rgba(10,38,28,.85))',
            'drop-shadow(0 0 4px rgba(0,0,0,.35))',
          ].join(' '),
        }}
      />
    </div>
  )
}
