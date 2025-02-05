import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('user');
    const userData = JSON.parse(data);
    setUserInfo(userData);
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <h2>Welcome {userInfo?.name}</h2>
        <h3>{userInfo?.email}</h3>
        <img src={userInfo?.avatar} alt={userInfo?.name} />
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Dashboard