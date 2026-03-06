import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Bio from "./sections/Bio";
import Project from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
        <Navbar />
      <main>
        <Hero />
        <Bio />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;





  