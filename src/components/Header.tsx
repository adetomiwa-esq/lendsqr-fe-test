import {} from 'react'
import logo from "../assets/logo.png";
import user from "../assets/avatar.png"
import { FaBars, FaCaretDown } from 'react-icons/fa';
import { LiaBellSolid } from 'react-icons/lia';
import { IoSearch } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/SidebarSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <header>
        <nav className="navbar">
          <i className='mobile-toggle-bar' onClick={() => {
            dispatch(toggleSidebar())
          }}><FaBars /></i>
            <img src={logo} alt="logo" className='logo' />

            <div className="search-box">
                <input type="text" name="" placeholder='Search for anything' id="" />
                <div className="search"><IoSearch /></div>
            </div>

            <div className="right-nav">
                <a href="" className="doc-link">Docs</a>

                <LiaBellSolid className='bell' />

                <img src={user} alt="" className='user-pic' />
                <p className="username">Adedeji <FaCaretDown /></p>
            </div>
        </nav>
    </header>
  )
}

export default Header