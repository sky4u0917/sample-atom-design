import React from 'react';

const ResultButton = ({ text, textColor, bgColor, onClick }) => (
    <button
        style={{ color: textColor, backgroundColor: bgColor, padding:'10px', borderRadius: '5px', border: 'none' }}
        onClick={onClick}
    >
        {text}
    </button>
);

export default ResultButton;
