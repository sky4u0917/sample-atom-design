import React from 'react';

const Avatar = ({ imageUrl }) => (
    <img src={imageUrl} alt="Avatar" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
);

export default Avatar;
