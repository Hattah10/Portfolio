import Navbar from "./component/NavBar";
import SocialMedia from "./component/SocialMedia";
import AboutMe from "./section/AboutMe";
import ContactMe from "./section/ContactMe";
import Home from "./section/Home";
import Project from "./section/Project";

function App() {
  return (
    <main className="w-full   relative  bg-white-100 font-poppins">
      <SocialMedia />
      <Navbar />
      <Home />
      <AboutMe />
      <Project />
      <ContactMe />
    </main>
  );
}

export default App;
