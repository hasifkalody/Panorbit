import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// redux part start
import { useSelector} from 'react-redux'
// redux part start end
import './ProfileCard.css'

function ProfileCard({ user }) {

    // redux part start
    const { loadedusers} = useSelector((state) => state.user)
    // redux part start end
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
