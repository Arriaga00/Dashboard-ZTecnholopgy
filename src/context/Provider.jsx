import { useState } from 'react'
import Context from './Context'

const Provider = ({children}) => {
    const [infoUser, setInfoUser] = useState()
    
  return (
    <>
        <Context.Provider value={{infoUser, setInfoUser}}>
            {children}
        </Context.Provider>
    </>
  )
}

export default Provider