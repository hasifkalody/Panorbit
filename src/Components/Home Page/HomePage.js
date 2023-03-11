import React, { useContext, useEffect, useRef, useState } from 'react'
import './HomePage.css'
import { userContext } from '../Context/Context'
import MapContainer from '../Map/Map'
import ProfileCard from '../ProfileCard/ProfileCard'
import Chatbox1 from '../Chatbox1/Chatbox1'
import Chatbox2 from '../Chatbox2/Chatbox2'
import { useNavigate } from 'react-router-dom'
function HomePage({pageName}) {
    const Navigate=useNavigate()
    const { user, setuser } = useContext(userContext)
    const [showProfileCard, setShowProfileCard] = useState(false)
    const [chat, setChat] = useState({})
    const profileBadge = useRef(null)
    const handleProfileCard = () => {
        setShowProfileCard((x) => !x)
    }
    const handleClick = (e) => {
        if (!profileBadge.current.contains(e.target)) {
            setShowProfileCard(false)
        }
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
                    <div className='profile-inner-el active'  onClick={()=>{Navigate('/homepage')}}><span>{pageName}</span>
                        {/* <div className='indicator-2el'>
                    <div className='indicator-1el'></div>
                    <div className='indicator-3el'></div>
                    </div> */}
                    </div>
                    <div className='profile-inner-el' onClick={()=>{Navigate('/posts')}}><span>Posts</span> </div>
                    <div className='profile-inner-el' onClick={()=>{Navigate('/gallery')}}><span>Gallery</span> </div>
                    <div className='profile-inner-el' onClick={()=>{Navigate('/ToDo')}}><span>ToDo</span> </div>
                </div>
            </div>
            <div className='profile-right'>
                <div className='right-first-el'>
                    <span>Profile</span>
                    <div ref={profileBadge} className='first-el-rght' onClick={handleProfileCard}>
                        <img src={user.profilepicture} alt="profilepicture" />
                        <span>{user.name}</span>
                    </div>
                    {showProfileCard && <ProfileCard user={user} />}

                </div>
                <div className='right-second-el'>
                    <div className='rgt-scnd-el-left'>
                        <img src={user.profilepicture} alt="" />
                        <span>{user.name}</span>
                        <div className='rgt-scnd-el-lft-container1'>
                            <div className='rgt-scnd-el-lft-keys'>
                                <div className='keys-container-main'>
                                    <div className='keys-container'>
                                        <span className='left-key'>Username</span>
                                        <span>:</span>
                                    </div>
                                    <span className='left-value'>{user.username}</span>
                                </div>
                                <div className='keys-container-main'>
                                    <div className='keys-container'>
                                        <span className='left-key'>e-mail </span>
                                        <span>:</span>
                                    </div>
                                    <span className='left-value'>{user.email}</span>
                                </div>
                                <div className='keys-container-main'>
                                    <div className='keys-container'>
                                        <span className='left-key'>Phone </span>
                                        <span>:</span>
                                    </div>
                                    <span className='left-value'>{user.phone}</span>
                                </div>
                                <div className='keys-container-main'>
                                    <div className='keys-container'>
                                        <span className='left-key'>Website </span>
                                        <span>:</span>
                                    </div>
                                    <span className='left-value'>{user.website}</span>
                                </div>
                            </div>
                        </div>
                        <div className='line'>
                            <span>Company</span>
                        </div>
                        <div className='rgt-scnd-el-lft-keys'>
                            <div className='keys-container-main'>
                                <div className='keys-container'>
                                    <span className='left-key'>Name</span>
                                    <span>:</span>
                                </div>
                                <span className='left-value'>{user.company.name}</span>
                            </div>
                            <div className='keys-container-main'>
                                <div className='keys-container'>
                                    <span className='left-key'>catchPhrase</span>
                                    <span>:</span>
                                </div>
                                <span className='left-value'>{user.company.catchPhrase}</span>
                            </div>
                            <div className='keys-container-main'>
                                <div className='keys-container'>
                                    <span className='left-key'>bs</span>
                                    <span>:</span>
                                </div>
                                <span className='left-value'>{user.company.bs}</span>
                            </div>
                        </div>
                    </div>
                    <div className='rgt-scnd-el-right'>
                        <span>Address</span>
                        <div className='rgt-scnd-el-lft-keys'>
                            <div className='keys-container-main'>
                                <div className='keys-container'>
                                    <span className='left-key'>Street</span>
                                    <span>:</span>
                                </div>
                                <span className='left-value'>{user.address.street}</span>
                            </div>
                            <div className='keys-container-main'>
                                <div className='keys-container'>
                                    <span className='left-key'>Suite</span>
                                    <span>:</span>
                                </div>
                                <span className='left-value'>{user.address.suite}</span>
                            </div>
                            <div className='keys-container-main'>
                                <div className='keys-container'>
                                    <span className='left-key'>City</span>
                                    <span>:</span>
                                </div>
                                <span className='left-value'>{user.address.city}</span>
                            </div>
                            <div className='keys-container-main'>
                                <div className='keys-container'>
                                    <span className='left-key'>Zipcode</span>
                                    <span>:</span>
                                </div>
                                <span className='left-value'>{user.address.zipcode}</span>
                            </div>
                        </div>
                        {/* <MapContainer lat={user.address.geo.lat} lng={user.address.geo.lng} /> */}
                        <div className='google-marking'>
                            <img src="/images/map.jpg" alt="location" />
                            <div className='markings'> 
                                <div className='lat-lng-marking'>
                                    <span className='loc-key'>Lat:</span>
                                    <span className='loc-value'>{user.address.geo.lat}</span>
                                </div>
                                <div className='lat-lng-marking'>
                                    <span className='loc-key'>Long:</span>
                                    <span className='loc-value'>{user.address.geo.lng}</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Chatbox1 user={user} setChat={setChat} />
            {chat.name && <Chatbox2 chat={chat} setChat={setChat} />}
        </div>
    )
}

export default HomePage
