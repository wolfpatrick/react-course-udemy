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

  let msg;
  if (count > 0) {
    msg = <p>Coint greater 0</p>;
  } else if (count == 0) {
    msg = <p>Coint equal 0</p>;
  } else {
    msg = <p>Coutn less 0</p>;
  }

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

      {msg}

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
