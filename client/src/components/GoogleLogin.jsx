import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';

const GoogleLogin = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const responseGoogle = async (authResult) => {
        try {
            if (authResult["code"]) {
                const result = await axios.get(`/auth/google?code=${authResult.code}`);
                const { email, name, avatar } = result.data.user;
                const token = result.data.token;
                const obj = { email, name, avatar, token };
                localStorage.setItem('user', JSON.stringify(obj));
                navigate('/dashboard');
            } else {
                console.log(authResult);
                throw new Error(authResult);
            }
        } catch (e) {
            console.log('Error while Google Login...', e);
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code',
    });

    return (
        <div>
            <button onClick={googleLogin}>Continue with Google</button>
        </div>
    )
}

export default GoogleLogin