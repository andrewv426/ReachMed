import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import TranslatedText from '../TranslatedText';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/reachmed-logo.svg" alt="ReachMed Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold text-red-600">ReachMed</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isHomePage && <Link to="/" className="text-gray-700 hover:text-red-600 font-medium py-2"><TranslatedText textKey="nav.home" /></Link>}
            <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium py-2"><TranslatedText textKey="nav.about" /></Link>
            <Link 
              to="/chat" 
              className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
              aria-label="Start a chat with ReachMed"
            >
              <TranslatedText textKey="nav.startChat" />
            </Link>
            <LanguageSelector />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg 
              className="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pb-4">
              {!isHomePage && <Link to="/" className="text-gray-700 hover:text-red-600 font-medium"><TranslatedText textKey="nav.home" /></Link>}
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium"><TranslatedText textKey="nav.about" /></Link>
              <Link 
                to="/chat" 
                className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-colors text-center"
                aria-label="Start a chat with ReachMed"
              >
                <TranslatedText textKey="nav.startChat" />
              </Link>
              <div className="mt-2">
                <LanguageSelector />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
