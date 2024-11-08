import React from "react";
import { BellIcon, CogIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4 sticky top-0 z-10">
      {/* Search Bar */}
      <div className="flex items-center space-x-3 bg-gray-100 px-4 py-2 rounded-lg w-1/3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-sm text-gray-600"
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
          <BellIcon className="h-6 w-6 text-gray-500" />
        </button>
        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
          <CogIcon className="h-6 w-6 text-gray-500" />
        </button>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-200"
        />
      </div>
    </div>
  );
};

export default Navbar;
