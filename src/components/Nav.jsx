import { useCallback, useRef, useState } from 'react'
import { nav } from '../data/nav.js'
import { useMenuKeys } from '../hooks/useMenuKeys.js'
import '../styles/nav.css'

// Sticky top bar. On a phone the links hide behind a Menu button; from 900px up they sit in a row.
// The keyboard rules for the open menu live in useMenuKeys.
export default function Nav() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const close = useCallback(() => setOpen(false), [])

  useMenuKeys({ open, close, toggleRef, panelRef })

  return (
    <header className="nav">
      <div className="container nav__bar">
        <a className="nav__brand" href="#top">
          {nav.brand}
          <span className="nav__dot" aria-hidden="true">
            .
          </span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="site-menu" ref={panelRef} className={open ? 'nav__menu is-open' : 'nav__menu'} aria-label="Main">
          <ul className="nav__list">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
