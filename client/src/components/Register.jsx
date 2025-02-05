import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from './GoogleLogin'

const Register = ({ handleGoogleLogin }) => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>Register</h2>
            <form>
                <div>
                    <label>Full Name:</label>
                    <input type="text" required
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" required
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" required
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <p>Already registered? <Link to="/login">Login here</Link></p>
                </div>
                <button type="submit" onClick={handleRegister}>Register</button>
            </form>
            <div>
                <h3>Or</h3>
                <GoogleLogin />
            </div>
        </div>
    )
}

export default Register