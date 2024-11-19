import { ImBooks } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export default function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const { user } = useContext(AuthContext);
  console.log(user);

  const links = (
    <div className="text-xl space-x-5 text-blue-600 hover:text-blue-800">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/letslearn"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        Start-Learning
      </NavLink>
      <NavLink
        to="/tutorials"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        Tutorials
      </NavLink>
      <NavLink
        to="/myprofile"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        My-Profile
      </NavLink>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white shadow-lg">
      <div className="navbar w-11/12 mx-auto py-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg flex flex-col"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold text-blue-700">
            <span className="text-blue-500">
              <ImBooks />
            </span>
            <span data-aos="flip-left" className="text-blue-700">
              PhraseCraze
            </span>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2 font-bold">
          {user ? (
            <>
              <p className="text-blue-600">Welcome to PhraseCraze {user.name}</p> <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">Logout</button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Log In
              </Link>
              <Link
                to="/auth/register"
                className="px-4 py-2 rounded-md bg-white text-blue-600 border border-blue-500 hover:bg-blue-500 hover:text-white transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
