// src/components/organisms/Result.js
import React from 'react';
import UserQuestion from '../molecules/UserQuestion';
import BotResponse from '../molecules/BotResponse';
import './Result.css';

const Result = ({ messages }) => (
    <div className="result">
        {messages.map((message, index) => (
            message.role === 'user' ? (
                <UserQuestion key={index} avatarUrl={message.avatar} questionText={message.content} />
            ) : (
                <BotResponse key={index} avatarUrl={message.avatar} responseText={message.content} />
            )
        ))}
    </div>
);

export default Result;
