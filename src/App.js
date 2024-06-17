// src/App.js
import React, { useState } from 'react';
import UserAction from './components/molecules/UserAction';
import Result from './components/organisms/Result';
import './App.css'; // Create this file for styling

const App = () => {
    const [userQuestion, setUserQuestion] = useState('');
    const [botResponse, setBotResponse] = useState('');

    const handleQuestionSubmit = (question) => {
        setUserQuestion(question);
        // Simulate bot response
        setBotResponse('This is a bot response.');
    };

    return (
        <div className="App">
            <div className="user-action-container">
                <UserAction
                    titleText="Ask me anything!"
                    titleColor="#333"
                    buttonText="Submit"
                    buttonTextColor="#fff"
                    buttonBgColor="#007bff"
                    onButtonClick={() => handleQuestionSubmit(userQuestion)}
                />
            </div>
            <div className="result-container">
                <Result
                    userAvatar="path/to/user-avatar.jpg"
                    userQuestion={userQuestion}
                    botAvatar="path/to/bot-avatar.jpg"
                    botResponse={botResponse}
                />
            </div>
        </div>
    );
};