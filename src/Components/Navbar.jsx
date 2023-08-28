import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const enlaces = [
        {titulo: 'Home', route: '/'}, 
        {titulo: 'About', route: '/about'}, 
        {titulo: 'Contact', route: '/contact'}
    ]

    const navigate = useNavigate()

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={() => navigate(-1)}>⬅Back</button>
        {enlaces.map((enlace, indice) => (
            <Link to={enlace.route} key={indice}> 
                <h4 style={{margin: 10}} >{enlace.titulo}</h4>
            </Link>
        ))}
        {/* <Link to='/'><h4>Home</h4></Link>
        <Link to='/about'><h4>About</h4></Link>
        <Link to='/contact'><h4>Contact</h4></Link> */}
    
    </div>
  )
}

export default Navbar