import React from "react";
import {
  HomeIcon,
  UsersIcon,
  PencilSquareIcon,
  Cog8ToothIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem("token");
    navigate(`/`);
  };
  return (
    <div className="bg-[#131213] shadow-lg w-68 h-full py-6 pr-6 overflow-y-auto flex flex-col justify-between text-white">
      {/* Logo */}
      <div className="space-y-8">
        <div className="flex items-center space-x-3 mb-8 pl-6">
          <img
            src="../assets/logo2.png"
            alt="AAYS Analytics Logo"
            className="h-12"
          />
        </div>

        {/* Sidebar Links */}
        <nav className="space-y-2">
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-l-none rounded-lg transition pl-6 ${
                isActive
                  ? "bg-gradient-to-r from-[#FCFCFC] via-[#E0E0E0] to-[#767171] text-[#C730CB]"
                  : "text-white hover:bg-[#bb1ccc]"
              }`
            }
          >
            <HomeIcon className="h-5 w-5" />
            <span className="text-md font-semibold">Overview</span>
          </NavLink>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-l-none rounded-lg transition pl-6 ${
                isActive
                  ? "bg-gradient-to-r from-[#FCFCFC] via-[#E0E0E0] to-[#767171] text-[#C730CB]"
                  : "text-white hover:bg-[#bb1ccc]"
              }`
            }
          >
            <UsersIcon className="h-5 w-5" />
            <span className="text-md font-semibold">User Management</span>
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-l-none rounded-lg transition pl-6 ${
                isActive
                  ? "bg-gradient-to-r from-[#FCFCFC] via-[#E0E0E0] to-[#767171] text-[#C730CB]"
                  : "text-white hover:bg-[#bb1ccc]"
              }`
            }
          >
            <PencilSquareIcon className="h-5 w-5" />
            <span className="text-md font-semibold">Forms</span>
          </NavLink>
        </nav>
      </div>

      {/* Settings and Logout */}
      <div className="space-y-2">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-l-none rounded-lg transition pl-6 ${
              isActive
                ? "bg-gradient-to-r from-[#FCFCFC] via-[#E0E0E0] to-[#767171] text-[#C730CB]"
                : "text-white hover:bg-[#bb1ccc]"
            }`
          }
        >
          <Cog8ToothIcon className="h-5 w-5" />
          <span className="text-md font-semibold">Settings</span>
        </NavLink>
        <button
          onClick={() => handleLogout()}
          className="flex items-center space-x-3 p-3 rounded-l-none rounded-lg text-white hover:bg-[#bb1ccc] transition pl-6 w-full"
        >
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
          <span className="text-md font-semibold">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
