import React from "react";
import { Link } from "react-router-dom";
import { AcademicIcon } from "../components/Icons";

function AcademicHero() {
  return (
    <section className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-black/5 bg-surface p-8 md:grid-cols-2 md:p-12">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Learning & Development
        </p>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          Building Bright Futures Through Learning.
        </h1>

        <p className="max-w-md text-base leading-7 text-foreground/70">
          We provide a joyful and nurturing learning environment where children
          develop knowledge, creativity, confidence and essential life skills.
        </p>

        <Link
          to="/admission"
          className="inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-surface shadow-sm transition-all hover:bg-primary/90"
        >
          Apply for Admission
        </Link>
      </div>

      <div className="flex w-full justify-center">
        {/* <svg
          className="h-auto w-full max-w-sm"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Illustration of a school and learning"
          role="img"
        >
          <circle cx="90" cy="215" r="45" fill="#6B8F71" fillOpacity="0.15" />
          <circle cx="315" cy="210" r="50" fill="#6B8F71" fillOpacity="0.15" />

          <path
            d="M90 125 L200 65 L310 125"
            stroke="#6B8F71"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <rect
            x="110"
            y="125"
            width="180"
            height="125"
            rx="8"
            fill="#EAE3D2"
          />

          <rect
            x="135"
            y="145"
            width="35"
            height="35"
            rx="5"
            fill="#6B8F71"
            fillOpacity="0.6"
          />
          <rect
            x="185"
            y="145"
            width="35"
            height="35"
            rx="5"
            fill="#6B8F71"
            fillOpacity="0.6"
          />
          <rect
            x="235"
            y="145"
            width="35"
            height="35"
            rx="5"
            fill="#6B8F71"
            fillOpacity="0.6"
          />

          <rect x="175" y="200" width="50" height="50" rx="5" fill="#6B8F71" />

          <path
            d="M55 252 H345"
            stroke="#1F1F1F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />

          <path d="M65 90 L65 55 L100 65 L65 75" fill="#6B8F71" />
          <path
            d="M65 90 V120"
            stroke="#1F1F1F"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <circle cx="80" cy="225" r="9" fill="#1F1F1F" />
          <path d="M65 250 C65 232 95 232 95 250" fill="#6B8F71" />

          <circle cx="320" cy="225" r="9" fill="#1F1F1F" />
          <path d="M305 250 C305 232 335 232 335 250" fill="#6B8F71" />
        </svg> */}
        <AcademicIcon />
      </div>
    </section>
  );
}
export default AcademicHero;
