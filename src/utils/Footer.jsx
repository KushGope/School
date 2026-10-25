import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="max-w-6xl w-full mx-auto mt-12 mb-4">
      <hr className="border-t border-foreground/10 w-full mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 text-foreground/80">
        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="font-bold text-foreground text-base">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                className="hover:text-primary transition-colors"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                to="/academics"
                className="hover:text-primary transition-colors"
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-primary transition-colors"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-3">
          <h3 className="font-bold text-foreground text-base">Contact Us</h3>
          <p className="text-sm text-foreground/70">
            123 Nippon Lane, Shogun, Õsaka
          </p>
          <p className="text-sm text-foreground/70">Phone: +91 934-123-4567</p>
          <p className="text-sm text-foreground/70">Email: kamisama@go.zaro</p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-8 pt-4 border-t border-foreground/5 text-center text-xs text-foreground/60 px-2 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>
          &copy; {new Date().getFullYear()} Kamisama High School. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
