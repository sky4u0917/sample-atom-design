import React from 'react';

const ResultButton = ({ text, textColor, bgColor, onClick }) => (
    <button
        style={{ color: textColor, backgroundColor: bgColor }}
        onClick={onClick}
    >
        {text}
    </button>
);

export default ResultButton;
