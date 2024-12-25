import Navbar from "./component/NavBar";
import AboutMe from "./section/AboutMe";
import ContactMe from "./section/ContactMe";
import Home from "./section/Home";
import Project from "./section/Project";

function App() {
  return (
    <main className="w-full relative lg:px-32 bg-white-100 font-poppins">
      <Navbar />
      <Home />
      <AboutMe />
      <Project />
      <ContactMe />
    </main>
  );
}

export default App;
