import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatIcon from '../../Assets/ChatIcon'
import { userContext } from '../Context/Context'
import './Chatbox1.css'

function Chatbox1({ user, setChat }) {
    
    const { loadedusers } = useContext(userContext)
    const [otherUsers, setOtherUsers] = useState([])
    const [isExpand, setIsExpand] = useState(false)
    const chat = useRef()

// to expand chat box when clicked on it

    const handleExpansion = () => {
        setIsExpand((x) => !x)
    }

 // to hide chat box when clicked outside

    const handleClick = (e) => {
        if (!chat.current.contains(e.target)) {
            setIsExpand(false)
        }
    }

    useEffect(() => {
        const result = loadedusers.filter(x => x.id != user.id)
        setOtherUsers(result)
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [])
    
    return (
        <div ref={chat} className={`${isExpand ? 'chatbox1 expand-chat' : 'chatbox1'}`}>
            <div className='box-head' onClick={handleExpansion}>
                <div className='head-1st-elm'>
                    < ChatIcon />
                    <span>Chats</span>
                </div>
                <div className={`arrow ${isExpand && ' arrow-expanded'}`}>

                </div>
            </div>
            <div className='chatbox-list-main'>
                {otherUsers.map((x) =>
                (
                    <div key={x.id} className='chatbox-list' onClick={() => { setChat(x) }}>
                        <div className='list-user'>
                            <img src={x.profilepicture} alt="profilepicture" />
                            <span> {x.name}</span>
                        </div>
                        <div className={`${x.id % 2 == 0 ? 'online-status' : 'offline'}`}>
                        </div>
                    </div>
                )
                )}

            </div>
        </div>
    )
}

export default Chatbox1
