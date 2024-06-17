import React from 'react';
import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';
import './BotResponse.css';

const BotResponse = ({ avatarUrl, responseText }) => (
    <div className='bot-response'>
        <Text content={responseText} />
        <Avatar imageUrl={avatarUrl} />
    </div>
);

export default BotResponse;
