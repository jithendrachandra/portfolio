import { useState } from 'react';
import { Send } from '@mui/icons-material';

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Jithendra's AI assistant. Ask me anything about his career, skills, projects, or motivations!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getAiResponse = async (userInput) => {
    try {
      const response = await fetch('/getAiResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return 'Sorry, I\'m having trouble connecting right now. Please try again later.';
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    const answer = await getAiResponse(input);
    const botMessage = { text: answer, sender: 'bot' };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <article className="chatbot active" data-page="chatbot">
      <header>
        <h2 className="h2 article-title">AI Assistant</h2>
      </header>

      <section className="chat-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <p dangerouslySetInnerHTML={{ __html: msg.text }} />
            </div>
          ))}
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me a question..."
            className="chat-input"
            disabled={isLoading}
          />
          <button onClick={handleSend} className="send-btn" disabled={isLoading || !input.trim()}>
            <Send />
          </button>
        </div>
      </section>
    </article>
  );
}

export default Chatbot;