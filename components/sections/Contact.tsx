'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

interface ContactProps {
  id?: string
}

export default function Contact({ id }: ContactProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const inputStyle = {
    background: 'var(--bg)',
    color: 'var(--text)',
    border: '1px solid var(--input-border)',
    fontFamily: 'var(--font-josefin)',
  }

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
          Contato
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
            >
              Entre em contato
            </h3>
            <div className="flex flex-col gap-6">
              {[
                { icon: Mail, label: 'contato@arqzuum.com' },
                { icon: Phone, label: '(47) 98765-4321' },
                { icon: MapPin, label: 'Itapoá, SC' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ background: 'var(--accent)', color: '#fff' }}
                  >
                    <Icon size={18} />
                  </div>
                  <span
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            {(['nome', 'email', 'telefone'] as const).map((field) => (
              <input
                key={field}
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md outline-none text-sm transition-colors duration-200 focus:ring-2"
                style={{
                  ...inputStyle,
                  // @ts-expect-error css custom property
                  '--tw-ring-color': 'var(--accent)',
                }}
              />
            ))}
            <textarea
              name="mensagem"
              placeholder="Mensagem"
              rows={5}
              value={form.mensagem}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md outline-none text-sm resize-none transition-colors duration-200 focus:ring-2"
              style={inputStyle}
            />
            <button
              type="submit"
              className="px-8 py-4 text-sm font-semibold tracking-widest uppercase cursor-pointer transition-all duration-300"
              style={{
                fontFamily: 'var(--font-josefin)',
                color: '#fff',
                background: 'var(--accent)',
                border: '2px solid var(--accent)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--btn-hover)'
                e.currentTarget.style.borderColor = 'var(--btn-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
            >
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
