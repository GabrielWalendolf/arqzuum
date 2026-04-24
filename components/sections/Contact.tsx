'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

interface ContactProps {
  id?: string
}

const inputClass = `w-full rounded-lg px-4 py-3 text-sm outline-none transition-all`

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

  const labelStyle = {
    fontFamily: 'var(--font-josefin)',
    color: 'var(--text)',
  }

  return (
    <section
      id={id}
      ref={ref}
      className="py-16 px-6"
      style={{ background: 'var(--card-bg)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Contato
        </motion.h2>

        <div className="grid gap-16 lg:grid-cols-5">
          <motion.aside
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text)' }}
            >
              Tem um projeto em mente ou quer conversar sobre uma ideia? Entre em contato — respondemos em breve.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                { icon: Mail, label: 'contato@arqzuum.com' },
                { icon: Phone, label: '(47) 98765-4321' },
                { icon: MapPin, label: 'Itapoá, SC' },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-[10px]"
                    style={{ background: 'var(--accent)', color: '#fff' }}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text)' }}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.aside>

          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 flex flex-col gap-5"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest" style={labelStyle}>
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest" style={labelStyle}>
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest" style={labelStyle}>
                Telefone
              </label>
              <input
                type="text"
                name="telefone"
                placeholder="(00) 00000-0000"
                value={form.telefone}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest" style={labelStyle}>
                Mensagem
              </label>
              <textarea
                name="mensagem"
                placeholder="Conte sobre seu projeto..."
                rows={6}
                value={form.mensagem}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              className="w-fit px-5 py-2.5 rounded-[10px] text-sm font-semibold tracking-widest uppercase cursor-pointer transition-opacity duration-200 hover:opacity-90"
              style={{
                fontFamily: 'var(--font-josefin)',
                color: '#fff',
                background: 'var(--accent)',
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
