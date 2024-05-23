import React, { useState } from 'react';
import axios from 'axios';
import '../css/ChatComponent.css'
import { FaArrowUp } from "react-icons/fa6";


function ChatApp() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState('');

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("in handleSubmit")
    console.log("prompt.trim(): ",prompt.trim())
    if (!prompt.trim()) return;

    // Send prompt to API
    try {
      console.log("in try")
      // const response = await axios.post('http://127.0.0.1:8000/api/core/handle_prompt/', { prompt });
      const response = await axios.post('https://prodify-gpt-app-tjhjx.ondigitalocean.app/api/core/handle_prompt/', { prompt });
      const responseData = response.data;
      console.log('responseData:',responseData);
      // Update messages state with the response
      setMessages(responseData.message);
      // setMessages([...messages, { text: responseData, sender: 'bot' }]);

      // Clear input field
      setPrompt('');
    } catch (error) {
      console.error('Error sending prompt:', error);
    }
  };

  return (
    <div>
      <div className="chat-container">
        {/* {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))} */}
        {messages}
      </div>
      <center>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          placeholder="Type your prompt here..."
          value={prompt}
          onChange={handleChange}
        />
        <button type="submit"><FaArrowUp size={18}/></button>
      </form>
      </center>
      
    </div>
  );
}

export default ChatApp;
