import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/SiteData";
import { UserIcon, LogoutIcon } from "../components/Icons";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!location.state?.loginSuccess) return;
    setSuccess(true);

    const timer = setTimeout(() => {
      setSuccess(false);

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.state, location.pathname, navigate]);

  const handleLoginClick = async () => {
    if (isLoggedIn) {
      // Logout
      logout();
      console.log("Login: " + localStorage.getItem("isLoggedIn"));
      navigate("/");
    } else {
      // Login
      // setSuccess("");
      // setSuccess("Login successful! Welcome back.");
      navigate("/login");
    }
  };

  const handleNavClick = (link) => {
    const routes = {
      Home: "/",
      Admission: "/admission",
      Contact: "/contact",
      Gallery: "/gallery",
      Academics: "/academics",
    };

    const route = routes[link];

    if (route) {
      navigate(route);
    }
  };

  return (
    <header className="bg-background max-w-6xl w-full mx-auto flex items-center justify-between py-4 px-2">
      {/* Success Message */}

      {success && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-5 top-20 z-50 flex items-center gap-3 rounded-xl border border-green-500/30 bg-surface p-4 text-foreground shadow-xl"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500/15 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5 12 4 4L19 6"
              />
            </svg>
          </div>

          <div>
            <p className="font-semibold">Login successful!</p>
            <p className="text-sm text-foreground/70">Welcome back.</p>
          </div>
        </div>
      )}

      {/* Success Message */}

      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface font-bold text-sm">
          🎓
        </div>
        <span className="font-bold tracking-tight text-foreground">
          Kami Sama
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link}
            // href="/"
            type="button"
            onClick={() => handleNavClick(link)}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            {link}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        onClick={handleLoginClick}
        title={isLoggedIn ? "Logout" : "Login"}
        className={`cursor-pointer p-1 transition-colors ${
          isLoggedIn
            ? "text-error  hover:text-error/80"
            : "text-foreground/80 hover:text-primary"
        }`}
      >
        {isLoggedIn ? <LogoutIcon /> : <UserIcon />}

        {/* <UserIcon /> */}
      </button>
    </header>
  );
}
