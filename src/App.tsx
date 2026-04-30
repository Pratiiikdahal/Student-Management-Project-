import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Addstudents from '../Pages/Addstudents'
import EditStudents from '../Pages/EditStudents'
import NotFound from '../Pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/add-student' element={<Addstudents/>}/>
         <Route path='/edit-student/:id' element={<EditStudents/>}/>
         <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
