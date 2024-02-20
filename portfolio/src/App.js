import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import AboutMe from "./components/AboutMe/aboutMe";
import Portfolio from "./components/Portfolio/portfolio";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
