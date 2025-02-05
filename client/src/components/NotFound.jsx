import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div>404 Not Found!</div>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    )
}

export default NotFound