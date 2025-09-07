export default function Home() {
  return (
    <section className="stack gap">
      <div className="hero">
        <h2>After-school, family support, food & diapers — right here in Gibson.</h2>
        <div className="cta-row">
          <a className="btn primary" href="/services">Get Help</a>
          <a className="btn" href="/get-involved">Get Involved</a>
          <a className="btn outline" href="/contact">Call or Visit</a>
        </div>
      </div>
      <div className="cards">
        <article>
          <h3>This Month</h3>
          <p>Collaborative meeting: 4th Wednesday • 10:00 AM • Resource Center.</p>
        </article>
        <article>
          <h3>After-School</h3>
          <p>K–12 support, snacks & tutoring. Ask about bus options.</p>
        </article>
        <article>
          <h3>Pantry & Essentials</h3>
          <p>Food, diapers, paper goods. Please call ahead.</p>
        </article>
      </div>
    </section>
  )
}
