import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar imagePath="./avatar.png" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.imagePath} alt="" height={"auto"} />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Patrick Wolf</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua ...
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="Java Script" color="lorange" emoji="💪" />
      <Skill skillName="Python" color="lightgreen" emoji="💪" />
      <Skill skillName="Git" color="orangered" emoji="💪" />
      <Skill skillName="Cypress" color="yellow" emoji="💪" />
      <Skill skillName="React" color="lightblue" emoji="💪" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
