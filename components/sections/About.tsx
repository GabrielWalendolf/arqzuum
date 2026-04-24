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
      className="py-24 px-6"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Sobre Nós
        </motion.h2>

        <motion.p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          A ARQZUUM é um estúdio de arquitetura contemporânea que combina criatividade, funcionalidade e inovação em cada projeto. A empresa oferece abordagem integrada conectando seus três pilares para criar soluções harmoniosas, operando com a crença de que espaços bem projetados elevam a qualidade de vida.
        </motion.p>
      </div>
    </section>
  )
}
