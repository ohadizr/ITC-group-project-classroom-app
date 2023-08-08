import React from 'react'
import  { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { AuthContextProvider } from '../content/contexts/AuthContext.jsx';
import PopupApp from './PopupApp.jsx'
// import { AuthContext } from 'itc-classroom/src/contexts/AuthContext.jsx';
import './Popup.css'


export default function Popup () {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  
  return (
  <>

  <PopupApp />

  </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('react-target'))
root.render(
  <AuthContextProvider>
<Popup />
</AuthContextProvider>
)
