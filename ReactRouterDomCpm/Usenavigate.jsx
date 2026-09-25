
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Usenavigate = () => {

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/home')
    }

    return (
        <div>
            <button onClick={goToHome}>
                GO to home
            </button>
        </div>
    )
}

export default Usenavigate
