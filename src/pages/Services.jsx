export default function Services() {
  const items = [
    { title: 'After-School & Summer', blurb: 'Homework help, snacks, enrichment.' },
    { title: 'AmeriCorps Tutors (K-3)', blurb: 'Reading & math support.' },
    { title: 'Backpack Program', blurb: 'Weekend food support.' },
    { title: 'Car Seats & Cribs', blurb: 'Safety for little ones.' },
    { title: 'Family Navigation', blurb: 'Case management & referrals.' },
    { title: 'Workforce / WIOA', blurb: 'Career pathways for teens.' },
  ]
  return (
    <section className="stack">
      <h2>Services</h2>
      <ul className="grid">
        {items.map(s => (
          <li key={s.title} className="card">
            <h3>{s.title}</h3>
            <p>{s.blurb}</p>
            <a className="btn small" href="/contact">Call (706) 598-0722</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
