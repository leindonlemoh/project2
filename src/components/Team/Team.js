import React from "react";
import "./Team.css";
import Jo from "../../image/jo.jpg";
import Don from "../../image/2x2.png";
import Wendell from "../../image/wendell.png";

const Team = () => {
  return (
    <section class="section-portfolio">
      <div className="team-header">
        <p> Meet The Team</p>
      </div>
      <div id="portfolio" class="container text-center">
        <div class="row">
          <div class="col">
            <a
              href="https://joanlogronio.github.io/joanportfolio/
"
              target="_blank"
            >
              <img class="photo" src={Jo} alt="" />
              <div class="port-text">
                <p class="name">Joan</p>
                <p class="position">
                  UI/UX <br />
                  Desinger
                </p>
              </div>
            </a>
          </div>
          <div class="col">
            <a
              href="https://leindonlemoh.github.io/leindonportfolio/"
              target="_blank"
            >
              <img class="photo" src={Don} alt="" />
              <div class="port-text">
                <p class="name">Leindon</p>
                <p class="position">
                  Web Developer <br />
                  Front-End
                </p>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              href="https://vvndll.github.io/wendell-portfolio"
              target="_blank"
            >
              <img class="photo" src={Wendell} alt="" />
              <div class="port-text">
                <p class="name">Wendell</p>
                <p class="position">Co-Founder</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
