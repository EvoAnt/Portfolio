import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";



import "./App.css";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
