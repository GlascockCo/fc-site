import ReactMarkdown from "react-markdown";
import volunteers from "../content/americorps-volunteers.json";
import md from "../content/americorps.md?raw";

export default function AmeriCorps() {
  return (
    <section className="stack">
      <h2>AmeriCorps Volunteers (K–3)</h2>

      {/* Program overview copy (from markdown) */}
      <article className="card">
        <ReactMarkdown>{md}</ReactMarkdown>
      </article>

      {/* Volunteer list */}
      <article className="card">
        <h3>Our AmeriCorps Volunteers</h3>

        <ul className="grid staff-grid list-plain">
          {volunteers.map((v, i) => {
            const initials = v.name
              .split(" ")
              .map(n => n[0])
              .join("")
              .toUpperCase()
              .slice(0, 2);

            return (
              <li key={`${v.name}-${i}`} className="card staff-card">
                {v.photo ? (
                  <img
                    className="staff-photo"
                    src={v.photo}
                    alt={`${v.name} headshot`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="staff-photo fallback" aria-hidden="true">
                    {initials}
                  </div>
                )}

                <div>
                  <h3>{v.name}</h3>
                  <p>{v.title || "AmeriCorps Volunteer"}</p>
                  {v.email && (
                    <a className="btn small" href={`mailto:${v.email}`}>
                      {v.email}
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </article>

      <p>
        <a className="btn small" href="/programs">
          ← Back to programs
        </a>
      </p>
    </section>
  );
}