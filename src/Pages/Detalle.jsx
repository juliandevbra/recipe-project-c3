import React from 'react'
import { useParams } from 'react-router-dom'

const Detalle = () => {

  const params = useParams()
  console.log(params)

  return (
    <div>
      <h1>{params.elemento}</h1>
    </div>
  )
}

export default Detalle