import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      const { user } = await signOutUser();
      console.log(user);
      console.log("Signed Out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav
        className="relative w-full bg-neutral-800 py-3 ps-3 pe-4 md:flex md:items-center md:justify-between md:py-2 mx-2 lg:mx-auto"
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
                className="flex items-center w-full text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 md:mr-2"
              >
                {user ? (
                  <div>
                    <img
                      src={user?.photoURL}
                      alt="pro-pic"
                      className="size-10 rounded-full"
                    />
                  </div>
                ) : (
                  <div>
                    <Link
                      to="/login"
                      className="group inline-flex items-center gap-x-2 py-2 px-3 bg-lime-400 hover:bg-lime-500 font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                    >
                      JOIN US
                    </Link>
                  </div>
                )}
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-neutral-800 md:shadow-md rounded-lg before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5">
                {user && (
                  <button className="flex disabled items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300">
                    {user?.displayName}
                  </button>
                )}

                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] relative">
                  {user && (
                    <Link
                      to={"/dashboard/profile"}
                      className="w-full flex justify-between items-center py-2 px-3 text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                    >
                      Dashboard
                    </Link>
                  )}
                </div>

                {user && (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                    href="#"
                  >
                    Log Out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
