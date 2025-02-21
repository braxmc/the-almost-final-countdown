import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [ name, setName ] = useState(null);
  // const [ submitted, setSubmitted ] = useState(false);

  // function handleNameChange(event) {
  //   setSubmitted(false);
  //   setName(event.target.value);
  // }

  function handleClick() {
    // setSubmitted(true);
    setName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome { name ?? 'unknown entity' }</h2>
      <p>
        <input 
          ref={playerName} 
          type="text" 
          // onChange={handleNameChange} 
          // value={name}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
