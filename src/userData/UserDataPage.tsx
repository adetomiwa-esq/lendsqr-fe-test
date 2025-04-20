import { CgArrowLongLeft } from "react-icons/cg"
import { Link } from "react-router-dom"
import './UserData.scss'
import { LuUserRound } from "react-icons/lu"
import { IoStar, IoStarOutline } from "react-icons/io5"
import PersonalInfo from "./PersonalInfo"


function UserDataPage() {
  return (
    <div className="user-data">
        <section className="user-details-top">
            <Link to="/dashboard/users" className="back-to-users"><CgArrowLongLeft /> <span>Back to Users</span></Link>

            <div className="status-controller">
                <h2>User Details</h2>

                <div className="btns">
                    <button className="blacklist-btn">BLACKLIST USER</button>
                    <button className="activate-btn">ACTIVATE USER</button>
                </div>
            </div>
        </section>

        <section className="user-title">
            <div className="personal-info">
                <div className="rounded"><LuUserRound className="user-icon" /></div>
                <div className="name">
                    <h2>{`Grace Effiom`}</h2>
                    <p className="user-id">{`LSQFf587g90`}</p>
                </div>
                <div className="user-tier">
                    <h4>User's Tier</h4>
                    <div className="stars">
                        <IoStar />
                        <IoStarOutline />
                        <IoStarOutline />
                    </div>
                </div>
                <div className="bank-details">
                    <div className="balance">₦{`200,000`}.00</div>
                    <div className="acct">{`99123432187`}/{`Providus Bank`}</div>
                </div>
            </div>
        </section>

        <PersonalInfo />
    </div>
  )
}

export default UserDataPage