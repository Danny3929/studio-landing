import WorkArt from './WorkArt.jsx'

// One project tile: a coloured picture area and a caption with the name and what we did.
// The drawing is decorative, so the caption carries the meaning.
export default function WorkCard({ project }) {
  return (
    <li className="work-card">
      <figure className="work-card__figure">
        <div className={`work-card__pic work-card__pic--${project.tone}`}>
          <WorkArt name={project.art} />
        </div>
        <figcaption className="work-card__caption">
          <h3 className="work-card__name">{project.name}</h3>
          <p className="work-card__summary">{project.summary}</p>
        </figcaption>
      </figure>
    </li>
  )
}
