import { Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './Clase 14/Counter'
import UserList from './Clase 14/UserList'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Detalle from './Pages/Detalle'
import Home from './Pages/Home'


function App() {

  
  return (
    <>
    {/* <Counter/> */}
    <UserList/>
      {/* <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/recipe/:id' element={<Detalle/>}/>
      </Routes>  */}
   </>
  )
}

export default App
