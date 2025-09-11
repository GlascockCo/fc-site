// pages/about/AboutStaff.jsx
import staff from "../../content/staff.json";

function withBase(url) {
  // if it starts with '/', prefix with Vite's base; else leave it alone (http, https, data:, etc.)
  return url?.startsWith("/")
    ? `${import.meta.env.BASE_URL}${url.slice(1)}`
    : url;
}

export default function AboutStaff() {
  return (
    <section className="stack">
      <h2>Staff</h2>
      <ul className="grid staff-grid">
        {staff.map((s, i) => {
          const initials = s.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0,2);
          const photo = withBase(s.photo);
          return (
            <li key={i} className="card staff-card">
              {photo ? (
                <img className="staff-photo" src={photo} alt={`${s.name} headshot`} loading="lazy"/>
              ) : (
                <div className="staff-photo fallback" aria-hidden="true">{initials}</div>
              )}
              <div>
                <h3>{s.name}</h3>
                {Array.isArray(s.titles) ? s.titles.map((t, idx) => <p key={idx}>{t}</p>) : <p>{s.titles || s.title}</p>}
              </div>
              {s.email && <a className="btn small email" href={`mailto:${s.email}`}>{s.email}</a>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}