import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatIcon from '../../Assets/ChatIcon'
import { userContext } from '../Context/Context'
import {contextForChat} from '../Context/ContextForChatBox'
// redux part start
import { useSelector} from 'react-redux'
// redux part start end
import './Chatbox1.css'

function Chatbox1({ user, setChat }) {
    
    // redux part start
    const { loadedusers} = useSelector((state) => state.user)
    // redux part start end
    const [otherUsers, setOtherUsers] = useState([])
    const [isExpand, setIsExpand] = useState(false)
    const chat = useRef()
    const { setChatBox1,chatBox2 } = useContext(contextForChat)

// to expand chat box when clicked on it
    const handleExpansion = () => {
        setIsExpand((x) => !x)
    }

 // to hide chat box when clicked outside
    const handleClick = (e) => {
        
        if (!chat.current.contains(e.target) ) {
            setIsExpand(false)
        }
    }

    useEffect(() => {

        // to filter out current user from the list 
        const result = loadedusers.filter(x => x.id !== user.id)
        setOtherUsers(result)
        
        // to hide chat pop up on clicking outside
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [])

    useEffect(() => {
        setChatBox1(chat)
    })
    
    return (
        <div ref={chat} className={`${isExpand ? 'chatbox1 expand-chat' : 'chatbox1'}`}>
            <div className='box-head' onClick={handleExpansion}>
                <div className='head-1st-elm'>
                    < ChatIcon />
                    <span>Chats</span>
                </div>
                <div className={`arrow ${isExpand ? 'arrow-expanded':undefined}`}>

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
                        <div className={`${x.id % 2 === 0 ? 'online-status' : 'offline'}`}>
                        </div>
                    </div>
                )
                )}

            </div>
        </div>
    )
}

export default Chatbox1
