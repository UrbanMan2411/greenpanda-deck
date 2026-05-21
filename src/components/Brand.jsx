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
          // recolor the grey wordmark to pure white + dark halo so it
          // reads on both light (cream) and dark slides
          filter: 'brightness(0) invert(1) drop-shadow(0 1px 2px rgba(0,0,0,.5)) drop-shadow(0 0 5px rgba(0,0,0,.35))',
        }}
      />
    </div>
  )
}
