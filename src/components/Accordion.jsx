import { useState } from "react"

export default function Accordion({ items }){
  return (
    <ul className="accordion">
      {items.map((it, i) => <Row key={i} {...it} />)}
    </ul>
  )
}

function Row({ title, blurb, children }){
  const [open, setOpen] = useState(false)
  return (
    <li className={`card ${open ? "open" : ""}`}>
      <button className="acc-head" onClick={()=>setOpen(o=>!o)} aria-expanded={open}>
        <span>{title}</span>
        <span className="caret" aria-hidden>▸</span>
      </button>
      <div className="acc-body">
        {blurb && <p>{blurb}</p>}
        {children}
      </div>
    </li>
  )
}