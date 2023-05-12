import { useEffect, useState } from 'react';
import apiClient from '../apiClient';
import * as openai from 'openai';

const chatClient = new openai.OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // 處理接收到新訊息的邏輯
    async function handleMessageReceived() {
      const response = await chatClient.complete({
        engine: 'text-davinci-003',
        messages: messages.map((message) => ({
          role: message.role,
          content: message.content
        })),
        max_tokens: 50
      });
      const message = response.choices[0].text;
      setMessages([...messages, { role: 'assistant', content: message }]);
    }

    if (messages.length > 0 && messages[messages.length - 1].role === 'user') {
      handleMessageReceived();
    }
  }, [messages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { role: 'user', content: inputValue }]);
    setInputValue('');
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.role === 'user' ? 'left' : 'right' }}>
            {message.role === 'user' ? (
              <div>
                <strong>You:</strong> {message.content}
              </div>
            ) : (
              <div>
                <strong>ChatGPT:</strong> {message.content}
              </div>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
