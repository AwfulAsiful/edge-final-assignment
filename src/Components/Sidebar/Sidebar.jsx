import React from "react";
import { FaHeart, FaHome, FaSearch } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container px-[4rem]  bg-white py-[2.25rem] flex flex-col justify-center">
      <div className="logo">
        <img src="/src/assets/Images/Logo 1.png" alt="" />
      </div>
      <div className="navlinks mt-[5rem] flex flex-col gap-y-[2rem] text-[1.25rem]">
        <div className="link-1 flex items-center gap-x-2 text-custom-gray2 hover:text-custom-gray1">
          <FaHome />
          <Link to={"/"}>Home</Link>
        </div>
        <div className="link-2 flex items-center gap-x-2 text-custom-gray2 hover:text-custom-gray1">
          <FaSearch />
          <Link to={"/"}>Search</Link>
        </div>
        <div className="link-3 flex items-center gap-x-2 text-custom-gray2 hover:text-custom-gray1">
          <GiBookshelf />
          <Link to={"/"}>My Shelf</Link>
        </div>
        <div className="link-4 flex items-center gap-x-2 text-custom-gray2 hover:text-custom-gray1">
          <FaHeart />
          <Link to={"/"}>Favorites</Link>
        </div>
      </div>

      <div className="bottom-navlinks mt-[5rem] flex flex-col gap-y-4 text-custom-gray2 ">
        <div className="bottom-navlink">
          <Link to={"/"} className="hover:text-custom-gray1">
            About
          </Link>
        </div>
        <div className="bottom-navlink">
          <Link to={"/"} className="hover:text-custom-gray1">
            Support
          </Link>
        </div>
        <div className="bottom-navlink">
          <Link to={"/"} className="hover:text-custom-gray1">
            Terms & Condition
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
