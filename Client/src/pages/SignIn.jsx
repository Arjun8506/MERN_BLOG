import React, {useState, useEffect} from 'react'
import "../styles/SignUp.css";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const SignIn = () => {

  const [formData, setformData] = useState([])
  const [errorMessage, seterrorMessage] = useState(null)
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setformData({...formData, [e.target.id]: e.target.value.trim() })
  }

  const formHandler = async (e) => {
    e.preventDefault();
  
    if (!formData.email || !formData.password) {
      return seterrorMessage("All Fields Are Mandatory!!!!");
    }
  
    // if (formData.username === " ", ) {
      
    // }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/signin", formData);
  
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
      seterrorMessage(error.response ? error.response.data : error.message)
    }
  };
  
  useEffect(() => {
    console.log(errorMessage);  
  }, [errorMessage])
  
  

  return (
    <div className="signUp">
      <div id="signupmainDiv">
        <div className="sighupImage">
          <Logo />
          <p>
            Sigh-In Yourself to see the Blogs and also to create the blogs and
            comments to the great content of Blogs
          </p>
          <img src="/SignIn_Image.png" alt="" />
        </div>
        <div className="signupfieldsDiv">
          <form onSubmit={formHandler}>

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

            <button id="signUp_Btn">Sign In</button>
          </form>

          <div className="signinlink">
          <p>Have an Account !!</p> <Link to={'/sign-up'} className="link" id="signinlinkfromsignup">SignUp</Link>
          </div>
          <div className="error">
            {errorMessage}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn