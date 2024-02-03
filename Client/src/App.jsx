import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectBgColor } from "./reducer/bgColorSlice.js";

const App = () => {

  const dispatch = useDispatch();
  const bgColor = useSelector(selectBgColor);


  return (
    <div
      style={{
        backgroundColor: bgColor === "light" ? "white" : "rgb(1,27,60)",
        color: bgColor === "light" ? "rgb(1,27,60)" : "white",
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
