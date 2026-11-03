// One labelled form field. The label is tied to the input with `htmlFor`/`id`.
// The error text and the hint are tied with `aria-describedby`, and `aria-invalid` tells a screen reader the field has a problem.
// `as` picks the element: "input" (default), "textarea" or "select".
export default function Field({ id, name, label, required, error, hint, as = 'input', children, ...rest }) {
  const Tag = as
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={`field${error ? ' field--error' : ''}`}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required ? <span className="field__required"> (required)</span> : null}
      </label>
      <Tag id={id} name={name} className="field__control" aria-invalid={error ? 'true' : undefined} aria-describedby={describedBy} {...rest}>
        {children}
      </Tag>
      {hint ? (
        <p id={hintId} className="field__hint">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="field__error">
          <span aria-hidden="true">! </span>
          {error}
        </p>
      ) : null}
    </div>
  )
}
