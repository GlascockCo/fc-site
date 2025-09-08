import board from "../../content/board.json"

export default function AboutBoard() {
  return (
    <section className="stack">
      <h3>Executive Board of Directors</h3>
      <ul className="grid board-grid">
        {board.map((m, i) => (
          <li key={i} className="card board-card">
            <h3>{m.name}</h3>
            <p><strong>{m.role}</strong></p>
            {m.affiliation && <p>{m.affiliation}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}