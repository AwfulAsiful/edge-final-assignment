import React from "react";
import { BsTranslate } from "react-icons/bs";
import { CiBarcode, CiClock1 } from "react-icons/ci";
import {  FaSearch } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";


function Navbar() {
  return (
    <div className="navbar-container flex flex-col gap-6 md:flex-row justify-between">
      <div className="search-bar rounded-3xl shadow-sm join">
        <select class="select select-bordered rounded-l-xl bg-[#F7F7FA] join-item">
          <option disabled selected>
            All
          </option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <label class="input input-bordered join-item rounded-r-xl flex items-center gap-2">
          <input type="text" class="grow" placeholder="Search" />
          <FaSearch className="text-custom-orange1" />
          <svg
            width="1"
            height="33"
            viewBox="0 0 1 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.5" x2="0.5" y2="33" stroke="#DCDCDC" />
          </svg>
          <CiBarcode className="text-custom-orange1 text-[1.25rem]" />
        </label>
      </div>
      <label className="bg-white pl-4 w-[10rem] rounded-3xl flex items-center gap-2 join">
      <BsTranslate className="text-custom-orange1 text-[1.25rem join-item]" />
        <select class="select join-item">
          <option disabled selected>
            Lang
          </option>
          <option>English</option>
          <option>Bangla</option>
          <option>Arabic</option>
        </select>
      </label>

      <div className="time-and-date-container px-6 flex gap-8 justify-between items-center bg-white rounded-3xl">
        <div className="time flex gap-2">
        <CiClock1 className="text-custom-orange1 font-bold text-[1.25rem]" />
        <h2 className="">09:00 AM</h2>
        </div>
        <div className="date flex gap-2">
        <IoCalendarOutline className="text-custom-orange1 font-bold text-[1.25rem]" />
        <h2 className="">4-Mar-2023</h2>
        </div>
      </div>
      <div className="user-photo">
        <img src="/src/assets/Images/user-profile-photo.png" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
