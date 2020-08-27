import React from "react";
import "antd/dist/antd.css";
import Header from "./components/Header/index";
import Navigation from "./components/Navigation/index";
function App() {
  return (
    <div className='text-center'>
      <Header />
      <Navigation />
      <h1>About Me</h1>
      <h1>Projects</h1>
      <h1>Contact</h1>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
