import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './globals.css'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'
import AboutPage from './components/AboutPage'
import PageTransition from './components/PageTransition'
import { LanguageProvider } from './contexts/LanguageContext'

// AnimatedRoutes component to handle route transitions
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <AboutPage />
          </PageTransition>
        } />
        <Route path="/chat" element={
          <PageTransition>
            <ChatPage />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </LanguageProvider>
  </React.StrictMode>
)