import Logo from "../../assets/images/LogoWithoutText.png";
import {
  MdOutlineDarkMode,
  MdOutlineLight,
  MdOutlineShoppingBag,
  MdSearch,
} from "react-icons/md";
import { Link } from "react-router-dom";
const TopNavBar = () => {
  //   const navigate = useNavigate();
  //   const goBack = () => {
  //     navigate(-1); // Navigate to previous page
  //   };

  return (
    <nav className="bg-background-light/90 dark:bg-background-dark/90 fixed z-50 w-full border-b border-gray-200 backdrop-blur-md transition-colors duration-300 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center md:hidden">
            <button className="hover: text-gray-600 dark:text-gray-300">
              <span className="material-icons-outlined hidden text-3xl">
                menu
              </span>
            </button>
          </div>
          <div className="flex flex-1 flex-shrink-0 items-center justify-center md:flex-none md:justify-start">
            <Link className="group flex items-center gap-2" to="/">
              <img src={Logo} className="h-18 w-20" />

              <span className="font-display text-2xl font-bold tracking-wide uppercase">
                Pranivaa
              </span>
            </Link>
          </div>
          <div className="hidden space-x-8 md:flex">
            <a
              className="hover: text-sm font-medium transition-colors"
              href="#"
            >
              Shop Oils
            </a>
            <Link
              className="hover: text-sm font-medium transition-colors"
              to={"/about"}
            >
              Our Story
            </Link>
            <a
              className="hover: text-sm font-medium transition-colors"
              href="#process"
            >
              Process
            </a>
            <a
              className="hover: text-sm font-medium transition-colors"
              href="#"
            >
              Recipes
            </a>
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            <button className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800">
              <span className="material-icons-outlined text-xl dark:hidden">
                <MdOutlineDarkMode />
              </span>
              <span className="material-icons-outlined hidden text-xl dark:inline">
                <MdOutlineLight />
              </span>
            </button>
            <a className="hover: p-2 transition-colors" href="#">
              <span className="material-icons-outlined text-xl">
                <MdSearch />
              </span>
            </a>
            <a className="hover: relative p-2 transition-colors" href="#">
              <span className="material-icons-outlined text-xl">
                <MdOutlineShoppingBag />
              </span>
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-lime-800 text-[10px] text-white">
                2
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
