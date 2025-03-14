import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 01 2025");
  date.setDate(date.getDate() + count);

  const increaseCount = () => {
    setCount((s) => s + step);
  };

  const decreaseCount = () => {
    setCount((s) => s - step);
  };

  const increaseStep = () => {
    setStep((s) => s + 1);
  };

  const decreaseStep = () => {
    setStep((s) => s - 1);
  };

  return (
    <div>
      <div>
        <button onClick={decreaseStep}>-</button>
        <span>Step {step}</span>
        <button onClick={increaseStep}>+</button>
      </div>

      <div>
        <button onClick={decreaseCount}>-</button>
        <span>Count {count}</span>
        <button onClick={increaseCount}>+</button>
      </div>

      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()} </span>
    </div>
  );
}

export default App;
