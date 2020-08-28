import React from "react";
import "antd/dist/antd.css";
import Header from "./components/Header/index";
import Navigation from "./components/Navigation/index";
import AboutSection from "./components/AboutSection/index";
import ProjectSection from "./components/ProjectSection/index";
function App() {
  return (
    <div className='text-center py-2'>
      <Header />
      <Navigation />
      <AboutSection />
      <ProjectSection />
      <h1>Contact</h1>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
