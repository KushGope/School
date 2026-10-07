const Contact = () => {
  return (
    <div className="min-h-screen px-4 py-12">
      {/* Page Container */}
      <div className="mx-auto max-w-6xl">
        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT SIDE - SCHOOL INFORMATION */}
          <div className="rounded-2xl bg-accent-green p-8 text-card-white shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold">kamesama</h2>

            <p className="mb-8 text-white/90">
              Have questions about admissions, classes, or school activities?
              Our school office is always happy to help you.
            </p>

            {/* Address */}
            <div className="mb-6 flex gap-4">
              <div className="text-2xl">📍</div>

              <div>
                <h3 className="font-semibold">Address</h3>

                <p className="mt-1 text-sm text-white/90">
                  Your School Address
                  <br />
                  Purulia, West Bengal
                  <br />
                  India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6 flex gap-4">
              <div className="text-2xl">📞</div>

              <div>
                <h3 className="font-semibold">Phone</h3>

                <p className="mt-1 text-sm text-white/90">+91 7001740430</p>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6 flex gap-4">
              <div className="text-2xl">✉️</div>

              <div>
                <h3 className="font-semibold">Email</h3>

                <p className="mt-1 text-sm text-white/90">
                  kamesama123@gmail.com
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex gap-4">
              <div className="text-2xl">🕒</div>

              <div>
                <h3 className="font-semibold">Office Hours</h3>

                <p className="mt-1 text-sm text-white/90">
                  Monday - Saturday
                  <br />
                  9:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="rounded-2xl bg-white p-8 shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Send Us a Message
            </h2>

            <form>
              {/* Name */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-text-dark">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-text-dark/20 bg-card-white px-4 py-3 text-text-dark outline-none transition placeholder:text-text-dark/50 focus:border-accent-green focus:ring-2 focus:ring-accent-green/30"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-text-dark">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-text-dark/20 bg-card-white px-4 py-3 text-text-dark outline-none transition placeholder:text-text-dark/50 focus:border-accent-green focus:ring-2 focus:ring-accent-green/30"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-text-dark">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-lg border border-text-dark/20 bg-card-white px-4 py-3 text-text-dark outline-none transition placeholder:text-text-dark/50 focus:border-accent-green focus:ring-2 focus:ring-accent-green/30"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-accent-green py-3 font-semibold text-card-white shadow-md transition hover:opacity-90 hover:shadow-lg active:scale-[0.99]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
