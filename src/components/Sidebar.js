import React from "react";
import {
  HomeIcon,
  UsersIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition ${
                isActive ? "bg-[#bb1ccc] text-white" : "text-white hover:bg-[#bb1ccc]"
              }`
            }
          >
            <HomeIcon className="h-5 w-5" />
            <span className="text-md">Overview</span>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition ${
                isActive ? "bg-[#bb1ccc] text-white" : "text-white hover:bg-[#bb1ccc]"
              }`
            }
          >
            <UsersIcon className="h-5 w-5" />
            <span className="text-md">User Management</span>
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition ${
                isActive ? "bg-[#bb1ccc] text-white" : "text-white hover:bg-[#bb1ccc]"
              }`
            }
          >
            <PencilIcon className="h-5 w-5" />
            <span className="text-md">Form</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
