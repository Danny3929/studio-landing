// The light / dark button. It is a toggle button: `aria-pressed` is true while the dark theme is on.
// The label never changes (a changing label plus a changing state would be read out twice).
// The icon is a half-filled circle, hidden from screen readers; the words carry the meaning.
export default function ThemeToggle({ dark, onToggle, ref }) {
  return (
    <button ref={ref} type="button" className="theme-toggle" aria-pressed={dark} onClick={onToggle}>
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 4a8 8 0 0 0 0 16z" fill="currentColor" />
      </svg>
      <span className="theme-toggle__word" aria-hidden="true">
        Theme
      </span>
      <span className="visually-hidden">Dark theme</span>
    </button>
  )
}
