import { Link, useNavigate } from 'react-router-dom'
import banner from "../assets/sign-in.svg";
import logo from '../assets/logo.svg'
import { useState } from 'react';

type Form = {
  email?: string,
  password?: string
}
function Login() {

    const navigate = useNavigate()

    const [displayPassword, setDisplayPassword] = useState<boolean>(false)

    const [formData, setFormData] = useState<Form>({
      email: "",
      password: ""
    })

    const [error, setError] = useState<Form>()

    function logInFormSubmit(e:React.FormEvent){
      e.preventDefault()

      if(validate())
      navigate("/users")
    }

    const validate = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,20}$/

      
      const newErrors = {
        email: "",
        password: ""
      }

      if(!formData.email){
        newErrors.email = "email is required"
      } else if(!emailRegex.test(formData.email)){
        newErrors.email = "this is an invalid email"
      }

      if(!formData.password){
        newErrors.password = "password is required"
      } else if(!passwordRegex.test(formData.password)){
        newErrors.password = "password will take letters and numbers"
      }

      setError(newErrors)

      return Object.values(newErrors).every(x => x === "")
    }



    function updateForm(e: React.ChangeEvent<HTMLInputElement>){
      const {name, value} = e.target

      setFormData((prev) => {
        return {...prev, [name]: value}
      })

      setError((prev) => {
        return {...prev, [name]: ''}
      })
    }


  return (
    <main id="sign-in">
      <img src={logo} alt="logo" className="logo-img" />
      <div className="sign-in-main">
        <section className="left">
            <img src={banner} alt="" className="banner" />
        </section>
        <section className="form-section">
            <form action="" className="form" onSubmit={logInFormSubmit}>
                <h1>Welcome</h1>
                <h4>Enter details to login</h4>

                <div className="input-container">
                    <input type="text" name="email" placeholder='Email' id="" value={formData.email} onChange={updateForm}/>
                    <p className="error">{error?.email}</p>
                </div>
                <div className="input-container">
                  <div className="password-cont">
                    <input type={displayPassword ? 'text' : 'password'} placeholder='Password' name="password" id="" value={formData.password} onChange={updateForm}/>
                    <span className="toggle" onClick={() => setDisplayPassword(prev => !prev)}>{displayPassword ? 'HIDE' : 'SHOW'}</span>
                  </div>
                  <p className="error">{error?.password}</p>
                </div>

                <Link to="" className='forgot-pass'>FORGOT PASSWORD?</Link>

                <button className="log-in-btn">LOG IN</button>
            </form>
        </section>
      </div>
    </main>
  )
}


export default Login