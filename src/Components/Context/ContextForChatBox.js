import React, { createContext, useState } from 'react'

const contextForChat= createContext()

function ContextForChatBox({children}) {

    const [chatBox1, setChatBox1] = useState({ })
    const [chatBox2, setChatBox2] = useState({ })

  return (
    <contextForChat.Provider value={{chatBox1, setChatBox1,chatBox2, setChatBox2}}>
      {children}
    </contextForChat.Provider>
  )
}

export default ContextForChatBox
export{contextForChat}
