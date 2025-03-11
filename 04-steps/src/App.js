import { logDOM } from "@testing-library/dom";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function hanndlePrevious(text) {
    if (step > 1) setStep(step - 1);
  }

  const hanndleNext = () => {
    if (step < 3) setStep(step + 1);
    console.log("next");
  };

  const closebutton = (
    <button className="close" onClick={() => setIsOpen(!isOpen)}>
      &times;
    </button>
  );
  return (
    <div>
      {closebutton}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => hanndlePrevious("patrick")}
            >
              Previos
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={hanndleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
