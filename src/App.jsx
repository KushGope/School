import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import AdmissionForm from "./data/AdmissionForm";
import Loginpage from "./login/Login";
import Logout from "./login/Logout";
import Gallery from "./gallery/Gallery";
import Academics from "./academics/Academics";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-beige flex flex-col px-4 md:px-8 py-4">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/academics" element={<Academics />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
