import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [count, setCount] = useState(10);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    } else{
      alert('You can not count more than 20');
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else{
      alert('You can not count less than 0')
    }
  };

  return (
    <>
      <h1>Here is a counter</h1>
      <h3>value of counter is {count}</h3>
      <button onClick={increment}>Increase {count} by 1</button>
      <br />
      <button onClick={decrement}>Decrease {count} by 1</button>
    </>
  );
}

export default App
