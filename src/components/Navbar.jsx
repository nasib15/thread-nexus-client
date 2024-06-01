import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav
        className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-3 pe-4 md:flex md:items-center md:justify-between md:py-2 mx-2 lg:mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            to="/"
          >
            <div className="flex items-center">
              <img src={logo} alt="logo" className="w-16" />
              <span className="text-white">Thread Nexus</span>
            </div>
          </Link>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse"
              aria-controls="navbar-collapse"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
            <Link
              to={"/"}
              className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
            >
              Home
            </Link>
            <Link
              to={"/membership"}
              className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
            >
              Membership
            </Link>

            <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] py-3 ps-px sm:px-3 md:py-4">
              <button
                type="button"
                className="flex items-center w-full text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
              >
                About
                <svg
                  className="flex-shrink-0 ms-1 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-neutral-800 md:shadow-md rounded-lg p-2 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                  href="#"
                >
                  About
                </a>
                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] relative">
                  <button
                    type="button"
                    className="w-full flex justify-between items-center py-2 px-3 text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                  >
                    Sub Menu
                  </button>
                </div>

                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                  href="#"
                >
                  Downloads
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                  href="#"
                >
                  Team Account
                </a>
              </div>
            </div>

            <div>
              <Link
                to="/login"
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-lime-400 hover:bg-lime-500 font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
              >
                JOIN US
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
