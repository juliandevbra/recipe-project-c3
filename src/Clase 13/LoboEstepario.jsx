import React from 'react'
import { useGlobalStates } from './Context'
import lobo from './lobo.png'

const LoboEstepario = () => {
  const {salario} = useGlobalStates()
  return (
    <div className='lobo-estepario'>
        <img className='lobo' src={lobo} alt='lobo'/>
        <h3>Total: {salario*6}</h3>
        {console.log('LoboEstepario')}
    </div>
  )
} 

export default LoboEstepario