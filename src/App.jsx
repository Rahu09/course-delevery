import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './components/Landing'
import Signup from './components/Signup'
import Login from './components/Login'
import Course from './components/Course'
import Purchased from './components/Purchased'
import AllCourses from './components/AllCourses'
import Header from './components/Header'
import Nopage from './components/Nopage'

function App() {
  return (<>
    <Router>
      <Header />
      <Routes>
        <Route path='/nopage' element={<Nopage />} />
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/courses/:id' element={<Course />} />
        <Route path='/courses/purchased' element={<Purchased />} />
        <Route path='/Courses' element={<AllCourses />} />
      </Routes>
    </Router>
  </>
  )
}

export default App
