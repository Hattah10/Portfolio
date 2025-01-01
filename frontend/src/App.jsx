import { useEffect } from "react";
import Navbar from "./component/NavBar";
import SocialMedia from "./component/SocialMedia";
import AboutMe from "./section/AboutMe";
import ContactMe from "./section/ContactMe";
import Home from "./section/Home";
import Project from "./section/Project";
import Technology from "./section/Technology";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <main className="w-full   relative  bg-white-100 font-poppins">
      <SocialMedia />
      <Navbar />
      <Home />
      <AboutMe />
      <Technology />
      <Project />
      <ContactMe />
    </main>
  );
}

export default App;
