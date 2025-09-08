import staff from "../../content/staff.json"

export default function AboutStaff(){
  return (
    <section className="stack">
      <h2>Staff</h2>
      <ul className="grid staff-grid">
        {staff.map((s,i)=>(
          <li key={i} className="card staff-card">
            {s.photo ? (
              <img 
                className="staff-photo" 
                src={s.photo} 
                alt={`${s.name} headshot`} 
              />
            ) : (
              <div className="staff-photo fallback">
                {s.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0,2)}
              </div>
            )}

            <div>
              <h3>{s.name}</h3>
              {Array.isArray(s.titles) 
                ? s.titles.map((t,idx)=><p key={idx}>{t}</p>) 
                : <p>{s.titles || s.title}</p>}
            </div>

            {s.email && (
              <a className="btn small email" href={`mailto:${s.email}`}>
                {s.email}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}