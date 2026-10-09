import { useState } from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route  path='/' element={<Home/>} />
        <Route  path='/about-Tehreem' element={<About/>} />
        <Route  path='/services' element={<Services/>} />
        <Route path='/my-projects' element={<Projects/>} />
        <Route path='/contact-me'  element={<Contact/>} />



      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
