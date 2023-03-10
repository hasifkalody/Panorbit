import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios'
import './LandingPgCard.css'
import {userContext} from '../Context/Context'
import {useNavigate } from 'react-router-dom'
function LandingPgCard() {
    const { user, setuser,setLoadedusers } = useContext(userContext)
    const Navigate=useNavigate()
    const [users, setusers] = useState([])
    const handleClick=(x)=>{
        setuser(x)
        Navigate('/homepage')
    }
    useEffect(() => {
        axios.get('https://panorbit.in/api/users.json')
            .then(response =>{
                setusers(response.data.users)
                setLoadedusers(response.data.users)
            })
            .catch(err =>{
                throw err
            })

    }, [])
    return (
        <div className='landing-card-main'>
            <div className='landing-card-heading'>
                <span>Select an account</span>
            </div>
            <div className='landing-card-body'>
                {users.map(x=>
                (<div className='landing-card-list' key={x.id}>
                    <img src={x.profilepicture}alt="profilepicture" onClick={()=>{handleClick(x)}} />
                    <div className='landing-card-user' onClick={()=>{handleClick(x)}}><span>{x.name}</span></div>
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default LandingPgCard
