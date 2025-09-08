import { Outlet } from "react-router-dom"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"

export default function App() {
  return (
    <div className="site">
      <Header />
      <main className="content">
        <Outlet />   {/* <- children render here */}
      </main>
      <Footer />
    </div>
  )
}