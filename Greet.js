import React from 'react';

 const Greet = ({ name, age }) => {

  const test = () => {
    console.log("hello from react");
  };

  const names = ["Jhons", "era", "priya"];

  return (
    <div>
      <p>Greet</p>
      <p>name: {name}</p>
      <p>age: {age}</p>

      <button onClick={test}>
        click here
      </button>

      {names.map((name, index) => (
        <p key={index}>{index}: {name}</p>
      ))}
    </div>
  );
};
export default Greet
