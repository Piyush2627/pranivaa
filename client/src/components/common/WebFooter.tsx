import Logo from "../../assets/images/LogoWithoutText.png";
import { motion } from "framer-motion";

const WebFooter = () => {
  return (
    <div>
      {" "}
      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-gray-200 bg-[#F5FBE6] pt-16 pb-8 dark:border-gray-800"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <a className="mb-6 flex items-center gap-2" href="#">
                <div className="flex items-center justify-center rounded-full">
                  <span className="text-sm">
                    <img src={Logo} className="" alt="" />
                  </span>
                </div>
                <span className="font-display text-xl font-bold tracking-wide uppercase">
                  Pranivaa
                </span>
              </a>
              <p className="mb-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Bringing you the goodness of nature through traditional
                wood-pressed oils. Pure, healthy, and full of love.
              </p>
              <div className="flex space-x-4">
                <a className="hover: text-gray-400 transition" href="#">
                  <i className="material-icons-outlined">facebook</i>
                </a>
                <a className="hover: text-gray-400 transition" href="#">
                  <i className="material-icons-outlined">photo_camera</i>
                </a>
                <a className="hover: text-gray-400 transition" href="#">
                  <i className="material-icons-outlined">alternate_email</i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display mb-6 text-lg font-bold text-gray-900 dark:text-white">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a className="hover: transition" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Shop Oils
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display mb-6 text-lg font-bold text-gray-900 dark:text-white">
                Customer Care
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a className="hover: transition" href="#">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Returns &amp; Refunds
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover: transition" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display mb-6 text-lg font-bold text-gray-900 dark:text-white">
                Stay Connected
              </h4>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Subscribe to get special offers and healthy recipes.
              </p>
              <form className="space-y-2">
                <input
                  className="bg-background-light dark:bg-background-dark focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition outline-none focus:border-transparent focus:ring-2 dark:border-gray-600 dark:text-white"
                  placeholder="Your email address"
                  type="email"
                />
                <button
                  className="hover:bg-opacity-90 w-full rounded-lg bg-[#7B542F] px-4 py-3 font-medium text-white shadow-md transition"
                  type="button"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © 2023 Pranivaa Oils. All rights reserved.
            </p>
            <div className="flex space-x-2">
              <span className="flex h-6 w-10 items-center justify-center rounded bg-gray-200 text-[10px] text-gray-500 dark:bg-gray-700">
                VISA
              </span>
              <span className="flex h-6 w-10 items-center justify-center rounded bg-gray-200 text-[10px] text-gray-500 dark:bg-gray-700">
                MC
              </span>
              <span className="flex h-6 w-10 items-center justify-center rounded bg-gray-200 text-[10px] text-gray-500 dark:bg-gray-700">
                PAY
              </span>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default WebFooter;
