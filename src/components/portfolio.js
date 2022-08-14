import React from "react";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className=" solo-photo">
          <div className="person">
            <img
              className="photo"
              src="https://i.pinimg.com/474x/1f/61/c7/1f61c7113274c3c666eb4f3a091bab51.jpg"
              alt=""
            />
            <div className="text">
              <p className="name">Joan</p>
              <p className="position">
                Web Developer <br />
                Front-End
              </p>
            </div>
          </div>

          <div className="person">
            <img
              className="photo"
              src="https://i.pinimg.com/474x/1f/61/c7/1f61c7113274c3c666eb4f3a091bab51.jpg"
              alt=""
            />
            <div className="text">
              <p className="name">Leindon</p>
              <p className="position">
                Web Developer <br />
                Front-End
              </p>
            </div>
          </div>
          <div className="person">
            <img
              className="photo"
              src="https://i.pinimg.com/474x/1f/61/c7/1f61c7113274c3c666eb4f3a091bab51.jpg"
              alt=""
            />
            <div className="text">
              <p className="name">Wendell</p>
              <p className="position">
                Web Developer <br />
                Front-End
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
