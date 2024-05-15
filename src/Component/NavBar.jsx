import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
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
          Create Assignment
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="border-2 bg-transparent text-blue-500 border-blue-500"
          to="/assignment"
        >
          All Assignment
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="border-2 bg-transparent text-blue-500 border-blue-500"
          to="/mylist"
        >
          My List
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
      <li>
        <NavLink
          activeClassName="border-2 bg-transparent text-yellow-500 border-green-500"
          to="/alllist"
        >
          all list
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar my-8 z-10 relative">
      <p className="text-2xl gap-2 font-bold"><span>Online </span><span className="text-red-500"> Study</span></p>
      <div className="ml-32 hidden lg:block">
        <label className="swap swap-rotate">
          <input onClick={toggleTheme} type="checkbox" />
        </label>
      </div>
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
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
          {isOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-semibold gap-2 px-4">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-4 items-center">
        {user ? ( 
          <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className="avatar">
            <div className="w-12 rounded-full overflow-hidden">
              <img
                src={user.photoURL} 
                alt="avatar"
              />
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
