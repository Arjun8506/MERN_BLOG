import React from 'react'
import '../styles/About.css'
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectBgColor } from "../reducer/bgColorSlice.js";

const About = () => {

  const dispatch = useDispatch();
  const bgColor = useSelector(selectBgColor);

  return (
    <div className='about' 
    style={{
      backgroundColor: bgColor === "light" ? "white" : "rgb(1,27,60)",
      color: bgColor === "light" ? "rgb(1,27,60)" : "white",
    }}>
      <h1>About Arjun's Blog</h1>
      <p>
      This Blog Site stands out in the vast landscape of web development blogs as a rich resource for enthusiasts eager to expand their knowledge. Amidst the myriad of web development blogs available, My platform distinguishes itself through its insightful and well-crafted content. With a passion for sharing expertise and experiences, I curates a collection of articles and tutorials that cater to both beginners and seasoned developers.
      </p>
      <p>
      The website serves as a treasure trove of information, covering a diverse array of topics within the realm of web development. From practical coding tips to in-depth explorations of emerging technologies, My Blog ensures that readers embark on a continuous journey of learning. The engaging and accessible writing style makes complex concepts digestible, fostering an inclusive learning environment.
      </p>
      <p>
      I encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. I believe that a community of learners can help each other grow and improve.
      </p>
    </div>
  )
}

export default About