import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="max-w-6xl w-full mx-auto mt-12 mb-4">
      <hr className="border-t border-text-dark/10 w-full mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 text-text-dark/80">
        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="font-bold text-text-dark text-base">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-accent-green transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                className="hover:text-accent-green transition-colors"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                to="/academics"
                className="hover:text-accent-green transition-colors"
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-accent-green transition-colors"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-3">
          <h3 className="font-bold text-text-dark text-base">Contact Us</h3>
          <p className="text-sm text-text-dark/70">
            123 Nippon Lane, Shogun, Õsaka
          </p>
          <p className="text-sm text-text-dark/70">Phone: +91 934-123-4567</p>
          <p className="text-sm text-text-dark/70">Email: kamisama@go.zaro</p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-8 pt-4 border-t border-text-dark/5 text-center text-xs text-text-dark/60 px-2 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>
          &copy; {new Date().getFullYear()} Kamisama High School. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="#privacy"
            className="hover:text-accent-green transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-accent-green transition-colors"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
