import React, { createContext, useState } from 'react'
const userContext = createContext()
function Context({children}) {
    const [user, setuser] = useState({})
    return (
        <userContext.Provider value={{ user, setuser }}>
            {children}
        </userContext.Provider>
    )
}

export default Context
export {userContext}
