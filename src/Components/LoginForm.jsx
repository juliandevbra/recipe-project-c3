import React from 'react'

const LoginInput = ({handleClick}) => {
  return (
    <div>
        <h1>Debe loguearse</h1>
    
          <input role='email' type="text" />
          <input data-testid='password' type="text" />
          <button onClick={handleClick}>Enviar</button>
        
    </div>
  )
}

export default LoginInput