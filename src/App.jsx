import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./utils/Footer";
import Navbar from "./utils/Navbar";
import Home from "./landing/Home";
import Contact from "./utils/Contact";
import About from "./utils/About";
import AdmissionForm from "./admission/AdmissionForm";
import Loginpage from "./login/Login";
import Logout from "./login/Logout";
import Gallery from "./gallery/Gallery";
import Academics from "./academics/Academics";
import ScrollToTop from "./context/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background flex flex-col px-4 md:px-8 py-4">
        <Navbar />

        <Routes>
          {/* Fallback: show Home for unknown routes */}
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
    </HashRouter>
  );
}

export default App;
