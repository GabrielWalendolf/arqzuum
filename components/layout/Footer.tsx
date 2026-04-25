const socialLinks = [
  { label: 'Instagram', icon: '/icons/instagram.svg', href: 'https://instagram.com' },
  { label: 'Behance', icon: '/icons/behance.svg', href: 'https://behance.net' },
  { label: 'LinkedIn', icon: '/icons/linkedin.svg', href: 'https://linkedin.com' },
  { label: 'Pinterest', icon: '/icons/pinterest.svg', href: 'https://pinterest.com' },
]

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: 'var(--accent-dark)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex flex-col gap-1">
          <span
            className="text-xl font-bold tracking-widest"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text-light)' }}
          >
            ARQZUUM
          </span>
          <span
            className="text-xs opacity-60"
            style={{ fontFamily: 'var(--font-josefin)', color: 'var(--text-light)' }}
          >
            © {new Date().getFullYear()} ARQZUUM. Todos os direitos reservados.
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-opacity duration-200 hover:opacity-60"
            >
              <img
                src={icon}
                alt={label}
                width={18}
                height={18}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
