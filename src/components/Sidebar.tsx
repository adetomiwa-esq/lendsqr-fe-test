import { NavLink } from 'react-router-dom'
import './Sidebar.scss'
import { FaAngleDown, FaBriefcase, FaCoins, FaPiggyBank, FaRegHandshake, FaUserCheck, FaUsers, FaUserTimes } from 'react-icons/fa'
import { HiMiniUsers } from 'react-icons/hi2'
import loan from '../assets/loan.png'
import ask from '../assets/ask.png'
import gear from '../assets/gear.png'
import divide from '../assets/divide.png'
import { VscGraph, VscSettings } from 'react-icons/vsc'
import { PiScrollLight } from 'react-icons/pi'
import { FaUserGear } from 'react-icons/fa6'
import { AiOutlineBank } from 'react-icons/ai'
import { RiExchangeBoxLine } from 'react-icons/ri'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { IoHomeOutline } from 'react-icons/io5'

interface Props {
    displaySideBar: boolean
}

function Sidebar({displaySideBar}: Props) {
  return (
    <aside className={`sidebar ${displaySideBar ? 'show-mobile-sidebar' :  ''}`}>
        <NavLink to="/" className="nav-link">
            <span><FaBriefcase /></span>
            <span>Switch Organization</span>
            <span><FaAngleDown /></span>
        </NavLink>
        <NavLink to="/" className="nav-link">
            <span><IoHomeOutline /></span>
            <span>Dashboard</span>
        </NavLink>
        <h4 className="links-header">CUSTOMERS</h4>
        <ul>
            <li className="link-li">
                <NavLink to="/dashboard/users" className="nav-link">
                    <span><HiMiniUsers /></span>
                    <span>Users</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><FaUsers /></span>
                    <span>Guarantors</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src={loan} alt="loan" /></span>
                    <span>Loans</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><FaRegHandshake /></span>
                    <span>Decision Models</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><FaPiggyBank /></span>
                    <span>Savings</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src={ask} alt="request" /></span>
                    <span>Loan Requests</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><FaUserCheck /></span>
                    <span>Whitelist</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><FaUserTimes /></span>
                    <span>Karma</span>
                </NavLink>
            </li>
        </ul>
        

                                {/* second section */}
        <h4 className="links-header">BUSINESSES</h4>
        <ul>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><FaBriefcase /></span>
                    <span>Organization</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src={ask} alt="loan" /></span>
                    <span>Loan Products</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><AiOutlineBank /></span>
                    <span>Savings Products</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><FaCoins /></span>
                    <span>Fees and Charges</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><RiExchangeBoxLine /></span>
                    <span>Transactions</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src={gear} alt="request" /></span>
                    <span>Services</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><FaUserGear /></span>
                    <span>Service Account</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><PiScrollLight /></span>
                    <span>Settlements</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><VscGraph /></span>
                    <span>Reports</span>
                </NavLink>
            </li>
        </ul>


                {/* 3rd section */}
        <h4 className="links-header">SETTINGS</h4>
        <ul>
        <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><VscSettings /></span>
                    <span>Preferences</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src={divide} alt="" /></span>
                    <span>Fees and Pricing</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><BsFillJournalBookmarkFill /></span>
                    <span>Audit Logs</span>
                </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar