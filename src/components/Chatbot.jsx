import { useState } from 'react';
import { faqData, fallbackMessage } from '../data/faq';
import { Send } from '@mui/icons-material';

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Jithendra's AI assistant. Ask me anything about his career, skills, projects, or motivations!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const findAnswer = (question) => {
    const lowerQuestion = question.toLowerCase();
    for (const item of faqData) {
      if (item.keywords.some(keyword => lowerQuestion.includes(keyword))) {
        return item.answer;
      }
    }
    return fallbackMessage;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    const answer = findAnswer(input);
    const botMessage = { text: answer, sender: 'bot' };

    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
    }, 500);

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
          />
          <button onClick={handleSend} className="send-btn">
            <Send />
          </button>
        </div>
      </section>
    </article>
  );
}

export default Chatbot;