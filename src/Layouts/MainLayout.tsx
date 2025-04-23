import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useState } from "react"
import './MainLayout.scss'


function MainLayout() {

  const [displaySideBar, setDisplaySideBar] = useState(false)

  console.log(displaySideBar);
  
  return (
    <div>
      <Navbar setDisplaySideBar={setDisplaySideBar}/>
      <Sidebar displaySideBar={displaySideBar}/>
      <div className="main-outlet">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout