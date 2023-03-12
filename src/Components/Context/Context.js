import React, { createContext, useState } from 'react'

const userContext = createContext()
function Context({children}) {

    const [user, setuser] = useState({})
    const [loadedusers, setLoadedusers] = useState([])

    return (
        <userContext.Provider value={{ user, setuser,loadedusers, setLoadedusers }}>
            {children}
        </userContext.Provider>
    )
}

export default Context
export {userContext}
