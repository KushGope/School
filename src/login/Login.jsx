import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLoginClick = async (e) => {
    e.preventDefault();

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

    const data = await response.text();

    if (response.ok) {
      alert("Login successful!");
      console.log("Login successful!");

      // Go to home
      navigate("/#");
    } else {
      console.log("error in response");
      alert(data.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* School Logo / Name */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent-green text-3xl">
            🎓
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Kamesama</h1>
          <p className="mt-1 text-gray-500">Children's Academy</p>
        </div>

        {/* Login Form */}
        <form>
          {/* Username */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-accent-green focus:ring-2 focus:ring-accent-green/30"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-accent-green focus:ring-2 focus:ring-accent-green/30"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="mb-6 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="h-4 w-4 accent-accent-green" />
              Remember me
            </label>

            <button
              type="button"
              className="font-medium text-[#5f8f5d] hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLoginClick}
            type="submit"
            className="w-full rounded-lg bg-accent-green py-3 font-semibold text-white shadow-md transition hover:bg-[#729f70] hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Bottom Text */}
        <div className="mt-7 text-center text-sm text-gray-500">
          <p>
            Need help?{" "}
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="font-medium text-accent-green"
            >
              Contact School Office
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
