'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const handleCTA = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-6"
      style={{
        background: `linear-gradient(rgba(10,28,48,0.78), rgba(10,28,48,0.78)),
          url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80') center/cover no-repeat`,
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-wider"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text-light)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ARQUITETURA, URBANISMO E DESIGN DE INTERIORES
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl leading-relaxed opacity-90"
          style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text-light)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Criamos espaços que inspiram e transformam a maneira como vivemos
        </motion.p>

        <motion.button
          onClick={handleCTA}
          className="mt-2 px-10 py-4 text-sm font-semibold tracking-widest uppercase cursor-pointer transition-all duration-300"
          style={{
            fontFamily: 'var(--font-josefin)',
            color: 'var(--text-light)',
            background: 'var(--accent)',
            border: '2px solid var(--accent)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          whileHover={{ background: 'var(--btn-hover)', borderColor: 'var(--btn-hover)' }}
        >
          Inicie seu projeto
        </motion.button>
      </div>
    </section>
  )
}
