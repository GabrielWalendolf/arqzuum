'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AboutProps {
  id?: string
}

export default function About({ id }: AboutProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id={id}
      ref={ref}
      className="py-16 px-6"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Sobre Nós
        </motion.h2>

        <motion.p
          className="text-base leading-relaxed max-w-3xl"
          style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
        >
          A ARQZUUM é um estúdio de arquitetura contemporânea que combina criatividade, funcionalidade e inovação em cada projeto. A empresa oferece abordagem integrada conectando seus três pilares para criar soluções harmoniosas, operando com a crença de que espaços bem projetados elevam a qualidade de vida.
        </motion.p>
      </div>
    </section>
  )
}
