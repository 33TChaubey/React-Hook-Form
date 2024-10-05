import { useState, useRef } from 'react';
function App() {

  const name = useRef(null);
  const age = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(age.current.value);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" ref={name} placeholder="Name" />
      <input type="text" ref={age} placeholder="Age" />
      <input type="submit" />
    </form>
  )
}

export default App;
