import { useEffect } from 'react'

// Keyboard and pointer rules for the mobile menu while it is open:
//  - Escape closes it and gives focus back to the Menu button.
//  - Tab and Shift+Tab wrap around inside the header, so focus cannot wander to the page behind it.
//  - A click outside the header closes it.
//  - Growing the window to laptop size closes it (the Menu button is hidden there).
export function useMenuKeys({ open, close, toggleRef, themeRef, panelRef }) {
  useEffect(() => {
    if (!open) return undefined

    // Everything that can take focus inside the open menu, in page order: the theme button, the Menu button, then the links.
    const focusable = () => [themeRef.current, toggleRef.current, ...panelRef.current.querySelectorAll('a[href]')].filter(Boolean)

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        close()
        toggleRef.current.focus()
        return
      }
      if (event.key !== 'Tab') return

      const items = focusable()
      const first = items[0]
      const last = items[items.length - 1]
      const inside = items.includes(document.activeElement)

      if (!inside) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    function onPointerDown(event) {
      const header = toggleRef.current.closest('header')
      if (header && !header.contains(event.target)) close()
    }

    const laptop = window.matchMedia('(min-width: 900px)')
    function onResize(event) {
      if (event.matches) close()
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    laptop.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      laptop.removeEventListener('change', onResize)
    }
  }, [open, close, toggleRef, themeRef, panelRef])
}
