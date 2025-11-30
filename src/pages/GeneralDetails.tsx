import {} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

export default function GeneralDetails() {
  return (
    <div>
        <Header />
        <Sidebar />

        <main className="page-content">
            <div className="details-body">
                <section className="top-section">
                    <Link to="" className='back'>
                        <img src="/images/left.svg" alt="" /> 
                        <span>Back to Users</span>
                    </Link>

                    <div className="details-header">
                        <h3>User Details</h3>

                        <div className="buttons">
                            <button className="blacklist">
                                Blacklist User
                            </button>

                            <button className="activate">
                                Activate User
                            </button>
                        </div>
                    </div>

                    <div className="overall-details">
                        <div className="details">
                            <div className="profile-p-container">
                                <img src="/images/avatar.svg" alt="icon" />
                            </div>

                            <div className="name">
                                <h4>{`Grace Effiom`}</h4>
                                <p>LSQFf587g90</p>
                            </div>

                            <div className="tier">
                                <h5>User’s Tier</h5>
                                <div className="stars"></div>
                            </div>

                            <div className="account">
                                <h4>₦200,000.00</h4>
                                <p><span>9912345678</span>/<span>Providus Bank</span></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="personal-info">
                    <div className="info-box">
                        <h3>Personal Information</h3>

                        <ul className="details-list">
                            <li className='detail'>
                                <h5>full Name</h5>
                                <p>Grace Effiom</p>
                            </li>

                            <li className='detail'>
                                <h5>Phone Number</h5>
                                <p>07060780922</p>
                            </li>

                            <li className='detail'>
                                <h5>Email Address</h5>
                                <p>grace@gmail.com</p>
                            </li>

                            <li className='detail'>
                                <h5>Bvn</h5>
                                <p>07060780922</p>
                            </li>

                            <li className='detail'>
                                <h5>Gender</h5>
                                <p>Female</p>
                            </li>

                            <li className='detail'>
                                <h5>Marital status</h5>
                                <p>Single</p>
                            </li>

                            <li className='detail'>
                                <h5>Children</h5>
                                <p>None</p>
                            </li>

                            <li className='detail'>
                                <h5>Type of residence</h5>
                                <p>Parent’s Apartment</p>
                            </li>
                        </ul>
                    </div>

                    <div className="info-box">
                        <h3>Education and Employment</h3>

                        <ul className="details-list">
                            <li className='detail'>
                                <h5>level of education</h5>
                                <p>B.Sc</p>
                            </li>

                            <li className='detail'>
                                <h5>employment status</h5>
                                <p>Employed</p>
                            </li>

                            <li className='detail'>
                                <h5>sector of employment</h5>
                                <p>FinTech</p>
                            </li>

                            <li className='detail'>
                                <h5>Duration of employment</h5>
                                <p>2 years</p>
                            </li>

                            <li className='detail'>
                                <h5>office email</h5>
                                <p>grace@lendsqr.com</p>
                            </li>

                            <li className='detail'>
                                <h5>Monthly income</h5>
                                <p>₦200,000.00- ₦400,000.00</p>
                            </li>

                            <li className='detail'>
                                <h5>loan repayment</h5>
                                <p>40,000</p>
                            </li>
                        </ul>
                    </div>

                    <div className="info-box">
                        <h3>Socials</h3>

                        <ul className="details-list">
                            <li className='detail'>
                                <h5>Twitter</h5>
                                <p>@grace_effiom</p>
                            </li>

                            <li className='detail'>
                                <h5>Facebook</h5>
                                <p>Grace Effiom</p>
                            </li>

                            <li className='detail'>
                                <h5>Instagram</h5>
                                <p>@grace_effiom</p>
                            </li>
                        </ul>
                    </div>

                    <div className="info-box">
                        <h3>Guarantor</h3>

                        <ul className="details-list">
                            <li className='detail'>
                                <h5>full Name</h5>
                                <p>Debby Ogana</p>
                            </li>

                            <li className='detail'>
                                <h5>Phone Number</h5>
                                <p>07060780922</p>
                            </li>

                            <li className='detail'>
                                <h5>Email Address</h5>
                                <p>debby@gmail.com</p>
                            </li>

                            <li className='detail'>
                                <h5>Relationship</h5>
                                <p>Sister</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    </div>
  )
}
