import {useContext, createContext, useState} from 'react'

const RecipeStates = createContext()

const Context = ({children}) => {
    const [favs, setFavs] = useState([])
    
    return (
        <RecipeStates.Provider value={{favs, setFavs}}>
            {children}
        </RecipeStates.Provider>
    )
}

export default Context

export const useRecipeStates = () => useContext(RecipeStates)