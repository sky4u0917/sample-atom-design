import React, { useState } from 'react';
import UserAction from './components/molecules/UserAction.js';
import Result from './components/organisms/Result.js';
import OpenAI from 'openai';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleQuestionSubmit = async (question) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true
    });

    const userMessage = {
      role: "user",
      content: question,
      avatar: 'logo192.png'
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {

      const completion = await openai.chat.completions.create({
        model: 'gpt-4-turbo',
        messages: [userMessage],
      });
      console.log(completion)

      const data = completion.choices[0]?.message?.content;
      const botMessage = { content: data, role: '"assistant"', avatar: 'logo192.png' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="App">
      <div className="user-action-container">
        <UserAction
          titleText="Simple ChatGPT"
          titleColor="#333"
          buttonText="Send"
          buttonTextColor="#fff"
          buttonBgColor="#007bff"
          onButtonClick={handleQuestionSubmit}
        />
      </div>
      <div className="result-container">
        <Result
          messages={messages}
          avatar='/logo192.png'
        />
      </div>
    </div>
  );
};

export default App;
