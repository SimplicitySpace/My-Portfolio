import "./App.css";
import { useState } from "react";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import ProjectData from "./Components/Projects/ProjectData";
import Projects from "./Components/Projects/Projects";
import Blogs from "./Components/Blogs/Blogs";
import BlogContent from "./Components/Blogs/BlogsContent";
import Contact from "./Components/Contact/Contact";
function App() {
  const [projectDataArray, setprojectDataArray] = useState(ProjectData);
  const [BlogContentArray, setBlogContentArray] = useState(BlogContent);
  return (
    <>
      <Navigation />
      <Hero />
      <Projects data={projectDataArray} />
      <Blogs data={BlogContentArray} />
      <Contact />
    </>
  );
}

export default App;
