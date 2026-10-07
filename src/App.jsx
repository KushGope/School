import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import AdmissionForm from "./data/AdmissionForm";
import Loginpage from "./login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-beige flex flex-col px-4 md:px-8 py-4">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
