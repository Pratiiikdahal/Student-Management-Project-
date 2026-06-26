import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Addstudents from '../Pages/Addstudents'
import EditStudents from '../Pages/EditStudents'
import NotFound from '../Pages/NotFound'
import LoginPage from '../Pages/LoginPage'
import Signup from '../Pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
import '../Components/ProtectedRoutes'
import ProtectedRoutes from '../Components/ProtectedRoutes'
import Landing from '../Pages/Landing'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
         
            <Route path='/home' element={<ProtectedRoutes>
                                            <Home/>
                                          </ProtectedRoutes>
                                         }/>
          
         <Route path='/add-student' element={<Addstudents/>}/>
         <Route path='/edit-student/:id' element={<EditStudents/>}/>
         <Route path="*" element={<NotFound/>}/>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
