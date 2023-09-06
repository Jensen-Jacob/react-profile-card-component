import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar imageName="myAvatar.jpg" alt="Photo of myself" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList bgcolor="blue" skill="HTML &amp; CSS&#128170;" />
        <SkillList bgcolor="yellow" skill="JavaScript&#128170;" />
        <SkillList bgcolor="limegreen" skill="Web Design&#128077;" />
        <SkillList bgcolor="red" skill="Git and GitHub&#128170;" />
        <SkillList bgcolor="skyblue" skill="Tailwind&#128077;" />
      </div>
    </div>
  );
}

function Avatar(props) {
  // console.log(props);
  return <img src={props.imageName} alt={props.alt} className="avatar" />;
}

function Intro() {
  return (
    <>
      <h2>Jensen Jacob George</h2>
      <p className="skill-list">
        Full-stack web developer in the making! When I am not coding or
        learning, I like to play one of my two favourite instruments , i.e.
        guitar or keyboard. I also like singing, gaming and watching anime.
      </p>
    </>
  );
}

function SkillList(props) {
  const style = { backgroundColor: props.bgcolor };
  return (
    <>
      <div className="skill-list">
        <div className="skill" style={style}>
          {props.skill}
        </div>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
