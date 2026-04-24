'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Card3D from '@/components/ui/Card3D'
import { projects } from '@/data/projects'

const categoryLabel: Record<string, string> = {
  arquitetura: 'Arquitetura',
  urbanismo: 'Urbanismo',
  interiores: 'Design de Interiores',
}

interface PortfolioProps {
  id?: string
}

export default function Portfolio({ id }: PortfolioProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id={id}
      ref={ref}
      className="py-24 px-6"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Portfólio
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1), ease: 'easeOut' }}
            >
              <Card3D className="rounded-lg overflow-hidden">
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ background: 'var(--card-bg)' }}
                >
                  <div className="relative w-full h-56">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{
                          background: 'var(--primary)',
                          color: 'var(--accent-dark)',
                          fontFamily: 'var(--font-josefin)',
                        }}
                      >
                        {categoryLabel[project.category]}
                      </span>
                      <span
                        className="text-sm opacity-60"
                        style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text)' }}
                      >
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
