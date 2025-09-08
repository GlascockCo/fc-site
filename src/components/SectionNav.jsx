import { NavLink } from "react-router-dom"

export default function SectionNav(){
  return (
    <nav className="section-nav">
      <NavLink to="/about/board">Board</NavLink>
      <NavLink to="/about/staff">Staff</NavLink>
      <NavLink to="/about/partners">Partners</NavLink>
    </nav>
  )
}