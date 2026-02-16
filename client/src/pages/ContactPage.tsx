import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
    
  return (
    <div className="font-poppins text-[#2c3e2e] dark:text-white dark:bg-black">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6"
          >
            <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light text-white/90 md:text-xl">
              We'd love to hear from you. Whether you have a question about our
              products, pricing, or anything else, our team is ready to answer all
              your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT CONTENT --- */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl text-[#2c3e2e] dark:text-white">
                Contact Information
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#2c3e2e] dark:text-white">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-300">+91 98765 43210</p>
                  <p className="text-slate-600 dark:text-slate-300">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#2c3e2e] dark:text-white">Email</h3>
                  <p className="text-slate-600 dark:text-slate-300">hello@pranivaa.com</p>
                  <p className="text-slate-600 dark:text-slate-300">support@pranivaa.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#2c3e2e] dark:text-white">Address</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    123, Green Earth Avenue,
                    <br />
                    Near Nature Park,
                    <br />
                    Bangalore, Karnataka - 560001
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-white p-8 shadow-xl dark:bg-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="Your message..."
                />
              </div>

              <div className="flex w-full items-center justify-center">
                <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2c3e2e] px-8 py-4 text-center font-medium text-white transition-colors hover:bg-[#1a261c] focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                Send Message <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
