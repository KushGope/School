export function LightningIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

export function AcademicIcon() {
  return (
    <svg
      className="h-auto w-full max-w-sm"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Schoolhouse with a flag and two children"
    >
      {/* Flag */}
      <path d="M200 80V35" stroke="#1f1f1f" strokeWidth="4" />
      <path d="M202 37H230V52H202" fill="#6b8f71" />

      {/* School */}
      <path d="M120 130L200 80L280 130" stroke="#6b8f71" strokeWidth="6" />
      <rect x="130" y="130" width="140" height="130" rx="4" fill="#eae3d2" />
      <rect x="150" y="150" width="30" height="30" rx="3" fill="#ffffff" />
      <rect x="220" y="150" width="30" height="30" rx="3" fill="#ffffff" />
      <rect x="185" y="200" width="30" height="50" rx="3" fill="#6b8f71" />

      {/* Children */}
      <circle cx="75" cy="210" r="10" fill="#1f1f1f" />
      <path d="M62 250C62 229 88 229 88 250V265H62V250Z" fill="#6b8f71" />

      <circle cx="325" cy="210" r="10" fill="#1f1f1f" />
      <path d="M312 250C312 229 338 229 338 250V265H312V250Z" fill="#6b8f71" />

      {/* Ground */}
      <path d="M45 265H355" stroke="#1f1f1f" strokeWidth="2" />
    </svg>
  );
}
export function ShieldIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m4-1c.047-.43.056-.866.027-1.3A9.954 9.954 0 0012 2.045M21.945 11c-.047.43-.056.866-.027 1.3a9.954 9.954 0 01-9.918 8.655v-.005"
      />
    </svg>
  );
}

export function UserIcon() {
  return (
    // <svg
    //   className="w-6 h-6"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="2"
    //   viewBox="0 0 24 24"
    // >
    //   <path
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    //   />
    // </svg>
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function LogoutIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 15l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  );
}

// ArrowRightIcon.jsx;
export function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
