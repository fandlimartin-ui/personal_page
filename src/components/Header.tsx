import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#stack' },
  { label: 'Experience', href: '#experience' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="page-wrap header-inner">
        <a className="wordmark" href="#home" aria-label="Martin Fandli, home">
          <span className="wordmark-mark" aria-hidden="true">MF</span>
          <span>Martin Fandli <span className="wordmark-role">/ Fabric Data Engineer</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
        <nav
          className={`header-nav${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="header-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header