import { motion } from 'framer-motion'
import { useState } from 'react'

// Tailwind color → rgba conversions, with opacity variants
const COLOR_VARIANTS = {
  primary: {
    border: ['rgba(16,185,129,0.6)', 'rgba(34,211,238,0.5)', 'rgba(71,85,105,0.3)'],
    gradient: 'rgba(16,185,129,0.3)',
  },
  secondary: {
    border: ['rgba(139,92,246,0.6)', 'rgba(232,121,249,0.5)', 'rgba(71,85,105,0.3)'],
    gradient: 'rgba(139,92,246,0.3)',
  },
  tertiary: {
    border: ['rgba(249,115,22,0.6)', 'rgba(251,191,36,0.5)', 'rgba(71,85,105,0.3)'],
    gradient: 'rgba(249,115,22,0.3)',
  },
  quaternary: {
    border: ['rgba(168,85,247,0.6)', 'rgba(244,114,182,0.5)', 'rgba(71,85,105,0.3)'],
    gradient: 'rgba(168,85,247,0.3)',
  },
  quinary: {
    border: ['rgba(239,68,68,0.6)', 'rgba(251,113,133,0.5)', 'rgba(71,85,105,0.3)'],
    gradient: 'rgba(239,68,68,0.3)',
  },
  senary: {
    border: ['rgba(59,130,246,0.6)', 'rgba(56,189,248,0.5)', 'rgba(71,85,105,0.3)'],
    gradient: 'rgba(59,130,246,0.3)',
  },
  septenary: {
    border: ['rgba(107,114,128,0.6)', 'rgba(156,163,175,0.5)', 'rgba(71,85,105,0.3)'],
    gradient: 'rgba(107,114,128,0.3)',
  },
  amber: {
    border: ['rgba(245,158,11,0.7)', 'rgba(251,191,36,0.5)', 'rgba(71,85,105,0.3)'],
    gradient: 'rgba(245,158,11,0.3)',
  },
}

function AnimatedGrid() {
  return (
    <motion.div
      style={{
        position: 'absolute', inset: 0,
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 30%, black)',
        maskImage: 'radial-gradient(ellipse at center, transparent 30%, black)',
      }}
      animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    >
      <div style={{
        height: '100%', width: '100%', opacity: 0.2,
        backgroundImage: 'repeating-linear-gradient(100deg, #64748B 0%, #64748B 1px, transparent 1px, transparent 4%)',
      }} />
    </motion.div>
  )
}

export function BackgroundCircles({
  title = 'Background Circles',
  description = 'Optional Description',
  style = {},
  variant = 'amber',
  showText = true,
}) {
  const v = COLOR_VARIANTS[variant] || COLOR_VARIANTS.amber

  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      background: 'transparent',
      zIndex: 0,
      ...style,
    }}>
      <AnimatedGrid />

      {/* 3 concentric rotating circles */}
      <motion.div style={{ position: 'absolute', width: 760, height: 760 }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              borderRadius: '50%',
              border: `2px solid ${v.border[i]}`,
              background: `radial-gradient(ellipse at center, ${v.gradient} 0%, transparent 70%)`,
              mixBlendMode: 'screen',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05 + i * 0.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>

      {/* Optional centered text */}
      {showText && (
        <motion.div
          style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 700,
            letterSpacing: '-2px',
            background: 'linear-gradient(to bottom, #fff 0%, rgba(255,255,255,0.6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>{title}</h1>
          <motion.p
            style={{ marginTop: 24, fontSize: 18, color: 'rgba(255,255,255,0.55)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >{description}</motion.p>
        </motion.div>
      )}

      {/* Radial glow overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        WebkitMaskImage: 'radial-gradient(90% 60% at 50% 50%, #000 40%, transparent)',
        maskImage: 'radial-gradient(90% 60% at 50% 50%, #000 40%, transparent)',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at center, ${v.gradient} 0%, transparent 70%)`,
          filter: 'blur(120px)',
        }} />
      </div>
    </div>
  )
}
