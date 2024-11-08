import React from "react";
import {
  HomeIcon,
  UsersIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#081D47] shadow-lg w-64 h-full p-6 overflow-y-auto text-white">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3 mb-8">
        <img
          src="/assets/logo2.png"
          alt="AAYS Analytics Logo"
          className="h-12"
        />
      </div>

      {/* Sidebar Links */}
      <nav className="space-y-6">
        {/* Dashboard Section */}
        <div className="space-y-2">
          <h3 className="text-white uppercase text-xs font-semibold">
            Dashboard
          </h3>
          <Link
            to="/dashboard"
            className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-[#bb1ccc] hover:text-white transition"
          >
            <HomeIcon className="h-5 w-5" />
            <span className="text-md">Overview</span>
          </Link>
          <Link
            to="/"
            className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-[#bb1ccc] hover:text-white transition"
          >
            <UsersIcon className="h-5 w-5" />
            <span className="text-md">User Management</span>
          </Link>
          <Link
            to="/form"
            className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-[#bb1ccc] hover:text-white transition"
          >
            <PencilIcon className="h-5 w-5" />
            <span className="text-md">Form</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
