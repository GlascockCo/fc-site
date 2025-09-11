import { Link } from "react-router-dom";
import AnnouncementBar from "../components/AnnouncementBar";
import { getUpdates } from "../data/site";

export default function Home() {
  const items = getUpdates();

  return (
    <section className="stack gap">
      {/* HERO */}
      <div className="hero-banner">
        <div className="hero-content">
          <img
            src={`${import.meta.env.BASE_URL}fccis.png`}
            alt="FCCIS Logo"
            className="logo"
          />
          <div>
            <h1>Connecting families with care and community.</h1>
            <p className="hero-sub">
              After-school, family support, food & diapers — right here in Gibson.
            </p>
            <div className="cta-row">
              <Link className="btn primary" to="/programs">
                Get Help
              </Link>
              <Link className="btn" to="/get-involved">
                Get Involved
              </Link>
              <Link className="btn outline" to="/contact">
                Call or Visit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT WE'RE ABOUT */}
      <ul className="feature-cards">
        <li className="card">
          <div className="feat-icon" aria-hidden>🎯</div>
          <h3>Mission</h3>
          <p>
            We surround students and families with a strong community of support so they can
            succeed in school and in life. We unite neighbors, connect resources, and open doors.
          </p>
          <Link className="btn" to="/about">Learn more</Link>
        </li>

        <li className="card">
          <div className="feat-icon" aria-hidden>🧰</div>
          <h3>Services</h3>
          <p>
            From after-school tutoring and mentoring to food assistance, case management,
            and workforce readiness—our programs turn that mission into everyday help.
          </p>
          <Link className="btn" to="/programs">See programs</Link>
        </li>

        <li className="card">
          <div className="feat-icon" aria-hidden>🤝</div>
          <h3>Partners</h3>
          <p>
            It takes a village. Local, state, and national partners power this work and expand
            opportunities for Glascock County kids and families.
          </p>
          <Link className="btn" to="/about/partners">Meet our partners</Link>
        </li>
      </ul>

      {/* NEWS / ANNOUNCEMENTS */}
      <AnnouncementBar items={items} />
    </section>
  )
}