import { useEffect } from 'react'

// Fades sections in once as they scroll into view.
// Safety rules: nothing is hidden unless this hook has confirmed it can
// reveal it again; reduced motion or a missing IntersectionObserver means
// everything stays visible exactly as it is without this hook.
export default function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (query.matches || !('IntersectionObserver' in window)) return

    const targets = [...document.querySelectorAll('[data-reveal]')]
    const viewportBottom = window.innerHeight

    // A section already on screen or scrolled past is never hidden.
    const toHide = targets.filter((el) => el.getBoundingClientRect().top > viewportBottom)

    const show = (el) => el.setAttribute('data-revealed', '')
    targets.filter((el) => !toHide.includes(el)).forEach(show)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    // Keyboard focus or a link jump into a hidden section reveals it at once.
    const onFocusIn = (event) => {
      const section = event.target.closest('[data-reveal]')
      if (section) show(section)
    }
    const onHash = () => {
      const el = document.getElementById(window.location.hash.slice(1))
      const section = el && el.closest('[data-reveal]')
      if (section) show(section)
    }
    // Turning on reduced motion mid-session reveals everything.
    const onMotion = () => {
      if (query.matches) {
        targets.forEach(show)
        root.removeAttribute('data-reveal-ready')
      }
    }

    toHide.forEach((el) => observer.observe(el))
    document.addEventListener('focusin', onFocusIn)
    window.addEventListener('hashchange', onHash)
    query.addEventListener('change', onMotion)
    root.setAttribute('data-reveal-ready', '')

    return () => {
      observer.disconnect()
      document.removeEventListener('focusin', onFocusIn)
      window.removeEventListener('hashchange', onHash)
      query.removeEventListener('change', onMotion)
      root.removeAttribute('data-reveal-ready')
    }
  }, [])
}
