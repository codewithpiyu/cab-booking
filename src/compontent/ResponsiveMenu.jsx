import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar/Navbar";
const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-dark dark:text-white px-8 pb-6 pt-16 text-black duration-300 md:hidden rounde-r-xl shadow-md `}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle className="text-5xl" />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Permiun User</h1>
          </div>
        </div>
        {/* // Navigation links section */}
        <nav>
          <ul className="mt-12">
            {Navlinks.map(({ id, name, link }) => {
              return (
                <li key={id} className="py-4">
                  <Link
                    href={link}
                    className={`text-xl font-medium text-black dark:text-white dration-300`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* footer section */}
      <div className="footer">
        <h1>
          Made with by <a href="#githublink">Priyanka</a>
          {""}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
