import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col justify-center items-center p-2 " style={{ marginTop: "24vh"}}>
      <div>
        <ul className=" flex flex-col justify-center items-center text-white sm:hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center p-3 text-white">
        <div> Copyright © 2024 SettleInn.</div>
        <div>All rights reserved.</div>
      </div>
    </footer>
  );
}
