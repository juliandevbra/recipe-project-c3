import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    
  const [lista, setLista] = useState([])
  const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
  const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=' + apiKey
  useEffect(() => {
    axios(url)
    .then(res => setLista(res.data.recipes))
  }, []) 

  return (
    <div>
        <ul>
            {lista.map(recipe => (
            <Link to={'/recipe/' + recipe.id} key={recipe.id}>
              <li>{recipe.title}</li>
            </Link>))}
        </ul>
    </div>
  )
}

export default Home