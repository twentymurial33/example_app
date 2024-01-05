import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div className="projects-grid">
        <div
          shadow={1}
          style={{ minWidth: "400", margin: "auto", marginTop: "0px" }}
        >
          <div border>
            <button colored href="https://github.com/twentymurial33/movie">
              GitHub
            </button>
            <a href="https://dry-cliffs-10729.herokuapp.com/">Movie App</a>
          </div>
          <div border>
            <button colored href="https://github.com/twentymurial33">
              GitHub
            </button>
            <a href="https://slider23.netlify.app">Sliding App</a>
          </div>
          <div border>
            <button colored href="https://github.com/twentymurial33/react">
              GitHub
            </button>
            <a href="https://hopeful-nobel-780d52.netlify.app">
              Quote Generator
            </a>
          </div>
          <div border>
            <button colored href="https://github.com/twentymurial33/blackjack">
              GitHub
            </button>
            <a href="https://blackjack2022.netlify.app/">BlackJack App</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
