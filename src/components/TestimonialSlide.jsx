// One quote. Only the current slide is visible: the others have the `hidden` attribute, so they are out of the
// Tab order and the reading order, and a screen reader reads one quote, not three.
export default function TestimonialSlide({ item, position, total, active }) {
  return (
    <div
      className="slide"
      role="group"
      aria-roledescription="slide"
      aria-label={`${position} of ${total}`}
      hidden={!active}
    >
      <figure className="slide__figure">
        <blockquote className="slide__quote">
          <p>{item.quote}</p>
        </blockquote>
        <figcaption className="slide__caption">
          <span className="slide__name">{item.name}</span>
          <span className="slide__role">
            {item.role}, {item.business}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
