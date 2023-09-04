import React, { useState } from 'react'
import { useGlobalStates } from './Context'


const ChildComponent = () => {
  // const {salario, setSalario} = useGlobalStates()
  return (
    <div className='child'>
        <h3>ChildComponent</h3>
        <p>Cuanto ganas por semestre?</p>
        {/* <h3>Total: {salario*6} </h3> */}
        {console.log('ChildComponent')}
        
    </div>
  )
}

export default ChildComponent
