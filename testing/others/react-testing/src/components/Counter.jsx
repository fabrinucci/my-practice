import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="card">
        <h2>Count:{count}</h2>
        <div className="buttons-card">
          <button onClick={decrement}>-1</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>+1</button>
        </div>
      </div>
    </div>
  )
}