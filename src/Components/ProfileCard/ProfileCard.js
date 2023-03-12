import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../Context/Context'
import { useNavigate } from 'react-router-dom'
import './ProfileCard.css'

function ProfileCard({ user }) {

    const { loadedusers } = useContext(userContext)
    const { profilepicture, name, username, id } = user
    const [otherUsers, setOtherUsers] = useState([])
    const Navigate = useNavigate()

    // to provide routing action.

    const handleSignOut = () => {
        Navigate('/')
    }

    useEffect(() => {
        const result = loadedusers.filter(x => x.id !== id)
        setOtherUsers(result)
    }, [])

    return (
        <div className='profile-card'>
            <div className='profile-card-1st'>
                <img src={profilepicture} alt="profileImage" />
                <span className='prfl-card-1st1'>{name}</span>
                <span className='prfl-card-1st2'>{username}</span>
            </div>
            <div className='other-rusers-cntnr'>
                {otherUsers.map(x => {
                    return (
                        <div key={x.id} className='profile-card-list'>
                            <img src={x.profilepicture} alt="profilepicture" />
                            <span>{x.username}</span>
                        </div>
                    )
                })}
            </div>
            <button onMouseDown={handleSignOut}>Sign out</button>


        </div>
    )
}

export default ProfileCard
