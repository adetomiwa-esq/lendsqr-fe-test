import { Link } from 'react-router-dom';
import logo from '../assets/Group.svg'
import profile from '../assets/profile-pic.png'
import { CiSearch } from "react-icons/ci";
import { FaRegBell, FaSortDown } from 'react-icons/fa';
import './Navbar.scss'


function Navbar() {
    
  return (
    <header className="header">
        <img src={logo} alt="logo" />

        <div className="search-container">
            <input type="text" name="" placeholder='Search for anything' id="" />
            <button><CiSearch /></button>
        </div>

        <div className="nav-icons">
          <Link to="" className='doc-link'>Docs</Link>
          <FaRegBell />
          <img src={profile} alt="profile-pic" />
          <p className="username"><span>Adedji</span> <FaSortDown /></p>
        </div>
    </header>
  )
}

export default Navbar