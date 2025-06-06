import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChatBox from './ChatBox';
import IntakeForm from './IntakeForm';
import TranslatedText from './TranslatedText';

function ChatPage() {
  const [mode, setMode] = useState('chat'); // 'chat' or 'intake'
  const [messages, setMessages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Handle language change
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  // Handle GPT response
  async function handleGPTResponse(prompt) {
    const response = await fetch("/api/llm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const { text } = await response.json();
    return text;
  }

  // Handle message sending in chat mode
  const handleSendMessage = async (message, currentMessages) => {
    return await handleGPTResponse(message);
  };

  // Handle form submission in intake mode
  const handleIntakeSubmit = async (prompt, mainSymptom) => {
    // Get response from GPT
    const response = await handleGPTResponse(prompt, mainSymptom);
    
    // Add the initial message pair to the chat
    setMessages([
      { sender: 'user', text: `I'm experiencing ${mainSymptom}.` },
      { sender: 'bot', text: response }
    ]);
    
    // Switch to chat mode
    setMode('chat');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-10 py-3 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-red-600 hover:text-red-700 transition-colors" aria-label="Back to homepage">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Back</span>
            </Link>
            <div className="flex items-center space-x-2">
              <img src="/reachmed-logo.svg" alt="ReachMed Logo" className="h-8 w-8" />
              <h1 className="text-lg font-bold text-red-600">ReachMed</h1>
            </div>
          </div>
          
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Select language"
            >
              <option value="English">English</option>
              <option value="Spanish">Español</option>
              <option value="Vietnamese">Tiếng Việt</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Mode Selection Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex space-x-1 pt-4">
            <button
              onClick={() => setMode('chat')}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                mode === 'chat' 
                  ? 'bg-red-100 text-red-700 border-t border-l border-r border-gray-200' 
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              Start Chat Directly
            </button>
            <button
              onClick={() => setMode('intake')}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                mode === 'intake' 
                  ? 'bg-red-100 text-red-700 border-t border-l border-r border-gray-200' 
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              Use Symptom Questionnaire
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden p-4 md:p-6">
        <div className="max-w-3xl mx-auto h-full flex flex-col">
          {mode === 'chat' ? (
            <ChatBox 
              initialMessages={messages} 
              onSendMessage={handleSendMessage} 
            />
          ) : (
            <IntakeForm onSubmit={handleIntakeSubmit} />
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            ⚠️ This assistant is not a licensed medical provider. Always consult a healthcare professional for medical issues.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
