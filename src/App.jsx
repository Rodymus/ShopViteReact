import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Llamado a una API para info');
  }, []);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Agregar</button>
      <button onClick={() => setCount(count - 1)}>Quitar</button>
      <button onClick={() => setCount(count)}>Resetear</button>
    </>
  );
}

export default App;
