import React from 'react'
import { useState } from 'react'; // Import useState from react
import { Child } from './Child';

export const Parent = () => {
    const [text, setText] = useState('');
    function updateText(message){
        setText(message);
    }
  return (
    <div>
        Text: {text}
    <Child updateText={updateText}/>
    </div>
  )
}
