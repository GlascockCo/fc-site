import { useEffect } from "react"
import ReactMarkdown from "react-markdown"
import { useLocation } from "react-router-dom"
import intro from "../content/programs-intro.md?raw"
import programs from "../content/programs.json"

function slugify(str){
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}
function toHashHref(href) {
  if (!href) return "#/";
  if (/^(https?:)?\/\//i.test(href)) return href; // external http(s)
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return href;

  // internal path, make sure it works with HashRouter
  const clean = href.startsWith("/") ? href.slice(1) : href;
  return `#/${clean}`;
}

export default function Programs(){
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [location])

  const defaultCTA = { label: "Get Help", href: "/contact", external: false }

  return (
    <section className="stack">
      <h2>Programs</h2>

      <article className="card">
        <ReactMarkdown>{intro}</ReactMarkdown>
      </article>

      <ul className="grid">
        {programs.map((p, i) => {
          const id = slugify(p.title)
          const cta = p.cta || defaultCTA

          // support mailto shortcut in JSON
          const isMailto = !!cta.mailto
          const href = isMailto
            ? `mailto:${cta.mailto}${
                cta.subject || cta.body
                  ? `?${new URLSearchParams({
                      ...(cta.subject ? { subject: cta.subject } : {}),
                      ...(cta.body ? { body: cta.body } : {})
                    }).toString()}`
                  : ""
              }`
            : cta.href || defaultCTA.href

          return (
            <li key={i} id={id} className="card">
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>

              <a
                className="btn small"
                href={toHashHref(href)}
                {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {cta.label || defaultCTA.label}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}