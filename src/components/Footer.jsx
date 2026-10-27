import { footer } from '../data/footer.js'
import { nav } from '../data/nav.js'
import '../styles/footer.css'

// The page footer. It is the page's one <footer> landmark; its link list is labelled "Footer" so it is not confused with the main nav.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <p className="footer__brand">
            {nav.brand}
            <span className="footer__dot" aria-hidden="true">
              .
            </span>
          </p>
          <p className="footer__text">{footer.description}</p>
          <p className="footer__text">
            <a className="footer__link" href={`mailto:${footer.email}`}>
              {footer.emailLabel}: {footer.email}
            </a>
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul className="footer__list">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a className="footer__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a className="footer__link" href="#top">
                {footer.topLabel}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <p className="footer__legal">
          © {new Date().getFullYear()} {footer.legal}
        </p>
      </div>
    </footer>
  )
}
