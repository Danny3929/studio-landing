import { useEffect, useState } from 'react'

// The rules of the carousel. Which quote is showing, and when it may change by itself.
//
// It rotates by itself ONLY when none of these is true (each one is a "pause reason"):
//  - the visitor pressed the Pause button          (`userPaused`)
//  - a mouse pointer is over the carousel          (`hovering`)
//  - keyboard focus is anywhere inside it          (`focusInside`)   <- Joy's requirement
//  - the browser tab is hidden                     (`tabHidden`)
// and it never rotates by itself when the visitor prefers reduced motion, or when there is only one quote.
// Previous and Next always work, whatever the reason.
export function useCarousel({ count, interval }) {
  const [index, setIndex] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [focusInside, setFocusInside] = useState(false)
  const [tabHidden, setTabHidden] = useState(() => document.hidden)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  // Follow the system's "reduce motion" setting, and the browser tab being hidden or shown.
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = (event) => setReducedMotion(event.matches)
    const onVisibility = () => setTabHidden(document.hidden)
    query.addEventListener('change', onMotion)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      query.removeEventListener('change', onMotion)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const canRotate = count > 1 && !reducedMotion
  const rotating = canRotate && !userPaused && !hovering && !focusInside && !tabHidden
  const current = count > 0 ? index % count : 0 // stays valid even if the list gets shorter

  // One timer for the current quote. It starts again after every change (so pressing Next gives the new quote
  // its full time) and is cleared whenever something changes, so there is never more than one running.
  useEffect(() => {
    if (!rotating) return undefined
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), interval)
    return () => clearTimeout(timer)
  }, [rotating, current, count, interval])

  // These use the latest value (`i`), not `current`, so two quick presses in the same instant both count.
  const next = () => setIndex((i) => ((i % count) + 1) % count)
  const previous = () => setIndex((i) => ((i % count) - 1 + count) % count)

  // Event handlers to put on the carousel's outer element.
  const regionProps = {
    // Only a real mouse pauses. On a touch screen a tap would otherwise "hover" until the next tap elsewhere.
    onPointerEnter: (event) => event.pointerType === 'mouse' && setHovering(true),
    onPointerLeave: (event) => event.pointerType === 'mouse' && setHovering(false),
    onFocus: () => setFocusInside(true),
    // Focus moving from one control to another inside the carousel is not "leaving".
    onBlur: (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setFocusInside(false)
    },
  }

  return {
    current,
    rotating,
    canRotate,
    userPaused,
    togglePause: () => setUserPaused((paused) => !paused),
    next,
    previous,
    regionProps,
  }
}
