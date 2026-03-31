import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
