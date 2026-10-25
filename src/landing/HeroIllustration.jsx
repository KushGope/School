const windows = [
  [160, 150],
  [216, 150],
  [160, 195],
  [216, 195],
];

export default function HeroIllustration() {
  return (
    <div className="w-full flex justify-center">
      <svg
        className="w-full max-w-sm h-auto"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Illustration of a school with a flag and children"
      >
        {/* Background */}
        <circle cx="80" cy="220" r="40" fill="#6B8F71" fillOpacity="0.2" />
        <circle cx="130" cy="230" r="30" fill="#6B8F71" fillOpacity="0.15" />
        <circle cx="320" cy="220" r="45" fill="#6B8F71" fillOpacity="0.2" />

        {/* School building */}
        <rect x="140" y="120" width="120" height="130" rx="4" fill="#EAE3D2" />

        {/* Windows */}
        {windows.map(([x, y]) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="24"
            height="24"
            rx="2"
            fill="#6B8F71"
            fillOpacity="0.3"
          />
        ))}

        {/* Door */}
        <rect
          x="190"
          y="210"
          width="20"
          height="40"
          rx="2"
          fill="#1F1F1F"
          fillOpacity="0.7"
        />

        {/* Flag */}
        <line
          x1="200"
          y1="120"
          x2="200"
          y2="70"
          stroke="#1F1F1F"
          strokeWidth="3"
        />
        <path d="M200 70 L240 82 L200 94 Z" fill="#6B8F71" />

        {/* Ground */}
        <line
          x1="40"
          y1="250"
          x2="360"
          y2="250"
          stroke="#1F1F1F"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Children */}
        <circle cx="100" cy="235" r="8" fill="#1F1F1F" />
        <path d="M88 250 C88 240 112 240 112 250 Z" fill="#6B8F71" />

        <circle cx="290" cy="230" r="7" fill="#1F1F1F" />
        <path d="M280 250 C280 238 300 238 300 250 Z" fill="#6B8F71" />
      </svg>
    </div>
  );
}
