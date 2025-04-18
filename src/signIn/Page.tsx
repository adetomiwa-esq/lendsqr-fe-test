
import './signIn.scss'
import { Link } from 'react-router-dom'
import banner from "../assets/sign-in.svg";
import logo from '../assets/Group.svg'
import { useState } from 'react';

function Page() {

    const [displayPassword, setDisplayPassword] = useState<boolean>(false)
  return (
    <main className="sign-in">
        <section className="left">
            <img src={logo} alt="logo" className='logo' />
            <img src={banner} alt="" className="banner" />
        </section>
        <section className="right">
            <form action="" className="form">
                <h1>Welcome</h1>
                <h4>Enter details to login</h4>

                <div className="input-container">
                    <input type="text" name="" placeholder='Email' id="" />
                </div>
                <div className="input-container password-cont">
                    <input type={displayPassword ? 'text' : 'password'} placeholder='Password' name="" id="" />
                    <span className="toggle" onClick={() => setDisplayPassword(prev => !prev)}>{displayPassword ? 'HIDE' : 'SHOW'}</span>
                </div>

                <Link to="" className='forgot-pass'>FORGOT PASSWORD?</Link>

                <button className="log-in-btn">LOG IN</button>
            </form>
        </section>
    </main>
  )
}

export default Page