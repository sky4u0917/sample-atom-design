import React from 'react';

const Question = ({value, onChange}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Ask your question..."
            style={{
                flex: 1,
                padding: '10px',
                margin: '0 10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
            }}
        />
    );
};

export default Question;
