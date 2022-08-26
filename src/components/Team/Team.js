import React from "react";
import "./Team.css";
import Jo from "../../image/jo.jpg";
import Don from "../../image/2x2.png";
import Wendell from "../../image/wendell.png";

const Team = () => {
  return (
    <section className="section-portfolio">
      <a id="team"></a>
      <div className="team-header">
         Meet The Team
      </div>
      <div id="portfolio" class="container text-center">
        <div className="row">
          <div className="col">
            <a
              href="https://joanlogronio.github.io/joanportfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={Jo} alt="" />
              <div className="port-text">
                <p className="name">Joan</p>
                <p className="position">
                  UI/UX <br />
                  Desinger
                </p>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href="https://leindonlemoh.github.io/leindonportfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={Don} alt="" />
              <div className="port-text">
                <p className="name">Leindon</p>
                <p className="position">
                  Web Developer <br />
                  Front-End
                </p>
              </div>
            </a>
          </div>

          <div className="col">
            <a
              href="https://vvndll.github.io/wendell-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="photo" src={Wendell} alt="" />
              <div className="port-text">
                <p className="name">Wendell</p>
                <p className="position">Co-Founder</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
