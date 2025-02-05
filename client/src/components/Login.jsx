import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ handleGoogleLogin }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>Login</h2>
            <form>
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
                    <p>Not registered? <Link to="/register">Register here</Link></p>
                </div>
                <div>
                    <button type="submit" onClick={handleLogin}>Login</button>
                </div>
            </form>
            <div>
                <h3>Or</h3>
                <button onClick={handleGoogleLogin}>Continue with Google</button>
            </div>
        </div>
    )
}

export default Login