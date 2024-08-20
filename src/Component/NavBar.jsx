import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../Provider/AuthProvider";

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
          {/* Create Assignment */}
          Add Product
        </NavLink>
      </li>
      {/* <li>
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
          My Submitted
        </NavLink>
      </li> */}
      <li>
        <NavLink
          activeClassName="border-2 bg-transparent text-yellow-500 border-green-500"
          to="/login"
        >
          Login
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          activeClassName="border-2 bg-transparent text-yellow-500 border-green-500"
          to="/alllist"
        >
          Pending assignments
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar bg-base-100 p-4 shadow-lg">
      <div className="navbar-start">
        <div className="flex-1 flex items-center justify-between lg:justify-start">
          <Link to="/" className="text-2xl font-bold">
            <span>Online </span>
            <span className="text-red-500">Study</span>
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
        <label className="swap swap-rotate">
          <input onClick={toggleTheme} type="checkbox" />
          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64 5.64c1.95-1.95 5.11-1.95 7.07 0s1.95 5.11 0 7.07-5.11 1.95-7.07 0-1.95-5.11 0-7.07zM12 22c5.52 0 10-4.48 10-10s-4.48-10-10-10-10 4.48-10 10 4.48 10 10 10zm0-2c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          </svg>
          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.7 13.35l-2.83-2.83c.31-.57.49-1.24.49-1.95 0-2.21-1.79-4-4-4-.71 0-1.38.18-1.95.49l-2.83-2.83c-1.56 1.56-2.67 3.73-2.67 6.22 0 4.42 3.58 8 8 8 2.49 0 4.66-1.11 6.22-2.67zm-10.94-6.72c.58-.58 1.53-.58 2.12 0s.58 1.53 0 2.12-1.53.58-2.12 0-1.53-.58-2.12 0-.58 1.53 0 2.12 1.53.58 2.12 0c.58-.58 1.53-.58 2.12 0s.58 1.53 0 2.12-1.53.58-2.12 0-1.53.58-2.12 0-.58 1.53 0-2.12zm7.94 9.38c-2.56 2.56-6.14 4-9.94 4-7.73 0-14-6.27-14-14 0-3.8 1.44-7.38 4-9.94 2.56 2.56 4 6.14 4 9.94 0 3.8-1.44 7.38-4 9.94 2.56 2.56 6.14 4 9.94 4 3.8 0 7.38-1.44 9.94-4z"/>
          </svg>
        </label>
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
