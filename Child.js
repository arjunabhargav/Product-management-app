import React from 'react';

export const Child = (props) => {
    
    return (
        <div>
            <button onClick={() => props.updateText('Hi')}>
                Click me
            </button>
        </div>
    );
};
