import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../Provider/AuthProvider";
import { HiMoon, HiSun } from 'react-icons/hi'; // Import icons from react-icons

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const links = (
    <>
      <li>
        <NavLink
          activeClassName="border-2 bg-transparent text-blue-500 border-blue-500"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="border-2 bg-transparent text-blue-500 border-blue-500"
          to="/createassignment"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="border-2 bg-transparent text-yellow-500 border-green-500"
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 p-4 shadow-lg">
      <div className="navbar-start">
        <div className="flex-1 flex items-center justify-between lg:justify-start">
          <Link to="/" className="text-2xl font-bold">
            <span>E-Com </span>
            <span className="text-red-500">Shop</span>
          </Link>
          <div className="ml-6 lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
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
            </button>
          </div>
        </div>
        <div className={`dropdown ${isOpen ? 'block' : 'hidden'} lg:hidden`}>
          <ul className="menu menu-compact mt-3 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-4 flex items-center">
        <button onClick={toggleTheme} className="p-2 rounded-full border border-gray-300 bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
          {theme === 'dark' ? (
            <HiSun className="text-yellow-500 w-6 h-6" />
          ) : (
            <HiMoon className="text-gray-800 w-6 h-6" />
          )}
        </button>
        {user ? (
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user.displayName}
            className="avatar"
          >
            <div className="w-12 rounded-full overflow-hidden">
              <img src={user.photoURL} alt="avatar" />
            </div>
            <Tooltip id="my-tooltip" />
          </div>
        ) : null}
        {user ? (
          <button onClick={handleSignOut} className="btn btn-primary">
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
