import React, { useContext, useEffect, useRef, useState } from 'react'
import '../Home Page/HomePage.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import { userContext } from '../Context/Context'
import Chatbox1 from '../Chatbox1/Chatbox1'
import Chatbox2 from '../Chatbox2/Chatbox2'
import { useNavigate } from 'react-router-dom'
import './ComingSoonPage.css'

function ComingSoonPage({ pageName }) {

    const Navigate = useNavigate()
    const { user} = useContext(userContext)
    const [showProfileCard, setShowProfileCard] = useState(false)
    const [chat, setChat] = useState({})
    const profileBadge = useRef(null)

    // to toggle between hiding and showing of profile card.

    const handleClick = (e) => {
        if (!profileBadge.current.contains(e.target)) {
            setShowProfileCard(false)
        }
    }

    // to hide profile card on clickin outside of it.

    const handleProfileCard = () => {
        setShowProfileCard((x) => !x)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [])

    return (
        <div className='profile-contaier'>
            <div className='profile-left'>
                <div className='profile-inner'>
                    <div className='pageNames'>
                        <div className='profile-inner-el' onClick={() => { Navigate('/homepage') }}>
                            <span>Profile</span>
                        </div>
                    </div>
                    <div className='pageNames'>
                        <div className='profile-inner-el' onClick={() => { Navigate('/posts') }}>
                            <span className={pageName === 'Posts' ? 'active' :undefined}>Posts</span>
                        </div>
                        {pageName === 'Posts' ?
                            (<div className='indicator-2el'>
                                <img src="/images/activeIndicator.png" alt="activeIndicator" />
                            </div>
                            ) :undefined
                        }

                    </div>
                    <div className='pageNames'>
                        <div className='profile-inner-el' onClick={() => { Navigate('/gallery') }}>
                            <span className={pageName === 'Gallery' ? 'active':undefined}>Gallery</span>
                        </div>
                        {pageName === 'Gallery' ?
                            (<div className='indicator-2el'>
                                <img src="/images/activeIndicator.png" alt="activeIndicator" />
                            </div>
                            ):undefined
                        }
                    </div>
                    <div className='pageNames'>
                        <div className='profile-inner-el' onClick={() => { Navigate('/ToDo') }}>
                            <span className={pageName === 'ToDo' ? 'active':undefined}>ToDo</span>
                        </div>
                        {pageName === 'ToDo' ?
                            (<div className='indicator-2el'>
                                <img src="/images/activeIndicator.png" alt="activeIndicator" />
                            </div>
                            ):undefined
                        }
                    </div>
                </div>
            </div>
            <div className='profile-right'>
                <div className='right-first-el'>
                    <span>{pageName}</span>
                    <div ref={profileBadge} className='first-el-rght' onClick={handleProfileCard}>
                        <img src={user.profilepicture} alt="profilepicture" />
                        <span>{user.name}</span>
                    </div>
                    {showProfileCard ? <ProfileCard user={user} />:undefined}

                </div>
                <div className='response-text'>
                    <span>Coming Soon</span>
                </div>

            </div>
            <Chatbox1 user={user} setChat={setChat} />
            {chat.name ? <Chatbox2 chat={chat} setChat={setChat} />:undefined}
        </div>
    )
}

export default ComingSoonPage
