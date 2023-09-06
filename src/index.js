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
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.imageName} alt={props.alt} className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Jensen Jacob George</h1>
      <p>
        Full-stack web developer in the making! When I am not coding or
        learning, I like to play one of my two favourite instruments , i.e.
        guitar or keyboard. I also like singing, gaming and watching anime.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill bgcolor="blue" skill="HTML &amp; CSS &#128170;" />
      <Skill bgcolor="yellow" skill="JavaScript &#128170;" />
      <Skill bgcolor="limegreen" skill="Web Design &#128077;" />
      <Skill bgcolor="red" skill="Git and GitHub &#128170;" />
      <Skill bgcolor="skyblue" skill="Tailwind &#128077;" />
      <Skill bgcolor="aqua" skill="React &#128170;" />
      <Skill bgcolor="coral" skill="NextJS &#128118;" />
    </div>
  );
}

function Skill(props) {
  const style = { backgroundColor: props.bgcolor };
  return (
    <div className="skill" style={style}>
      <span>{props.skill}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
