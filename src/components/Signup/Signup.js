import React from 'react';
import './Signup.css';

const Signup = ( {setToggleSignUp} ) => {
  return (
    <div className="wrapper">

        <header className="signin">
        <i className="bi bi-x-lg" onClick={() => setToggleSignUp(false)}></i>
        </header>
        
      <div className="modalForm">
        <div className="actionBtns">
          <button className="actionBtn signupBtn">Sign Up</button>
          <button className="actionBtn loginBtn">Log in</button>
          <button className="moveBtn">Sign Up</button>
        </div>
        <div className="userForm">
          <form action="" className="form signup signupForm">
            <div className="inputGroup">
              <input type="text" placeholder="First Name" autocomplete="off" />
            </div>
 
            <div className="inputGroup">
              <input type="text" placeholder="Last Name" autocomplete="off" />
            </div>
 
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Email Address"
                autocomplete="off"
              />
            </div>
 
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Create new password"
                autocomplete="off"
              />
            </div>
 
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Confirm passwrord"
                autocomplete="off"
                />
            </div>
 
            <button type="submit" className="submitBtn">Sign Up</button>
          </form>
 
    
          <form action="" className="form login">
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Email Address"
                autocomplete="off"
              />
            </div>
 
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Confirm passwrord"
                autocomplete="off"
              />
            </div>
 
            <button type="submit" className="submitBtn">Log in</button>
          </form>
        </div>
      </div>
    </div>


  );
};

export default Signup;