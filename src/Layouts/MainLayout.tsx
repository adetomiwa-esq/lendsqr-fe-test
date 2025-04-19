import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


function MainLayout() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main-outlet">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout