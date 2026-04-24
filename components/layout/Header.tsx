'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
  }, [isDark])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'var(--header-bg)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-widest"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text-light)' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ARQZUUM
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium tracking-wider transition-colors duration-200 hover:opacity-70 cursor-pointer"
              style={{
                fontFamily: 'var(--font-josefin)',
                color: 'var(--text-light)',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full transition-colors duration-200 hover:opacity-70 cursor-pointer"
            style={{ color: 'var(--text-light)' }}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 cursor-pointer"
            style={{ color: 'var(--text-light)' }}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 cursor-pointer"
            style={{ color: 'var(--text-light)' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'var(--header-bg)' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm font-medium tracking-wider py-2 border-b cursor-pointer transition-opacity hover:opacity-70"
              style={{
                fontFamily: 'var(--font-josefin)',
                color: 'var(--text-light)',
                borderColor: 'rgba(255,255,255,0.15)',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
