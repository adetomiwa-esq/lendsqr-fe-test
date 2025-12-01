import {} from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import type { RootState } from '../features/store'

function Sidebar() {
    const sidebarState = useSelector((state: RootState) => state.asideSlice )
    console.log(sidebarState);
    
  return (
    <aside className={`sidebar hide-scroll-bar ${sidebarState ? "reveal-sidebar" : ""}`}>
        <NavLink to="/" className="nav-link top-side">
            <span><img src="/images/briefcase.svg" alt="icon" /></span>
            <span>Switch Organization</span>
            <span><FaAngleDown /></span>
        </NavLink>
        <NavLink to="/" className="nav-link dashboard-link">
            <span><img src="/images/home.svg" alt="icon" /></span>
            <span>Dashboard</span>
        </NavLink>
        <h4 className="links-header">CUSTOMERS</h4>
        <ul>
            <li className="link-li">
                <NavLink to="/dashboard" className="nav-link active-1">
                    <span><img src="/images/user-friends.svg" alt="icon" /></span>
                    <span>Users</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/users.svg" alt="icon" /></span>
                    <span>Guarantors</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/sack.svg" alt="icon" /></span>
                    <span>Loans</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/handshake.svg" alt="icon" /></span>
                    <span>Decision Models</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/piggy-bank.svg" alt="icon" /></span>
                    <span>Savings</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/loan.svg" alt="icon" /></span>
                    <span>Loan Requests</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/user-check.svg" alt="icon" /></span>
                    <span>Whitelist</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/user-times.svg" alt="icon" /></span>
                    <span>Karma</span>
                </NavLink>
            </li>
        </ul>
        

                                {/* second section */}
        <h4 className="links-header">BUSINESSES</h4>
        <ul>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/briefcase.svg" alt="icon" /></span>
                    <span>Organization</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/loan.svg" alt="icon" /></span>
                    <span>Loan Products</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/bank.svg" alt="icon" /></span>
                    <span>Savings Products</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/coins-solid.svg" alt="icon" /></span>
                    <span>Fees and Charges</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/transfer.svg" alt="icon" /></span>
                    <span>Transactions</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/galaxy.svg" alt="icon" /></span>
                    <span>Services</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/user-cog.svg" alt="icon" /></span>
                    <span>Service Account</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/scroll.svg" alt="icon" /></span>
                    <span>Settlements</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/chart-bar.svg" alt="icon" /></span>
                    <span>Reports</span>
                </NavLink>
            </li>
        </ul>


                {/* 3rd section */}
        <h4 className="links-header">SETTINGS</h4>
        <ul>
        <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/sliders.svg" alt="icon" /></span>
                    <span>Preferences</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/percent.svg" alt="icon" /></span>
                    <span>Fees and Pricing</span>
                </NavLink>
            </li>
            <li className="link-li">
                <NavLink to="/" className="nav-link">
                    <span><img src="/images/clipboard.svg" alt="icon" /></span>
                    <span>Audit Logs</span>
                </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar