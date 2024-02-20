import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import AboutMe from "./components/AboutMe/aboutMe";
import Portfolio from "./components/Portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
