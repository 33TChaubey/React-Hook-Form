import { useState, useRef } from 'react';
function App() {

  const [val, setVal] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={(event) => setVal({ ...val, name: event.target.value })} placeholder="Name" />
      <input type="text" onChange={(event) => setVal({ ...val, email: event.target.value })} placeholder="email" />
      <input type="submit" />
    </form>
  )
}

export default App;
