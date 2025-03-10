import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skillsData = [
  { skillName: "Python", level: "beginner", color: "#156936" },
  { skillName: "JavaScript", level: "intermediate", color: "#FFAA00" },
  { skillName: "React", level: "advanced", color: "#61DAFB" },
  { skillName: "CSS", level: "beginner", color: "#264de4" },
  { skillName: "Node.js", level: "intermediate", color: "#68A063" },
  { skillName: "TypeScript", level: "advanced", color: "#3178C6" },
];

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

// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       <span>{props.skillName}</span>
//       <span>{props.emoji}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill skillName="Java Script" color="lorange" emoji="💪" />
//       <Skill skillName="Python" color="lightgreen" emoji="💪" />
//       <Skill skillName="Git" color="orangered" emoji="💪" />
//       <Skill skillName="Cypress" color="yellow" emoji="💪" />
//       <Skill skillName="React" color="lightblue" emoji="💪" />
//     </div>
//   );
// }

function Skill({ skillName, color, level }) {
  let emoji = "";

  // if (level === "beginner") {
  //   emoji = "😺";
  // } else if (level === "intermediate") {
  //   emoji = "🤓-";
  // } else if (level === "advanced") {
  //   emoji = "💪";
  // }

  return (
    <li className="skill" style={{ backgroundColor: `${color}` }}>
      <span>{skillName}</span>
      <span>{level === "beginner" && "😺"}</span>
      <span>{level === "intermediate" && "🤓"}</span>
      <span>{level === "advanced" && "💪"}</span>
    </li>
  );
}

function SkillList() {
  const skills = skillsData;
  return (
    <ul className="skill-list">
      {skills.map((skillObj) => (
        <Skill
          skillName={skillObj.skillName}
          color={skillObj.color}
          level={skillObj.level}
        />
      ))}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
