import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/home/Navbar'
import Home from './Components/home/Home'
import AboutUs from './Components/About/AboutUs'   

function App() {
  return (
    <Router>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />  
      </Routes>
    </Router>
  );
}

export default App;