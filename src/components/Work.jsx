import { useState } from 'react'
import { filters, projects, workIntro } from '../data/work.js'
import WorkCard from './WorkCard.jsx'
import WorkFilter from './WorkFilter.jsx'
import '../styles/work.css'

// The featured work section. It remembers which filter is chosen and shows the matching projects.
// Projects that do not match are removed from the page, not just hidden, so the Tab key cannot reach them.
export default function Work() {
  const [active, setActive] = useState('all')
  const shown = active === 'all' ? projects : projects.filter((project) => project.categories.includes(active))

  return (
    <section data-reveal id="work" className="work" aria-labelledby="work-title">
      <div className="container">
        <div className="work__head">
          <p className="work__eyebrow">{workIntro.eyebrow}</p>
          <h2 id="work-title" className="work__title">
            {workIntro.heading}
          </h2>
        </div>

        <WorkFilter filters={filters} active={active} onChange={setActive} />

        {/* role="status" is read out politely whenever its text changes */}
        <p className="work__status" role="status">
          Showing {shown.length} of {projects.length} projects
        </p>

        {shown.length > 0 ? (
          <ul className="work__grid">
            {shown.map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </ul>
        ) : (
          <p className="work__empty">No projects in this category yet.</p>
        )}
      </div>
    </section>
  )
}
