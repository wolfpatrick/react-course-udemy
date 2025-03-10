const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;

  function hanndlePrevious(text) {
    alert(text);
  }

  const hanndleNext = () => {
    alert("next 111 ");
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "actice" : ""}`}>1</div>
        <div className={`${step >= 2 ? "actice" : ""}`}>1</div>
        <div className={`${step >= 3 ? "actice" : ""}`}>1</div>
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
  );
}
