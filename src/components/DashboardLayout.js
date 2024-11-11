import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom"; // Import Outlet

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="overflow-y-auto">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow bg-gray-100 overflow-y-auto">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6 overflow-y-auto">
          <Outlet /> {/* Render nested routes here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
