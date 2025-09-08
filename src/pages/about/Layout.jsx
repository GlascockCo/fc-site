import { NavLink, Outlet } from "react-router-dom"

export default function AboutLayout() {
  return (
    <section className="stack gap">
      {/* <h2>About</h2> */}
      <h1>About</h1>
      <nav className="section-nav">
        <NavLink to="/about" end>Overview</NavLink>
        <NavLink to="/about/board">Board</NavLink>
        <NavLink to="/about/partners">Partners</NavLink>
        <NavLink to="/about/staff">Staff</NavLink>
      </nav>
      <Outlet />
    </section>
  )
}