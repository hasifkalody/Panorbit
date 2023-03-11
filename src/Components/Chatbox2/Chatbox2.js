import React, { useEffect, useRef, useState } from 'react'
import { messages } from '../../Assets/messages'
import './Chatbox2.css'
function Chatbox2({ chat, setChat }) {
    const { name, profilepicture } = chat
    const [condensedChatBox, setCondensedChatBox] = useState(false)
    // For identifying user while iterating.Identification is done in order to allign text messages on left or right in accordance with the user who sent it
    let previousMessenger = null

    const handleChatBox = () => {
        setCondensedChatBox((x) => !x)
    }

    return (
        <div className={`chatbox1 chatbox2 ${condensedChatBox && 'condense-chat-box '}`}>
            <div className='box-head2'>
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
                    if (x.id == 'user1') {
                        if (x.id == previousMessenger) {
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

                        if (x.id == previousMessenger) {
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
