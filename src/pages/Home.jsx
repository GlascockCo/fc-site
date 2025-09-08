// import AnnouncementBar from "../components/AnnouncementBar"
// import { getUpdates } from "../data/site"

// export default function Home() {
//   const items = getUpdates()
//   return (
//     <section className="stack gap">
//       <div className="hero-banner">
//         <div className="hero-content">
//           <img src="/fccis.png" alt="Family Connection Logo" className="hero-logo" />
//           <div>
//             <h1>Neighbors helping neighbors in Glascock County</h1>
//             <p className="hero-sub">After-school, family support, food & diapers — right here in Gibson.</p>
//             <div className="cta-row">
//               <a className="btn primary" href="/programs">Get Help</a>
//               <a className="btn" href="/get-involved">Get Involved</a>
//               <a className="btn outline" href="/contact">Call or Visit</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* This alone renders the cards */}
//       <AnnouncementBar items={items} />
//     </section>
//   )
// }

import AnnouncementBar from "../components/AnnouncementBar"
import { getUpdates } from "../data/site"

export default function Home() {
  const items = getUpdates()

  return (
    <section className="stack gap">
      {/* HERO */}
      <div className="hero-banner">
        <div className="hero-content">
          <img src="/fccis.png" alt="Family Connection & CIS" className="hero-logo" />
          <div>
            <h1>Neighbors helping neighbors in Glascock County</h1>
            <p className="hero-sub">After-school, family support, food & diapers — right here in Gibson.</p>
            <div className="cta-row">
              <a className="btn primary" href="/programs">Get Help</a>
              <a className="btn" href="/get-involved">Get Involved</a>
              <a className="btn outline" href="/contact">Call or Visit</a>
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
          <a className="btn" href="/about">Learn more</a>
        </li>

        <li className="card">
          <div className="feat-icon" aria-hidden>🧰</div>
          <h3>Services</h3>
          <p>
            From after-school tutoring and mentoring to food assistance, case management,
            and workforce readiness—our programs turn that mission into everyday help.
          </p>
          <a className="btn" href="/programs">See programs</a>
        </li>

        <li className="card">
          <div className="feat-icon" aria-hidden>🤝</div>
          <h3>Partners</h3>
          <p>
            It takes a village. Local, state, and national partners power this work and expand
            opportunities for Glascock County kids and families.
          </p>
          <a className="btn" href="/about/partners">Meet our partners</a>
        </li>
      </ul>

      {/* NEWS / ANNOUNCEMENTS */}
      <AnnouncementBar items={items} />
    </section>
  )
}