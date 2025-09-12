import partners from "../../content/partners.json";

function splitPartners(list){
  // First 3 are the anchor orgs per your JSON
  const anchors   = list.slice(0,3);
  const financial = list.slice(3);
  return { anchors, financial };
}

export default function AboutPartners(){
  const { anchors, financial } = splitPartners(partners);

  return (
    <section className="stack">
      <h2>Partners</h2>

      {/* Mission blurb from Weebly, tightened */}
      <article className="card">
        <p>
          FCCIS-GC, Inc. relies on participation, grants, and donations from community partners.
          Financial contributions help us provide services to Glascock County children and families.
          Every dollar you contribute directly impacts a local resident.
        </p>
        <p>
          Interested in partnering or giving?  
          <a className="btn small" href="/get-involved" style={{marginLeft:8}}>Become a partner</a>
        </p>
      </article>

      {/* Anchor partners with logo/link */}
      <ul className="grid partner-grid" style={{listStyle:"none", padding:0, margin:0}}>
        {anchors.map((p,i)=>(
          <li key={i} className="card partner-card">
            {p.logo
              ? <img className="partner-logo" src={p.logo} alt={`${p.name} logo`} />
              : <div className="partner-logo fallback">{p.name.split(" ").map(n=>n[0]).join("").slice(0,2)}</div>
            }
            <div>
              <h3>
                {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name} →</a> : p.name}
              </h3>
              {p.url && <p className="muted">{new URL(p.url).hostname.replace("www.","")}</p>}
            </div>
          </li>
        ))}
      </ul>

      {/* Financial partners list (columns on wide screens) */}
     <article>
        <h3>Financial Partners</h3>
        <p className="muted">
          Thank you to the local churches, businesses, and individuals who make this work possible.
        </p>

        <ul className="partner-list">
          {financial.map((p, i) => (
            <li key={i}>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.name}
                </a>
              ) : (
                p.name
              )}
            </li>
          ))}
        </ul>

        <p style={{ marginTop: "10px" }}>
          Want to add your organization?{" "}
          <a className="btn small" href="/get-involved">Become a partner</a>
        </p>
      </article>
    </section>
  );
}