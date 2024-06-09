import React, { useState } from 'react';
import './SignUp.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

function SignUp() {
    const [activeButton, setActiveButton] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{activeButton}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {activeButton === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input type="text" placeholder="Username" />
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {activeButton === "Sign Up" ? null : (
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            )}
            <div className="submit-container">
                <button className={activeButton === "Login" ? "submit gray" : "submit"} onClick={() => setActiveButton("Login")} type="button">Login</button>
                <button className={activeButton === "Sign Up" ? "submit gray" : "submit"} onClick={() => setActiveButton("Sign Up")} type="button">Sign Up</button>
            </div>
        </div>
    );
}

export default SignUp;
