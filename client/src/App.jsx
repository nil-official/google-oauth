import './App.css'
import { useState } from 'react'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RefreshHandler from './components/RefreshHandler'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const OAuthWrapper = ({ children }) => (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<OAuthWrapper><Login /></OAuthWrapper>} />
        <Route path="/register" element={<OAuthWrapper><Register /></OAuthWrapper>} />

        {/* Private Routes */}
        <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
