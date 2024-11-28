import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#bb1ccc] text-white p-4 shadow w-full">
      {/* Search Bar */}
      <div className="flex items-center space-x-3 px-4 py-2 rounded-2xl w-1/3">
        <input
          type="text"
          placeholder="Search for something"
          className="bg-transparent outline-none w-full bg-[white] text-sm placeholder-gray-500 text-gray-700"
        />
        <MagnifyingGlassIcon className="h-8 w-8 text-white" />
      </div>

      {/* User Info Section */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition">
          <BellIcon className="h-6 w-6 text-white" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <p className="text-sm font-semibold">Liana Fletcher</p>
            <p className="text-xs text-white text-opacity-75">
              lianafletcher@aays.com
            </p>
          </div>
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
