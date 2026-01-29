import Logo from "../../assets/images/LogoWithoutText.png";
import {
  MdOutlineDarkMode,
  MdOutlineLight,
  MdOutlineShoppingBag,
  MdSearch,
} from "react-icons/md";
import { Link } from "react-router-dom";
import StaggeredMenu from "../Cn/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const TopNavBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#fdfbf7]/80 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#121212]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* ---------------- Mobile Menu ---------------- */}
          <div className="flex items-center md:hidden">
            <StaggeredMenu
              isFixed
              position="left"
              items={menuItems}
              socialItems={socialItems}
              displaySocials
              displayItemNumbering
              menuButtonColor="#2c3e2e"
              openMenuButtonColor="#2c3e2e"
              colors={["#B19EEF", "#5227FF"]}
              accentColor="#5227FF"
            />
          </div>

          {/* ---------------- Logo ---------------- */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label="Pranivaa Home"
          >
            <img
              src={Logo}
              alt="Pranivaa logo"
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-xl font-semibold tracking-[0.25em] text-[#2c3e2e] uppercase dark:text-white">
              Pranivaa
            </span>
          </Link>

          {/* ---------------- Desktop Nav ---------------- */}
          <div className="hidden items-center gap-10 md:flex">
            {[
              { label: "Home", to: "/" },
              { label: "About ", to: "/about" },
              { label: "Services", to: "/process" },
              { label: "Contact", to: "/recipes" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="group relative text-sm tracking-wide text-[#2c3e2e] dark:text-white/80"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#2c3e2e] transition-all duration-300 group-hover:w-full dark:bg-white" />
              </Link>
            ))}
          </div>

          {/* ---------------- Actions ---------------- */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Theme Toggle */}
            <button
              aria-label="Toggle theme"
              className="group rounded-full border border-black/10 bg-white/50 p-2 transition hover:bg-black hover:text-white dark:border-white/20 dark:bg-white/10 dark:hover:bg-white dark:hover:text-black"
            >
              <MdOutlineDarkMode className="text-xl dark:hidden" />
              <MdOutlineLight className="hidden text-xl dark:block" />
            </button>

            {/* Search */}
            <button
              aria-label="Search"
              className="rounded-full p-2 transition hover:bg-black/5 dark:hover:bg-white/10"
            >
              <MdSearch className="text-xl text-[#2c3e2e] dark:text-white" />
            </button>

            {/* Cart */}
            <button
              aria-label="Shopping cart"
              className="relative rounded-full p-2 transition hover:bg-black/5 dark:hover:bg-white/10"
            >
              <MdOutlineShoppingBag className="text-xl text-[#2c3e2e] dark:text-white" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
