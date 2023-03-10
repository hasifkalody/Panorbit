import React, { useContext } from 'react'
import './HomePage.css'
import {userContext} from '../Context/Context'
import ProfileCard from '../ProfileCard/ProfileCard'
function HomePage() {
    const { user, setuser } = useContext(userContext)
    return (
        <div className='profile-contaier'>
            <div className='profile-left'>
                <div className='profile-inner'>
                    <div className='profile-inner-el active'><span>Profile</span>
                        {/* <div className='indicator-2el'>
                    <div className='indicator-1el'></div>
                    <div className='indicator-3el'></div>
                    </div> */}
                    </div>
                    <div className='profile-inner-el'><span>Posts</span> </div>
                    <div className='profile-inner-el'><span>Gallery</span> </div>
                    <div className='profile-inner-el'><span>ToDo</span> </div>
                </div>
            </div>
            <div className='profile-right'>
                <div className='right-first-el'>
                    <span>Profile</span>
                    <div className='first-el-rght'>
                        <img src={user.profilepicture} alt="profilepicture" />
                        <span>{user.name}</span>
                    </div>
                    <ProfileCard/>

                </div>
                <div className='right-second-el'>
                    <div className='rgt-scnd-el-left'></div>
                    <div className='rgt-scnd-el-right'></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
