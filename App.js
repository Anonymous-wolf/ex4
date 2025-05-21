import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Error from './components/Error';

function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Conditional Rendering Demo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        {submitted ? (
          name.trim() !== '' ? <Welcome name={name} /> : <Error />
        ) : null}
      </div>
    </div>
  );
}

export default App;
