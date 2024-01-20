import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <div className="Main-Container">
        <NavBar />
        <section id="home">
          <Home />
        </section>
        <hr />
        <section id="about">
          <About />
        </section>
        <hr />
        <section id="skills">
          <Skills />
        </section>
        <hr />
        <section id="education">
          <Education />
        </section>
        <hr />
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
