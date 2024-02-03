import React, {useState} from "react";
import "../styles/SignUp.css";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {

  const [formData, setformData] = useState([])
  const [errorMessage, seterrorMessage] = useState(null)
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setformData({...formData, [e.target.id]: e.target.value.trim() })
  }

  const formHandler = async (e) => {
    e.preventDefault();
  
    if (!formData.username || !formData.email || !formData.password) {
      return seterrorMessage("All Fields Are Mandatory!!!!");
    }
  
    // if (formData.username === " ", ) {
      
    // }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", formData);
  
      // Check if response is defined before accessing properties
      if (response && response.data) {
        console.log(response.data);
        navigate("/profile")
      } else { 
        console.error("Response or response data is undefined");
      }
    } catch (error) {
      // Handle errors (you can log or show an error message)
      console.error(error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <div className="signUp">
      <div id="signupmainDiv">
        <div className="sighupImage">
          <Logo />
          <p>
            Sigh-Up Yourself to see the Blogs and also to create the blogs and
            comments to the great content of Blogs
          </p>
          <img src="/SignUp_Image.png" alt="" />
        </div>
        <div className="signupfieldsDiv">
          <form onSubmit={formHandler}>
            <div className="inputField">
              <label htmlFor="username">Your UserName</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                onChange={handleChange}
              />
            </div>

            <div className="inputField">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                onChange={handleChange}
              />
            </div>

            <div className="inputField">
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="..............."
                onChange={handleChange}
              />
            </div>

            <button id="signUp_Btn">Sign Up</button>
          </form>

          <div className="signinlink">
          <p>Have an Account !!</p> <Link to={'/sign-in'} className="link" id="signinlinkfromsignup">SignIn</Link>
          </div>

          <div className="error">
            {errorMessage}
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default SignUp;
