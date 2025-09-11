import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const taglines = [
  "Connecting families with care and community.",
  "Where neighbors become a network of support.",
  "Building stronger families, one connection at a time.",
  "Local support, lasting impact.",
  "Together we open doors for Glascock County families.",
  "Your community, your support system.",
  "Neighbors united for brighter futures."
];

export default function Header() {
  const [tagline, setTagline] = useState(taglines[0]);

  useEffect(() => {
    const random = Math.floor(Math.random() * taglines.length);
    setTagline(taglines[random]);
  }, []);

  return (
    <header className="header">
      <div className="brand">
        <img
          src={`${import.meta.env.BASE_URL}fccis.png`}
          alt="FCCIS Logo"
          className="logo"
        />
        <div>
          <h1>Glascock County Family Connections</h1>
          <p>{tagline}</p>
        </div>
      </div>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}