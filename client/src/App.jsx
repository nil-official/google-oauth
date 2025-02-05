import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

function App() {

  const handleGoogleLogin = () => {
    console.log("Google Login Triggered");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login handleGoogleLogin={handleGoogleLogin} />} />
        <Route path="/register" element={<Register handleGoogleLogin={handleGoogleLogin} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
