import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-500 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-3xl flex flex-wrap">
            <span className="bg-clip-text text-transparent text-white">Settle</span>
            <span className="bg-clip-text text-transparent text-white">Inn</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-20 h-5 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-2 items-center">
          <Link to="/">
            <li className="hidden sm:inline text-white font-bold hover:text-gray-800 hover:bg-white py-2 px-3 mx-1 rounded-lg cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-white font-bold hover:text-gray-800 hover:bg-white py-2 px-3 mx-1 rounded-lg cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/testimonials">
            <li className="hidden sm:inline text-white font-bold hover:text-gray-800 hover:bg-white py-2 px-3 mx-1 rounded-lg cursor-pointer">
              Testimonials
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="mx-1 px-3 py-2 font-bold bg-white text-gray-800 rounded-lg hover:bg-gray-200">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
