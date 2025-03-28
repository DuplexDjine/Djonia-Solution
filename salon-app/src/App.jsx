// === File: src/App.jsx ===
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Salons from "./pages/Salons";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fdf6ef] text-gray-800 font-sans">
        <nav className="flex justify-center gap-8 py-4 bg-white shadow">
          <Link to="/" className="text-lg font-medium hover:underline">
            🏠 Home
          </Link>
          <Link to="/salons" className="text-lg font-medium hover:underline">
            💈 Salons
          </Link>
          <Link to="/services" className="text-lg font-medium hover:underline">
            🛠 Services
          </Link>
        </nav>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/salons" element={<Salons />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
