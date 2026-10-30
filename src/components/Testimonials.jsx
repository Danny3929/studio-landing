import { testimonials, testimonialsIntro } from '../data/testimonials.js'
import { useCarousel } from '../hooks/useCarousel.js'
import CarouselControls from './CarouselControls.jsx'
import TestimonialSlide from './TestimonialSlide.jsx'
import '../styles/testimonials.css'

// The testimonials carousel (pattern from the W3C "carousel" guide).
// The timing rules are in useCarousel. With no quotes nothing is shown; with one quote there are no controls.
export default function Testimonials() {
  const total = testimonials.length
  const carousel = useCarousel({ count: total, interval: testimonialsIntro.interval })
  if (total === 0) return null

  return (
    <section data-reveal id="testimonials" className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <p className="testimonials__eyebrow">{testimonialsIntro.eyebrow}</p>
        <h2 id="testimonials-title" className="testimonials__title">
          {testimonialsIntro.heading}
        </h2>

        <div
          className="carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          {...carousel.regionProps}
        >
          {/* Silent while it rotates by itself; polite when paused or after a button press, so changes are announced then. */}
          <div className="carousel__slides" aria-live={carousel.rotating ? 'off' : 'polite'}>
            {testimonials.map((item, i) => (
              <TestimonialSlide key={item.id} item={item} position={i + 1} total={total} active={i === carousel.current} />
            ))}
          </div>

          {total > 1 ? (
            <CarouselControls
              current={carousel.current}
              total={total}
              canRotate={carousel.canRotate}
              userPaused={carousel.userPaused}
              onPrevious={carousel.previous}
              onNext={carousel.next}
              onTogglePause={carousel.togglePause}
            />
          ) : null}
        </div>

        <p className="testimonials__note">{testimonialsIntro.note}</p>
      </div>
    </section>
  )
}
