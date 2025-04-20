import { Link } from 'react-router-dom';
import logo from '../assets/Group.svg'
import profile from '../assets/profile-pic.png'
import union from '../assets/union.png'
import { CiSearch } from "react-icons/ci";
import { FaRegBell, FaSortDown } from 'react-icons/fa';
import './Navbar.scss'
import { HiBars3 } from 'react-icons/hi2';


function Navbar({setDisplaySideBar}) {
    
  return (
    <header className="header">
        <img src={logo} alt="logo" className='big-logo' />
        <img src={union} alt="mobile-logo" className='mini-logo' />

        <div className="search-container">
            <input type="text" name="" placeholder='Search for anything' id="" />
            <button><CiSearch /></button>
        </div>

        <div className="nav-icons">
          <Link to="" className='doc-link'>Docs</Link>
          <FaRegBell />
          <img src={profile} alt="profile-pic" />
          <p className="username"><span>Adedji</span> <FaSortDown /></p>
          <HiBars3 className='bars' onClick={() => setDisplaySideBar((prev:boolean) => !prev)}/>
        </div>
    </header>
  )
}

export default Navbar