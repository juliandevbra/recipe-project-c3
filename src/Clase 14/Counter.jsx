import { useState } from 'react'
import { useReducer } from 'react'
import { reducer } from './countReducer'


const initialState = {count: 0}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [number, setNumber] = useState(0)
  return (
    <div>
        <h1>{state.count}</h1>
        <button disabled={state.count==0} onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type: '42', payload: 42})}>42</button>
        <input type="number" onChange={(e) => setNumber(e.target.value)}/>
        <button onClick={() => dispatch({type: 'random', payload: number})}>{number}</button>
    </div>
  )
}

export default Counter