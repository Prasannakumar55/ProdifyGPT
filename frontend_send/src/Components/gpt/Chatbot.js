

import React, { useState } from 'react';
import './Chatbot.css'; // Add CSS file for styling

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: 'Hello! How can I assist you today?', isBot: true },
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setMessages([...messages, { text: inputValue, isBot: false }]);
        setInputValue('');

        // Here you can add logic to handle bot responses based on user input
        // For now, let's just simulate a bot response after a short delay
        setTimeout(() => {
            setMessages([
                ...messages,
                { text: 'I am a chatbot. How can I help you?', isBot: true },
            ]);
        }, 500);
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`chatbot-message ${msg.isBot ? 'bot' : 'user'}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <form className="chatbot-input" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
