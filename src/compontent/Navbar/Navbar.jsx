import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
// import {FaBars} from "react-icons/fa"
import ResponsiveMenu from "../ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Features",
    link: "/Features",
  },
//   {
//     id: 4,
//     name: "Testimonial ",
//     link: "/Testimonial ",
//   },
  {
    id: 4,
    name: "Contact",
    link: "/Contact",
  },
//   {
//     id: 6,
//     name: "AppStore ",
//     link: "/AppStore ",
//   },
//   {
//     id: 7,
//     name: "Notpage ",
//     link: "/Notpage ",
//   },
];
const Navbar = () => {
  const pathname = window.location.pathname;
  const [showMenu, setShowmenu] = useState(false);
  const toggleMenu = () => {
    setShowmenu(!showMenu);
  };

  return (
    <nav className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className=" flex items-center justify-between">
          {/* {logo Section} */}

          <Link href="/" className="text-3xl font-bold">
            <span>Cab</span>
            <span className="text-primary">Hub</span>
          </Link>

          {/* Desktop Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {Navlinks.map(({ id, name, link }) => {
                const isActive = pathname === link;
                return (
                  <li key={id} className=" p-4">
                    <Link
                      to={link}
                      className={`${
                        isActive ? "bg-primary dark:text-black" : ""
                      } text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary dration-300`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              {/* { implDarkMode feature implement} */}

              <DarkMode />
            </ul>
          </div>

          {/* Mobile Menu section */}
          <div className="md:hidden flex items-center gap-4">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer  transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};
export default Navbar;
