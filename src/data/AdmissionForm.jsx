import { useState } from "react";

function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    className: "",
    fatherName: "",
    motherName: "",
    guardianPhone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    previousSchool: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Admission form submitted successfully!");
  };

  return (
    <div className="min-h-screen py-10 px-4">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#fafaf9] text-accent-green">
          School Admission Form
        </h1>

        <p className="mt-2 text-slate-500">
          Please fill in all the required information carefully.
        </p>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-card-white rounded-2xl shadow-lg p-6 md:p-10"
      >
        {/* Student Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 border-b pb-3 mb-6">
            Student Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Student Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Student Full Name *
              </label>

              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter student's full name"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Date of Birth *
              </label>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Gender *
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Class */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Applying For Class *
              </label>

              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select Class</option>
                <option value="nursery">Nursery</option>
                <option value="lkg">LKG</option>
                <option value="ukg">UKG</option>
                <option value="class-1">Class 1</option>
                <option value="class-2">Class 2</option>
                <option value="class-3">Class 3</option>
                <option value="class-4">Class 4</option>
                <option value="class-5">Class 5</option>
              </select>
            </div>

            {/* Previous School */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Previous School
              </label>

              <input
                type="text"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                placeholder="Previous school name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </section>

        {/* Parent Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 border-b pb-3 mb-6">
            Parent / Guardian Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Father */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Father's Name *
              </label>

              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Enter father's name"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Mother */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Mother's Name *
              </label>

              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Enter mother's name"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number *
              </label>

              <input
                type="tel"
                name="guardianPhone"
                value={formData.guardianPhone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </section>

        {/* Address */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 border-b pb-3 mb-6">
            Address
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Address *
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your full address"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                State
              </label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                PIN Code
              </label>

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="PIN Code"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 border-b pb-3 mb-6">
            Documents
          </h2>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Upload Birth Certificate
            </label>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm"
            />

            <p className="text-xs text-slate-500 mt-2">
              Accepted formats: PDF, JPG, JPEG, PNG
            </p>
          </div>
        </section>

        {/* Declaration */}
        <section className="mb-8">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              required
              className="mt-1 h-5 w-5 accent-blue-600"
            />

            <p className="text-sm text-slate-600">
              I declare that the information provided above is true and correct
              to the best of my knowledge. I understand that providing incorrect
              information may result in cancellation of the admission.
            </p>
          </div>
        </section>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-accent-green py-4 text-lg font-bold text-white transition hover:bg-accent-green active:scale-[0.99]"
        >
          Submit Admission Form
        </button>
      </form>
    </div>
  );
}

export default AdmissionForm;
