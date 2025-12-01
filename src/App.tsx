import {  } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import GeneralDetails from './pages/GeneralDetails'
import Users from './pages/Users'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='details/:id' element={<GeneralDetails />} />
          <Route path='users' element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
