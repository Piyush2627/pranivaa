import Logo from "../../assets/images/LogoWithoutText.png";
import { MdOutlineShoppingBag, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import StaggeredMenu from "../Cn/StaggeredMenu";
import ThemeToggleButton from "./ThemeToggleButton";
import { useCart } from "../../context/CartContext";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  { label: "Products", ariaLabel: "Shop for Product", link: "/productsPage" },
  { label: "Why Cold Press", ariaLabel: "Go to why cold press page", link: "/why-cold-pressed" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const TopNavBar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)", backdropFilter: "blur(0px)" }}
      animate={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.05)" : "1px solid rgba(0,0,0,0)"
      }}
      transition={{ duration: 0.3 }}
      className="font-source-serif fixed top-0 z-50 w-full transition-colors dark:border-white/10 dark:bg-[#121212]/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
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
            <span className="font-display text-xl font-semibold tracking-[0.1em] text-lime-800 uppercase dark:text-white">
              Pranivaa
            </span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {[
              {
                label: "Products",
                to: "/productsPage",
              },
              { label: "Why Cold Press ", to: "/why-cold-pressed" },
              { label: "Knowledge Hub", to: "/process" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="group relative text-sm tracking-wide text-[#2c3e2e] dark:text-white/80"
              >
                {item.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#2c3e2e] dark:bg-white" 
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* ---------------- Actions ---------------- */}
          <div className="items-center gap-3 md:flex">
            <div className="hidden items-center md:flex">
              <ThemeToggleButton />

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Search"
                className="rounded-full p-2 transition hover:bg-black/5 dark:hover:bg-white/10"
              >
                <MdSearch className="text-xl text-[#2c3e2e] dark:text-white" />
              </motion.button>

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping cart"
                className="relative rounded-full p-2 transition hover:bg-black/5 dark:hover:bg-white/10"
              >
                <MdOutlineShoppingBag className="text-xl text-[#2c3e2e] dark:text-white" />
                {totalItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-lime-800 text-[10px] font-bold text-white"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>
            </div>
            {/* Theme Toggle */}

            {/* Search */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/login" className="rounded-full bg-[#7B542F] px-5 py-2 text-white" aria-label="Login button">
                Login
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default TopNavBar;


