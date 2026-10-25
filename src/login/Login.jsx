import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Loginpage() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLoginClick = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // alert("Login successful!");
        console.log(data);
        login();
        // Go to home
        navigate("/", { state: { loginSuccess: true }, replace: true });
      } else {
        console.log("error in response");
        setError(data.JSON || "Hmm... those credentials don't ring a bell!"); //alert(data);
      }
    } catch (err) {
      // Handle server/network failures
      setError("Oops! Our internet hamsters need a little push. Try again!");
      console.error("Login request failed:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      {/* Login Card */}
      <div className="w-full max-w-md bg-surface rounded-2xl shadow-2xl p-8">
        {/* School Logo / Name */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl text-surface">
            🎓
          </div>
          <h1 className="text-3xl font-bold text-foreground">Kami Sama</h1>
          <p className="mt-1 text-foreground/70">Academy</p>
          {/* <p className="mt-1 text-sm text-foreground/70">
            Where little minds do big things <br /> (and homework occasionally
            disappears)
          </p> */}
        </div>

        {/* Login Form */}
        <form onSubmit={handleLoginClick}>
          {/* Username */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your secret identity"
              className="w-full rounded-lg border border-foreground/20 bg-surface text-foreground placeholder:text-foreground/50
              px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Shhh... it's a secret!"
              className="w-full rounded-lg border border-foreground/20 bg-surface text-foreground placeholder:text-foreground/50 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>

          {error && (
            <div
              role="alert"
              className="mb-5 rounded-lg border border-error/30 bg-error/10 p-3 text-sm text-error"
            >
              {error}
            </div>
          )}

          {/* Remember + Forgot */}
          <div className="mb-6 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-foreground/80">
              <input type="checkbox" className="h-4 w-4 accent-primary" />
              Remember my genius
            </label>

            <button
              type="button"
              className="font-medium text-primary 
              hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary py-3 font-semibold text-surface shadow-md transition hover:bg-primary/90 hover:shadow-lg
            disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Bottom Text */}
        <div className="mt-7 text-center text-sm text-foreground/70">
          <p>
            Need help?{" "}
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="font-medium text-primary hover:underline"
            >
              Call for backup!
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
