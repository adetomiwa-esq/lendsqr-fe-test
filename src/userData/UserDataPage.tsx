import { useEffect, useState } from "react"
import { CgArrowLongLeft } from "react-icons/cg"
import { Link } from "react-router-dom"
import './UserData.scss'
import { LuUserRound } from "react-icons/lu"
import { IoStar, IoStarOutline } from "react-icons/io5"
import PersonalInfo from "./PersonalInfo"


type User = {
    _id?: string;
    company?: string,
    username?: string;
    email?: string;
    registered?: string;
    phone?: string;
    status?: string;
    gender?: string;
    balance?: string
};

function UserDataPage() {

    const getFromLocalStorage = (key: string): User | null => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) as User : null;
    };
    
    const [savedData, setSavedData] = useState<User|undefined>()

    useEffect(() => {
        const userData = getFromLocalStorage("userData");
        if (userData) {
            setSavedData(userData);
          }
    }, [])

      
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
                    <h2>{savedData?.username}</h2>
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
                    <div className="balance">₦{savedData?.balance?.slice(1)}.00</div>
                    <div className="acct">{`99123432187`}/{`Providus Bank`}</div>
                </div>
            </div>

            <div className="active-bars hide-scroll-bar">
                <div className="bar current">General Details</div>
                <div className="bar">Documents</div>
                <div className="bar">Bank Details</div>
                <div className="bar">Loans</div>
                <div className="bar">Savings</div>
                <div className="bar">App and System</div>

                <div className="indicator"></div>
            </div>
        </section>

        <PersonalInfo savedData={savedData} />
    </div>
  )
}

export default UserDataPage