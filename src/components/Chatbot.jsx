import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Witaj! Jak mogę Ci pomóc?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { sender: 'user', text: input },
    ];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        messages: newMessages.map((msg) => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text,
        })),
      });

      const botReply = response.data.choices[0].message.content;
      setMessages([
        ...newMessages,
        { sender: 'bot', text: botReply },
      ]);
    } catch (error) {
      console.error('Błąd:', error);
      setMessages([
        ...newMessages,
        { sender: 'bot', text: 'Przepraszam, wystąpił błąd.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-header">
        <h2>ChatGPT</h2>
      </div>
      <div className="messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.sender}`}
          >
            <div className="message-content">
              {msg.sender === 'bot' ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message bot">
            <div className="message-content">
              Piszę odpowiedź...
            </div>
          </div>
        )}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Napisz wiadomość..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Wyślij</button>
      </div>
    </div>
  );
}

export default Chatbot;
