// src/components/Footer.jsx
import { org as ORG } from "../data/site"; // ← adjust the relative path as needed

export default function Footer({ org = ORG }) {
  // fallbacks + safe hrefs
  const name    = org?.name ?? "Family Connections & CIS of Glascock County";
  const address = org?.address ?? "370 West Main St., Gibson, GA";
  const phone   = org?.phone;
  const phoneHref =
    org?.phoneHref ||
    (phone ? `tel:+1${(phone.match(/\d/g) || []).join("")}` : undefined);
  const email   = org?.email;
  const donate  = org?.donateUrl;

  return (
    <footer className="footer">
      <div>
        <strong>{name}</strong><br />
        {address}
        {phone && (
          <>
            {" • "}
            <a href={phoneHref}>{phone}</a>
          </>
        )}
        {email && (
          <>
            {" • "}
            <a href={`mailto:${email}`}>{email}</a>
          </>
        )}
      </div>

      <div className="footer-actions">
        <a className="btn primary" href="/get-involved">Volunteer</a>
        {donate && (
          <a className="btn primary" href={donate} target="_blank" rel="noopener noreferrer">
            Donate
          </a>
        )}
        <a className="btn" href="/get-help">Get Help</a>
      </div>
    </footer>
  );
}