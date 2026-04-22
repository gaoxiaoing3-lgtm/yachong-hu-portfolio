import React from 'react'

type BrandMarkProps = {
  tone?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  subtitle?: string
  align?: 'left' | 'center'
}

const sizeMap = {
  sm: {
    mark: 'text-[0.92rem] sm:text-[1rem] tracking-[0.22em]',
    subtitle: 'text-[0.62rem] tracking-[0.22em]',
  },
  md: {
    mark: 'text-[1.22rem] sm:text-[1.35rem] tracking-[0.24em]',
    subtitle: 'text-[0.68rem] tracking-[0.24em]',
  },
  lg: {
    mark: 'text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] tracking-[0.2em]',
    subtitle: 'text-[0.72rem] sm:text-[0.78rem] tracking-[0.28em]',
  },
}

const BrandMark = ({
  tone = 'dark',
  size = 'md',
  subtitle,
  align = 'left',
}: BrandMarkProps) => {
  const palette =
    tone === 'dark'
      ? {
          mark: 'text-ink-900',
          accent: 'bg-primary-600',
          subtitle: 'text-ink-500',
        }
      : {
          mark: 'text-white',
          accent: 'bg-primary-300',
          subtitle: 'text-white/72',
        }

  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignClass}`}>
      <div className={`brand-wordmark ${palette.mark} ${sizeMap[size].mark}`}>
        <span>H</span>
        <span>U</span>
        <span className="brand-wordmark__y">Y</span>
        <span>A</span>
        <span>C</span>
        <span>H</span>
        <span>O</span>
        <span>N</span>
        <span className="brand-wordmark__g">G</span>
      </div>
      {subtitle ? (
        <div className={`mt-2 inline-flex items-center gap-2 font-ui uppercase ${sizeMap[size].subtitle} ${palette.subtitle}`}>
          <span className={`h-[1px] w-6 ${palette.accent}`} />
          <span>{subtitle}</span>
        </div>
      ) : null}
    </div>
  )
}

export default BrandMark
