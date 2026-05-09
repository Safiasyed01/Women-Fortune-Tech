import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/home/Navbar'
import Home from './Components/home/Home'
import AboutUs from './Components/About/AboutUs'   
import Services from './Components/services/Services'
import Footer from "./Components/footer/Footer";
import Contacts from './Components/contacts/Contacts';
function App() {
  return (
    <Router>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} /> 
         <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;