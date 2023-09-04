import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'

const Detalle = () => {
  const [recipe, setRecipe] = useState({})
  const {favs, setFavs} = useRecipeStates()
  console.log(favs)
  const {id} = useParams()
  console.log(id)

  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=68d481a0fbc340308fbf934f836ee8c6`

  useEffect(() => {
    axios(url)
    .then(res => setRecipe(res.data))
  }, [])

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="" />
      <button onClick={() => setFavs([...favs, recipe])}>⭐</button>
    </div>
  )
}

export default Detalle