import React, { useEffect, useRef, useState } from 'react'
import { messages } from '../../Assets/messages'
import './Chatbox2.css'

function Chatbox2({ chat, setChat }) {
    
    const { name, profilepicture } = chat
    const [condensedChatBox, setCondensedChatBox] = useState(false)
    const chatConsole = useRef(null)

// For identifying user while iterating.Identification is done in order to allign text messages on left or right in accordance with the user who sent it

    let previousMessenger = null

// to expand chat box when clicked on it

    const handleExpansion = () => {
        setCondensedChatBox((x) => !x)
    }
// to hide chat box when clicked outside

    const handleChatBox = (e) => {
        if (!chatConsole.current.contains(e.target)) {
            setCondensedChatBox((x) => true)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleChatBox)
        return () => {
            document.removeEventListener('mousedown', handleChatBox);
        };
    }, [])

    return (
        <div ref={chatConsole} className={`chatbox1 chatbox2 ${condensedChatBox && 'condense-chat-box '}`}>
            <div className='box-head2' onClick={handleExpansion}>
                <div className='head-1st-elm elm-img'>
                    <img src={profilepicture} alt="profilepicture" />
                    <span>{name}</span>
                </div>
                <div className='head-2nd-elm'>
                    <div className={`arrow arrow-allign ${condensedChatBox && 'arrow-condensed'}`} onClick={handleChatBox}></div>
                    <div className='cross-icon ' onClick={() => { setChat({}) }}>
                    </div>
                </div>
            </div>
            <div className='chats'>
                {messages.map(x => {
                    if (x.id === 'user1') {
                        if (x.id === previousMessenger) {
                            previousMessenger = x.id
                            return (
                                <div className='messages-type3'>
                                    <span>{x.message}</span>
                                </div>
                            )
                        }
                        else {
                            previousMessenger = x.id
                            return (
                                <>
                                    <div className='time'><span>{x.time}</span></div>
                                    <div className='messages-type1'>
                                        <span>{x.message}</span>
                                        <div className='arrow-fr-msg1'>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    }
                    else {

                        if (x.id === previousMessenger) {
                            previousMessenger = x.id
                            return (
                                <div className='messages-type4'>
                                    <span>{x.message}</span>
                                </div>
                            )
                        }
                        else {
                            previousMessenger = x.id
                            return (
                                <>
                                    <div className='time'><span>{x.time}</span></div>
                                    <div className='messages-type2'>
                                        <span>{x.message}</span>
                                        <div className='arrow-fr-msg2'>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    }
                })
                }
            </div>
            <div className='chat-content'>
                <div className='arrow-send'>

                </div>
            </div>
        </div>
    )
}

export default Chatbox2
