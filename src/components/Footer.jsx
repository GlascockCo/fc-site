import { Link } from "react-router-dom";
import { org as ORG } from "../data/site";

export default function Footer({ org = ORG }) {
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
        {/* Internal routes use Link */}
        <Link className="btn primary" to="/get-involved">
          Volunteer
        </Link>

        {/* External stays <a> */}
        {donate && (
          <a
            className="btn primary"
            href={donate}
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        )}

        <Link className="btn" to="/programs">
          Get Help
        </Link>
      </div>
    </footer>
  );
}