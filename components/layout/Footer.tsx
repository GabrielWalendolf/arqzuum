import { Globe, Share2, Link, ExternalLink } from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', icon: Globe, href: 'https://instagram.com' },
  { label: 'Behance', icon: ExternalLink, href: 'https://behance.net' },
  { label: 'LinkedIn', icon: Link, href: 'https://linkedin.com' },
  { label: 'Pinterest', icon: Share2, href: 'https://pinterest.com' },
]

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ background: 'var(--accent-dark)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
        <h2
          className="text-3xl font-bold tracking-widest"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text-light)' }}
        >
          ARQZUUM
        </h2>
        <p
          className="text-sm tracking-wider opacity-70"
          style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text-light)' }}
        >
          Arquitetura, Urbanismo & Design de Interiores
        </p>

        <div className="flex items-center gap-5 mt-2">
          {socialLinks.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full transition-opacity duration-200 hover:opacity-70"
              style={{ color: 'var(--text-light)' }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p
          className="text-xs opacity-50 mt-2"
          style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text-light)' }}
        >
          © 2025 ARQZUUM. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
