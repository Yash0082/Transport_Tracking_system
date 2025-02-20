// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import OurVision from "./Pages/OurVision"





function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/resources" element={<Resources /> } />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/vision" element={<OurVision/>} />

    </Routes>
  </Router>
  );
}

export default App;
