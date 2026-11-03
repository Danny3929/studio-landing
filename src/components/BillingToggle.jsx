// Monthly / Annual choice. Two toggle buttons: `aria-pressed` tells a screen reader which one is chosen.
export default function BillingToggle({ options, active, onChange, saveNote }) {
  return (
    <div className="billing" role="group" aria-label="Care plan billing">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className="billing__button"
          aria-pressed={option.id === active}
          onClick={() => onChange(option.id)}
        >
          {option.label}
          {option.id === 'annual' && saveNote ? <span className="billing__save"> · {saveNote}</span> : null}
        </button>
      ))}
    </div>
  )
}
