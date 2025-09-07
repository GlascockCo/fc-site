import { Outlet, NavLink } from 'react-router-dom'

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="brand">
          <span className="logo" aria-hidden>🌲</span>
          <div>
            <h1>Glascock Family Connections</h1>
            <p>Neighbors helping neighbors in Glascock County</p>
          </div>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/get-involved">Get Involved</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main className="content"><Outlet /></main>
      <footer className="footer">
        <div>
          <strong>Family Connection &amp; CIS of Glascock County</strong><br />
          370 West Main St., Gibson, GA • <a href="tel:+17065980722">(706) 598-0722</a>
        </div>
        <div className="footer-actions">
          <a className="btn primary" href="/get-involved">Volunteer</a>
          <a className="btn" href="/services">Get Help</a>
        </div>
      </footer>
    </div>
  )
}
