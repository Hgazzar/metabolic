import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import FloatingDock from "../components/FloatingDock"

function SiteLayout() {
  return (
    <div id="top" className="min-h-screen bg-pureBlack text-white">
      <Navbar />
      <Outlet />
      <FloatingDock />
    </div>
  )
}

export default SiteLayout
