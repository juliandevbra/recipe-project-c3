import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const lista = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
        <ul>
            {lista.map(element => <Link to={'/element/' + element} key={element}><li>{element}</li></Link>)}
        </ul>
    </div>
  )
}

export default Home