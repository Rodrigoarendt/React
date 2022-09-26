import P from 'prop-types';
import './App.css';
import { useState } from 'react';
import { useCallback } from 'react';

const Button = React.memo(function Button({ incrementeButton }) {
  return <button onClick={() => incrementeButton(10)}>+</button>;
});

Button.propTypes = {
  incrementeButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementeButton={incrementCounter} />
    </div>
  );
}

export default App;
