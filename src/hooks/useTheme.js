import { useEffect, useState } from 'react'

// Light or dark theme.
//  - First visit: follow the visitor's system setting, and keep following it if it changes.
//  - After the visitor presses the button: use their choice, and remember it in the browser.
// The same rule also runs once in index.html, before the page paints, so a dark-mode visitor never sees a white flash.
// Keep the two in step: same storage key, same two allowed words.
export const THEME_KEY = 'jenga-theme'

function readSaved() {
  try {
    const value = window.localStorage.getItem(THEME_KEY)
    return value === 'light' || value === 'dark' ? value : null // anything else is ignored
  } catch {
    return null // storage can be blocked (private mode); the site still works, it just does not remember
  }
}

const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)')
const systemTheme = () => (darkQuery().matches ? 'dark' : 'light')

export function useTheme() {
  const [saved, setSaved] = useState(readSaved)
  const [system, setSystem] = useState(systemTheme)

  // Follow the system setting while the page is open.
  useEffect(() => {
    const query = darkQuery()
    const onChange = (event) => setSystem(event.matches ? 'dark' : 'light')
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const theme = saved ?? system

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setSaved(next)
    try {
      window.localStorage.setItem(THEME_KEY, next)
    } catch {
      // blocked storage: the choice still applies until the page is closed
    }
  }

  return { theme, toggle }
}
