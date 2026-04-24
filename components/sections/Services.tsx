'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, MapPin, Sofa } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Arquitetura',
    description: 'Projetos residenciais e comerciais completos, desde o conceito até a execução.',
  },
  {
    icon: MapPin,
    title: 'Urbanismo',
    description: 'Planejamento urbano e soluções inteligentes para cidades mais humanas.',
  },
  {
    icon: Sofa,
    title: 'Design de Interiores',
    description: 'Criação de ambientes funcionais e esteticamente impressionantes.',
  },
]

interface ServicesProps {
  id?: string
}

export default function Services({ id }: ServicesProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id={id}
      ref={ref}
      className="py-24 px-6"
      style={{ background: 'var(--card-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Nossos Serviços
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="p-8 rounded-lg flex flex-col items-center text-center gap-4"
              style={{ background: 'var(--bg)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1), ease: 'easeOut' }}
            >
              <div
                className="p-4 rounded-full"
                style={{ background: 'var(--primary)', color: 'var(--accent-dark)' }}
              >
                <service.icon size={28} />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text)' }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
