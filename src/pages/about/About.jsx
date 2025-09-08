import ReactMarkdown from "react-markdown"
import aboutMd from "../../content/about.md?raw"
import execMd from "../../content/executive-letter.md?raw"

export default function About() {
  return (
    <section className="stack gap">
      <h2>About Us</h2>

      <article className="card">
        <ReactMarkdown>{aboutMd}</ReactMarkdown>
      </article>

      <article className="card">
        <ReactMarkdown>{execMd}</ReactMarkdown>
      </article>

      <article className="card">
        <h2>Documents</h2>
        <ul>
          <li>
            <a href="/docs/annual_report_2023.pdf" target="_blank" rel="noopener noreferrer">
              Annual Report 2023 (PDF)
            </a>
          </li>
          <li>
            <a href="/docs/990_fy2023.pdf" target="_blank" rel="noopener noreferrer">
              IRS Form 990 FY 2023 (PDF)
            </a>
          </li>
        </ul>
      </article>
    </section>
  )
}