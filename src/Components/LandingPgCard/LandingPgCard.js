import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// redux part start
import {useDispatch} from 'react-redux'
import {addUser,setLoadedusers} from '../../Redux/user'
// redux part end

import './LandingPgCard.css'

function LandingPgCard() {

    // redux part start
    const dispatch=useDispatch()
    // redux part end

    const [users, setusers] = useState([])

    // const {setuser, setLoadedusers } = useContext(userContext)
    const Navigate = useNavigate()

    // to provide routing action.
    const handleClick = (x) => {
        dispatch(addUser(x))
        Navigate('/homepage')
    }

    useEffect(() => {
        axios.get('https://panorbit.in/api/users.json')
            .then(response => {
                setusers(response.data.users)
                dispatch(setLoadedusers(response.data.users))
            })
            .catch(err => {
                throw err
            })

    }, [])

    return (
        <div className='landing-card-main'>
            <div className='landing-card-heading'>
                <span>Select an account</span>
            </div>
            <div className='landing-card-body'>
                {users.map(x =>
                (<div className='landing-card-list' key={x.id}>
                    <img src={x.profilepicture} alt="profilepicture" onClick={() => { handleClick(x) }} />
                    <div className='landing-card-user' onClick={() => { handleClick(x) }}><span>{x.name}</span></div>
                </div>
                ))}

            </div>
        </div>
    )
}

export default LandingPgCard
