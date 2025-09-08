import { Link } from "react-router-dom"

export default function AnnouncementBar({ items }){
  return (
    <div className="cards">
      {items.map((u,i)=>(
        <article key={i}>
          <h3>{u.title}</h3>
          <p>{u.desc}</p>
          {u.link && <Link className="btn small" to={u.link}>Learn more</Link>}
        </article>
      ))}
    </div>
  )
}