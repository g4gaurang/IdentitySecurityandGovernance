import { useEffect, useId, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#overview', label: 'Overview' },
  { href: '#identity-graph', label: 'Identity Graph' },
  { href: '#access-risk', label: 'Access Risk' },
  { href: '#governance', label: 'Governance' },
  { href: '#remediation', label: 'Remediation' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#analytics', label: 'Analytics' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" onClick={close}>
          <svg className="brand__mark" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="12" fill="#12324a" />
            <circle cx="22" cy="24" r="7" fill="none" stroke="#3DB9E0" strokeWidth="3" />
            <circle cx="42" cy="24" r="7" fill="none" stroke="#6B8FCE" strokeWidth="3" />
            <circle cx="32" cy="42" r="7" fill="none" stroke="#2EC4B6" strokeWidth="3" />
          </svg>
          <span className="brand__text">MTX Identity Security &amp; Governance</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <nav id={menuId} className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="btn btn--primary btn--small nav__cta" href="#contact" onClick={close}>
            Request a Demo
          </a>
        </nav>
      </div>
    </header>
  )
}
