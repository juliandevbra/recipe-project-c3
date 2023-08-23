import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const CatFetch = () => {

    const [gatito, setGatito] = useState({})
    const [toggle, setToggle] = useState(false)
    const url = 'https://api.thecatapi.com/v1/images/search'

    useEffect(() => {
        // axios(url)
        // .then(res => setGatito(res.data[0]))

        const fetchData = async () => {
            try {
                let res = await axios(url)
                setGatito(res.data[0])
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    }, [toggle])
   

  return (
    <div>
        <img src={gatito.url} alt="" />
        <button onClick={() => setToggle(!toggle)}>Cambiar gatito</button>
    </div>
  )
}

export default CatFetch