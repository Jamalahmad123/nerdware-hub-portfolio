import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

// Lazy Import
// const About = lazy(() => import("./pages/About"));
// const Projects = lazy(() => import("./pages/Projects"));
// const Services = lazy(() => import("./pages/Services"));
// const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <>
      <Router>
        <Nav />
        {/* <Suspense fallback={<div className="min-h-screen" />}> */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        {/* </Suspense> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
