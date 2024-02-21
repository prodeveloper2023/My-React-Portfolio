// import styles from "./App.module.css";
// import { About } from "./components/About/About";
// import { Contact } from "./components/Contact/Contact";
// import { Experience } from "./components/Experience/Experience";
// import { Hero } from "./components/Hero/Hero";
// import { Navbar } from "./components/Navbar/Navbar";
// import { Projects } from "./components/Projects/Projects";

// function App() {
//   return (
//     <div className={styles.App}>
//       <Navbar />
//       <Hero />
//       <About />
//       <Experience />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
