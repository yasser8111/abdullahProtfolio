import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./sections/Hero"));
const Bio = lazy(() => import("./sections/Bio"));
const Project = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const About = lazy(() => import("./pages/About"));

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bio />
      <Project />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white text-gray-900 min-h-screen">
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
