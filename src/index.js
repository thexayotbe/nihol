import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Components/Login";
import Wrapper from "./tools/Wrapper";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Wrapper>
    <Login />
    {/* <Navbar /> */}
    {/* <Home /> */}
  </Wrapper>
);
