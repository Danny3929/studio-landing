// One question and its answer.
// The question is a real <button> inside a heading. `aria-expanded` says if it is open, `aria-controls` points at the answer.
// A closed answer has the `hidden` attribute, so it is out of the Tab order and the reading order.
export default function FaqItem({ item, open, onToggle }) {
  const buttonId = `faq-q-${item.id}`
  const panelId = `faq-a-${item.id}`

  return (
    <li className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <h3 className="faq-item__heading">
        <button
          type="button"
          id={buttonId}
          className="faq-item__button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => onToggle(item.id)}
        >
          <span className="faq-item__question">{item.question}</span>
          <span className="faq-item__sign" aria-hidden="true" />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-item__panel" hidden={!open}>
        <p className="faq-item__answer">{item.answer}</p>
      </div>
    </li>
  )
}
