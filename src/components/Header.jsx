import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img 
          src="/fccis.png" 
          alt="FCCIS Logo" 
          className="logo" 
        />
        <div>
          <h1>Glascock County Family Connections</h1>
          <p>Neighbors helping neighbors in Glascock County</p>
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
  )
}