import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChildComponent from './Clase 13/ChildComponent'
import LoboEstepario from './Clase 13/LoboEstepario'
import ParentComponent from './Clase 13/ParentComponent'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Detalle from './Pages/Detalle'
import Home from './Pages/Home'


function App() {
  const [salario, setSalario] = useState(150000)
  
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/recipe/:id' element={<Detalle/>}/>
      </Routes> 
   </>
  )
}

export default App
