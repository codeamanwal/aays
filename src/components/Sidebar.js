import React, { useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  PencilSquareIcon,
  Cog8ToothIcon,
  ArrowLeftOnRectangleIcon,
  PencilIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // localStorage.removeItem("token");
    navigate(`/`);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const NavItem = ({ to, icon: Icon, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 p-3 rounded-l-none rounded-lg transition pl-6 ${
          isActive
            ? "bg-gradient-to-r from-[#FCFCFC] via-[#E0E0E0] to-[#767171] text-[#C730CB]"
            : "text-white hover:bg-[#bb1ccc]"
        }`
      }
      onClick={() => setIsOpen(false)}
    >
      <Icon className="h-5 w-5" />
      <span className="text-md font-semibold">{children}</span>
    </NavLink>
  );

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4  z-20 p-2 bg-transparent text-white rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
      <div
        className={`bg-[#131213] shadow-lg w-64 h-full py-6 pr-6 overflow-y-auto flex flex-col justify-between text-white fixed top-0 left-0 z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo */}
        <div className="space-y-8">
          <div className="flex items-center space-x-3 mb-8 pl-6">
            <img
              src="../assets/logo2.png"
              alt="AAYS Analytics Logo"
              className="h-12 mt-16"
            />
          </div>

          {/* Sidebar Links */}
          <nav className="space-y-2">
            <NavItem to="/overview" icon={HomeIcon}>Overview</NavItem>
            <NavItem to="/user" icon={UsersIcon}>User</NavItem>
            <NavItem to="/form" icon={PencilSquareIcon}>Forms</NavItem>
            <NavItem to="/customize" icon={PencilIcon}>Customize</NavItem>
          </nav>
        </div>

        {/* Settings and Logout */}
        <div className="space-y-2">
          <NavItem to="/settings" icon={Cog8ToothIcon}>Settings</NavItem>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 p-3 rounded-l-none rounded-lg text-white hover:bg-[#bb1ccc] transition pl-6 w-full"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            <span className="text-md font-semibold">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

