import React, { useContext, useEffect, useRef, useState } from 'react'
import '../Home Page/HomePage.css'
import './ComingSoonPage.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import { userContext } from '../Context/Context'
import Chatbox1 from '../Chatbox1/Chatbox1'
import Chatbox2 from '../Chatbox2/Chatbox2'
import { useNavigate } from 'react-router-dom'
function ComingSoonPage({ pageName }) {
    const Navigate = useNavigate()
    const { user, setuser } = useContext(userContext)
    const [showProfileCard, setShowProfileCard] = useState(false)
    const [chat, setChat] = useState({})
    const profileBadge = useRef(null)
    const handleClick = (e) => {
        if (!profileBadge.current.contains(e.target)) {
            setShowProfileCard(false)
        }
    }
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
                    <div className='profile-inner-el active' onClick={() => { Navigate('/homepage') }}><span>Profile</span>
                        {/* <div className='indicator-2el'>
                <div className='indicator-1el'></div>
                <div className='indicator-3el'></div>
                </div> */}
                    </div>
                    <div className='profile-inner-el' onClick={() => { Navigate('/posts') }}><span>Posts</span> </div>
                    <div className='profile-inner-el' onClick={() => { Navigate('/gallery') }}><span>Gallery</span> </div>
                    <div className='profile-inner-el' onClick={() => { Navigate('/ToDo') }}><span>ToDo</span> </div>
                </div>
            </div>
            <div className='profile-right'>
                <div className='right-first-el'>
                    <span>{pageName}</span>
                    <div ref={profileBadge} className='first-el-rght' onClick={handleProfileCard}>
                        <img src={user.profilepicture} alt="profilepicture" />
                        <span>{user.name}</span>
                    </div>
                    {showProfileCard && <ProfileCard user={user} />}

                </div>
                <div className='response-text'>
                    <span>Coming Soon</span>
                </div>

            </div>
            <Chatbox1 user={user} setChat={setChat} />
            {chat.name && <Chatbox2 chat={chat} setChat={setChat} />}
        </div>
    )
}

export default ComingSoonPage
