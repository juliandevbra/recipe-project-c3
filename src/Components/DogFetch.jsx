import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const DogFetch = () => {
    const [loading, setLoading] = useState(true)
    const [perrito, setPerrito] = useState({})
    // const [toggle, setToggle] = useState(false)
    const url = 'https://dog.ceo/api/breeds/image/random'
    
    const fetchDog = () => {
        setLoading(true)
        // fetch(url)
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log(data)
        //     setPerrito(data)
        //     setLoading(false)
        // })
        axios(url)
        .then(res => {
            setPerrito(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(fetchDog, [])
    

  return (
    <div>
        {loading ? 'Cargando perrito...' : 
        <img src={perrito.message} width={400} alt="perrito" />}
        {/* <button onClick={() => setToggle(!toggle)}>Cambiar perrito</button> */}
        <button onClick={fetchDog}>Cambiar perrito</button>
    </div>
  )
}

export default DogFetch