// The row of filter buttons. Each one is a toggle button: `aria-pressed` tells a screen reader which is chosen.
// (These are not ARIA "tabs": there is one grid that changes, not separate panels.)
export default function WorkFilter({ filters, active, onChange }) {
  return (
    <div className="work-filter" role="group" aria-label="Filter projects by category">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className="work-filter__button"
          aria-pressed={filter.id === active}
          onClick={() => onChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
