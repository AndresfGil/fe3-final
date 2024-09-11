import axios from 'axios'
import { createContext, useContext, useEffect, useReducer } from 'react'

export const initialState = { theme: true, data: [], favs: [] }

export const ContextGlobal = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: !state.theme }
    case 'SET_DATA':
      return { ...state, data: action.payload }
    case 'FAV_ACTION':
      const favExists = state.favs.includes(action.payload)

      const updatedFavs = favExists
        ? state.favs.filter((id) => id !== action.payload)
        : [...state.favs, action.payload]

      return { ...state, favs: updatedFavs }
    default:
      throw new Error()
  }
}

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: 'SET_DATA', payload: res.data })
    })
  }, [])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default Context

export const useContextGlobal = () => useContext(ContextGlobal)
