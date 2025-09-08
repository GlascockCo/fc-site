import news from "../content/news.json"

export default function News(){
  const sorted = [...news].sort((a,b)=>new Date(b.date)-new Date(a.date))
  return (
    <section className="stack">
      <h2>News & Updates</h2>
      <ul className="stack">
        {sorted.map((n,i)=>(
          <li key={i} className="card news-card">
            <h3>
              {n.link 
                ? <a href={n.link} target="_blank" rel="noopener noreferrer">{n.title}</a>
                : n.title}
            </h3>
            <p><em>{new Date(n.date).toLocaleDateString()}</em></p>
            <p>{n.summary}</p>
            {n.link && <a className="btn small" href={n.link} target="_blank" rel="noopener noreferrer">Read more</a>}
          </li>
        ))}
      </ul>
    </section>
  )
}