// Previous, Pause or Start, Next, and a text position ("Quote 2 of 3").
// The Pause button is only shown when the carousel can rotate by itself (not for reduced motion, not for a single quote).
// Its label changes with the state, so it does not also need aria-pressed.
export default function CarouselControls({ current, total, canRotate, userPaused, onPrevious, onNext, onTogglePause }) {
  return (
    <div className="carousel__controls">
      <button type="button" className="carousel__button" onClick={onPrevious}>
        Previous quote
      </button>
      {canRotate ? (
        <button type="button" className="carousel__button" onClick={onTogglePause}>
          {userPaused ? 'Start rotation' : 'Pause rotation'}
        </button>
      ) : null}
      <button type="button" className="carousel__button" onClick={onNext}>
        Next quote
      </button>
      <p className="carousel__position">
        Quote {current + 1} of {total}
      </p>
    </div>
  )
}
