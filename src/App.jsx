import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
<main className="bg-slate-300/20">
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/*" element={<>
  <Routes>
  <Route path=" " element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/contact" element={<Contact/>}/>
  </Routes>
  <Footer/>
  </>}/>
 
</Routes>

</BrowserRouter>
</main>
  );
};

export default App