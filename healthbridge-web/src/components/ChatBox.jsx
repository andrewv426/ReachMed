import { useState, useRef, useEffect } from 'react';

function ChatBox({ initialMessages = [], onSendMessage }) {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = inputValue.trim();
    const newMessages = [...messages, { sender: 'user', text: userMessage }];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);
    
    // Call the parent's onSendMessage function if provided
    if (onSendMessage) {
      try {
        const response = await onSendMessage(userMessage, newMessages);
        setMessages(prev => [...prev, { sender: 'bot', text: response }]);
      } catch (error) {
        console.error('Error getting response:', error);
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'Sorry, I encountered an error. Please try again.' 
        }]);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Simulate assistant response if no handler is provided
      setTimeout(() => {
        const assistantResponses = [
          "I'm here to help with your health questions.",
          "That's an interesting health concern. Let me provide some information.",
          "Based on what you've shared, I'd recommend consulting with your doctor.",
          "MedBridge is designed to provide general health information, not medical advice.",
          "I understand your concern. Let me help you find some resources on this topic."
        ];
        
        // Select a random response
        const randomResponse = assistantResponses[
          Math.floor(Math.random() * assistantResponses.length)
        ];
        
        setMessages(prev => [
          ...prev, 
          { sender: 'bot', text: randomResponse }
        ]);
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white rounded-lg shadow-sm">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-center">
              Welcome to MedBridge! <br />
              How can I assist with your health questions today?
            </p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${message.sender === 'user' 
                  ? 'bg-red-100 text-gray-800 rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="mt-4">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Type your message"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={inputValue.trim() === '' || isLoading}
            className="bg-red-600 text-white rounded-full px-4 py-2 font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBox;
