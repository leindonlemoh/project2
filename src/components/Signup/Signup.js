import React from "react"
import "./Signup.css"

const Signup = () => {
const signupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");

// loginBtn.addEventListener("click", ()=>{
//     moveBtn.classList.add("rightBtn");
//     login.classList.add("loginForm");
//     signup.classList.remove("signupForm");
//     moveBtn.innerHTML = "Login";
// })

// signupBtn.addEventListener("click", ()=>{
//     moveBtn.classList.remove("rightBtn");
//     login.classList.remove("loginForm");
//     signup.classList.add("signupForm");
//     moveBtn.innerHTML = "Signup";
// })



    return (

<div class="wrapper">
        <div class="modalForm">
            <div class="actionBtns">
                <button class="actionBtn signupBtn">Sign Up</button>
                <button class="actionBtn loginBtn">Log in</button>
                <button class="moveBtn">Sign Up</button>
            </div>
            <div class="userForm">
                <form action="" class="form signup signupForm">

                    <div class="inputGroup">
                        <input type="text" placeholder="First Name" autocomplete="off"/>
                    </div>

                    <div class="inputGroup">
                        <input type="text" placeholder="Last Name" autocomplete="off"/>
                    </div>

                    <div class="inputGroup">
                        <input type="text" placeholder="Email Address" autocomplete="off"/>
                    </div>

                    <div class="inputGroup">
                        <input type="text" placeholder="Create new password" autocomplete="off"/>
                    </div>

                    <div class="inputGroup">
                        <input type="text" placeholder="Confirm passwrord" autocomplete="off"/>
                    </div>

                    <button type="submit" class="submitBtn">
                        Sign Up
                    </button>

                </form>

                
                <form action="" class="form login">

                    <div class="inputGroup">
                        <input type="text" placeholder="Email Address" autocomplete="off"/>
                    </div>

                    <div class="inputGroup">
                        <input type="text" placeholder="Confirm passwrord" autocomplete="off"/>
                    </div>

                    <button type="submit" class="submitBtn">
                        Log in
                    </button>
                </form>
            </div>
        </div>
    </div>

)
}

export default Signup;