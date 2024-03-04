import './App.css'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App