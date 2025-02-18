import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="navbar  px-8 sticky top-0 z-50 bg-gray-100">
      <div className="navbar-start ">
        <div className="dropdown text-primary">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li className="font-bold ">Home</li>
            </Link>
            <Link to="/allToys">
              <li className="font-bold ">All Toys</li>
            </Link>
            {
              user?.uid? <><Link to="/addAToy">
              <li className="font-bold ">Add A Toy</li>
            </Link>
            <Link to="/myToys">
              <li className="font-bold ">My Toys</li>
            </Link></> : <></>
            }
            <Link to="/blog">
              <li className="font-bold">Blog</li>
            </Link>
          </ul>
        </div>

        <Link
          to="/"
          className="text-primary font-extrabold text-3xl font-mono flex justify-center items-center gap-2 flex-wrap"
        >
          <img src='https://i.ibb.co/VQzYXCz/Toy-World-Logo-01-scaled.jpg' className="h-8 hidden lg:block" alt="" />
          Toy World
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-gray-700">
        <ul className="menu menu-horizontal p-0 gap-4">
          <Link to="/">
            <li className="font-bold">Home</li>
          </Link>
          <Link to="/allToys">
            <li className="font-bold ">All Toys</li>
          </Link>
            {
              user?.uid? <>          <Link to="/addAToy">
              <li className="font-bold ">Add A Toy</li>
            </Link>
            <Link to="/myToys">
              <li className="font-bold ">My Toys</li>
            </Link></> : <></>
            }
          <Link to="/blog">
            <li className="font-bold">Blog</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div className="flex gap-4 items-center flex-wrap justify-end">
            <div
              className="tooltip tooltip-bottom font-bold"
              data-tip={user?.displayName}
            >
              <img
                className="h-10 w-10 rounded-3xl"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <button
              onClick={handleLogOut}
              to="/login"
              className="btn btn-primary text-accent"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary text-accent">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
