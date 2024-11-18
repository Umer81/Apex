import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Header from './Header';
import Board from './Board';
import Founder from './Founder';
import Hero from './Hero';
import Islam from './Islam';
import Projects from './Projects';
import Service from './Service';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import Form from './Form'; // Import your custom Form component

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          
          <Route path="/services" element={<Projects />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
