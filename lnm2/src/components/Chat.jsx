import React, { useState } from 'react';
import { Send, Paperclip, Smile, MoreVertical } from 'lucide-react';
import { WavesDemo } from './ui/waves-demo';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm interested in your thoughts.  ",
      sender: 'user',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      text: "Of course! I'd love to share more about my thoughts. What specific aspects would you like to know about?",
      sender: 'creator',
      timestamp: '10:31 AM'
    }
  ]);

  const handleSend = async () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: trimmedMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');

    // Add loading message
    const loadingMessage = {
      id: newUserMessage.id + 1,
      text: '...',
      sender: 'creator',
      isLoading: true,
      timestamp: '...'
    };
    setMessages(prev => [...prev, loadingMessage]);

    try {
      const response = await fetch("https://bot-5su2.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_input: trimmedMessage })
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();

      // Replace loading message with bot response
      const botMessage = {
        id: loadingMessage.id,
        text: data.response || "No response received",
        sender: 'creator',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => 
        prev.map(msg => msg.id === loadingMessage.id ? botMessage : msg)
      );
    } catch (error) {
      // Replace loading message with error
      const errorMessage = {
        id: loadingMessage.id,
        text: "Error: Could not reach the server.",
        sender: 'creator',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => 
        prev.map(msg => msg.id === loadingMessage.id ? errorMessage : msg)
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    
    <div className="pt-20 min-h-screen bg-black">
       <div className="absolute inset-0 pointer-events-none z-0">
        <WavesDemo />
      </div>
      <div className="max-w-3xl mx-auto">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full"></div>
            <div>
              <h2 className="text-white font-semibold">Dhruv Rathee</h2>
               
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Container */}
        <div className="h-[calc(100vh-200px)] overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none'
                    : 'bg-gray-800 text-white rounded-bl-none'
                }`}
              >
                {msg.isLoading ? (
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">{msg.timestamp}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-2">
            <button className="text-gray-400 hover:text-white p-2">
              <Paperclip className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 bg-gray-800 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="text-gray-400 hover:text-white p-2">
              <Smile className="w-5 h-5" />
            </button>
            <button
              onClick={handleSend}
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-2 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200 active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;