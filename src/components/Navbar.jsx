import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { NAV_LINKS } from "../data/SiteData";
import { UserIcon, LogoutIcon } from "./Icons";
import { useAuth } from "../context/AuthContext";
// import { useAuth } from "./context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLoginClick = async () => {
    if (isLoggedIn) {
      // Logout
      logout();
      console.log("Login: " + localStorage.getItem("isLoggedIn"));
      navigate("/");
    } else {
      // Login
      navigate("/login");
    }
  };

  const handleNavClick = (link) => {
    if (link === "Home") {
      navigate("/");
    }

    if (link === "Admission") {
      navigate("/admission");
    }
    if (link === "Contact") {
      navigate("/contact");
    }
    if (link === "Gallery") {
      navigate("/gallery");
    }
  };

  return (
    <header className="bg-bg-beige max-w-6xl w-full mx-auto flex items-center justify-between py-4 px-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center text-card-white font-bold text-sm">
          🎓
        </div>
        <span className="font-bold tracking-tight text-text-dark">
          Kami Sama
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            type="button"
            onClick={() => handleNavClick(link)}
            className="text-sm font-medium text-text-dark/80 hover:text-accent-green transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>

      <button
        type="button"
        onClick={handleLoginClick}
        title={isLoggedIn ? "Logout" : "Login"}
        className={`cursor-pointer p-1 transition-colors ${
          isLoggedIn
            ? "text-red-500 hover:text-red-600"
            : "text-text-dark/80 hover:text-accent-green"
        }`}
        //className="text-text-dark/80 hover:text-accent-green cursor-pointer p-1"
      >
        {isLoggedIn ? <LogoutIcon /> : <UserIcon />}

        {/* <UserIcon /> */}
      </button>
    </header>
  );
}
