import React, { useEffect, useRef, useState } from 'react'
import './Chatbox2.css'
function Chatbox2({ chat,setChat }) {
    const [isExpand, setIsExpand] = useState(false)
    const { name, profilepicture } = chat
    const chatBox = useRef(null)

    return (
        <div ref={chatBox} className='chatbox1 chatbox2'>
            <div className='box-head2'>
                <div className='head-1st-elm elm-img'>
                    <img src={profilepicture} alt="profilepicture" />
                    <span>{name}</span>
                </div>
                <div className='head-2nd-elm'>
                    <div className={`${isExpand ? 'arrow arrow-allign' : 'arrow arrow-allign arrow-unexpanded'}`}></div>
                    <div className='cross-icon 'onClick={()=>{setChat({})}}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatbox2
