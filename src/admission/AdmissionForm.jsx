import { useState } from "react";
import {
  INITIAL_FORM_STATE,
  GENDER_OPTIONS,
  CLASS_OPTIONS,
} from "../data/admissionFormData";
import FormField from "./FormField";
import FormSection from "./FormSection";

// UI Class Constants
const INPUT_CLASS =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20";

function AdmissionForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Admission form submitted successfully!");
  };
  return (
    <main className="mx-auto mt-6 w-full max-w-6xl flex-1 px-4 pb-8 md:px-0">
      {/* Page Heading */}
      <header className="mb-6 rounded-3xl border border-black/5 bg-surface px-6 py-8 text-center md:px-12 md:py-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Little Dreams Start Here ✨
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
          School Admission Form
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70 md:text-base">
          Every big adventure starts with a little step. Tell us about your
          little learner, and let's begin!
        </p>
      </header>

      {/* Admission Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-black/5 bg-surface p-6 shadow-sm md:p-10"
      >
        {/* Student Information */}

        <FormSection title="All About Your Little Star 🌟">
          <FormField
            id="studentName"
            label="Student Full Name"
            required
            className="md:col-span-2"
          >
            <input
              id="studentName"
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter student's full name"
              autoComplete="name"
              required
              className={INPUT_CLASS}
            />
          </FormField>

          <FormField id="dob" label="Date of Birth" required>
            <input
              id="dob"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className={INPUT_CLASS}
            />
          </FormField>

          <FormField id="gender" label="Gender" required>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className={INPUT_CLASS}
            >
              {GENDER_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField id="className" label="Applying For Class" required>
            <select
              id="className"
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
              className={INPUT_CLASS}
            >
              {CLASS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField id="previousSchool" label="Previous School">
            <input
              id="previousSchool"
              type="text"
              name="previousSchool"
              value={formData.previousSchool}
              onChange={handleChange}
              placeholder="Previous school name"
              className={INPUT_CLASS}
            />
          </FormField>
        </FormSection>

        {/* Parent / Guardian Information */}
        <FormSection title="The Wonderful Grown-Ups">
          <FormField id="fatherName" label="Father's Name" required>
            <input
              id="fatherName"
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter father's name"
              required
              className={INPUT_CLASS}
            />
          </FormField>

          <FormField id="motherName" label="Mother's Name" required>
            <input
              id="motherName"
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Enter mother's name"
              required
              className={INPUT_CLASS}
            />
          </FormField>

          <FormField id="guardianPhone" label="Phone Number" required>
            <input
              id="guardianPhone"
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              placeholder="Enter phone number"
              autoComplete="tel"
              required
              className={INPUT_CLASS}
            />
          </FormField>

          <FormField id="email" label="Email Address">
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              autoComplete="email"
              className={INPUT_CLASS}
            />
          </FormField>
        </FormSection>

        {/* Address */}
        <FormSection title="Where Do You Call Home?">
          <FormField
            id="address"
            label="Full Address"
            required
            // className="md:col-span-2"
          >
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              placeholder="Enter your full address"
              autoComplete="street-address"
              required
              className={`${INPUT_CLASS} resize-y`}
            />
          </FormField>

          <FormField id="city" label="City">
            <input
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              autoComplete="address-level2"
              className={INPUT_CLASS}
            />
          </FormField>

          <FormField id="state" label="State">
            <input
              id="state"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              autoComplete="address-level1"
              className={INPUT_CLASS}
            />
          </FormField>

          <FormField id="pincode" label="PIN Code">
            <input
              id="pincode"
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="PIN Code"
              autoComplete="postal-code"
              inputMode="numeric"
              className={INPUT_CLASS}
            />
          </FormField>
        </FormSection>

        {/* Documents */}
        <FormSection title="A Few Important Papers 📄">
          <FormField id="birthCertificate" label="Upload Birth Certificate">
            <input
              id="birthCertificate"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:font-medium file:text-surface"
            />
            <p className="mt-2 text-xs text-foreground/60">
              Accepted formats: PDF, JPG, JPEG, PNG
            </p>
          </FormField>
        </FormSection>

        {/* Declaration */}
        <section className="mb-8">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-primary"
            />

            <span className="text-sm leading-6 text-foreground/70">
              I confirm that the information provided is true and correct to the
              best of my knowledge.
            </span>
          </label>
        </section>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-full bg-primary px-6 py-3.5 font-semibold text-surface shadow-sm transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.99]"
        >
          Submit Admission Form
        </button>
      </form>
    </main>
  );
}

export default AdmissionForm;
