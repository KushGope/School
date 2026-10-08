import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-card-white rounded-3xl p-8 md:p-12 border border-black/5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-dark leading-tight">
          Design a better workspace for your team.
        </h1>
        <p className="text-base text-text-dark/70 max-w-md">
          Streamline coordination, establish your operational hub, and watch
          modern milestones materialize instantly.
        </p>

        <Link
          to="/admission"
          className="bg-accent-green hover:bg-accent-green/90 text-card-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm"
        >
          Get Started
        </Link>
      </div>

      {/* Hero Illustration */}
      <div className="w-full flex justify-center">
        <svg
          className="w-full max-w-sm h-auto"
          viewBox="0 0 400 300"
          fill="none"
        >
          <circle cx="80" cy="220" r="40" fill="#6B8F71" fillOpacity="0.2" />
          <circle cx="130" cy="230" r="30" fill="#6B8F71" fillOpacity="0.15" />
          <circle cx="320" cy="220" r="45" fill="#6B8F71" fillOpacity="0.2" />
          <rect
            x="140"
            y="120"
            width="120"
            height="130"
            rx="4"
            fill="#EAE3D2"
          />
          <rect
            x="160"
            y="150"
            width="24"
            height="24"
            rx="2"
            fill="#6B8F71"
            fillOpacity="0.3"
          />
          <rect
            x="216"
            y="150"
            width="24"
            height="24"
            rx="2"
            fill="#6B8F71"
            fillOpacity="0.3"
          />
          <rect
            x="160"
            y="195"
            width="24"
            height="24"
            rx="2"
            fill="#6B8F71"
            fillOpacity="0.3"
          />
          <rect
            x="216"
            y="195"
            width="24"
            height="24"
            rx="2"
            fill="#6B8F71"
            fillOpacity="0.3"
          />
          <rect
            x="190"
            y="210"
            width="20"
            height="40"
            rx="2"
            fill="#1F1F1F"
            fillOpacity="0.7"
          />
          <line
            x1="200"
            y1="120"
            x2="200"
            y2="70"
            stroke="#1F1F1F"
            strokeWidth="3"
          />
          <path d="M200 70 L240 82 L200 94 Z" fill="#6B8F71" />
          <line
            x1="40"
            y1="250"
            x2="360"
            y2="250"
            stroke="#1F1F1F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="100" cy="235" r="8" fill="#1F1F1F" />
          <path d="M88 250 C88 240 112 240 112 250 Z" fill="#6B8F71" />
          <circle cx="290" cy="230" r="7" fill="#1F1F1F" />
          <path d="M280 250 C280 238 300 238 300 250 Z" fill="#6B8F71" />
        </svg>
      </div>
    </section>
  );
}
