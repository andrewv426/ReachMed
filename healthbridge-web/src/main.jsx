import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './globals.css'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'
import AboutPage from './components/AboutPage'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)