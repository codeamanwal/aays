import React from "react";
import { PencilIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 max-h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome</h2>
          <p className="mt-2 text-sm text-gray-600">
            Choose an option below to get started.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-4">
          {/* Data Entry Button */}
          <button
            onClick={() => navigate("/form")}
            className="group relative w-full flex items-center justify-center py-4 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PencilIcon className="h-6 w-6 text-indigo-200 group-hover:text-indigo-100 mr-3" />
            Data Entry
          </button>

          {/* Data View/Edit Button */}
          <button
            onClick={() => navigate("/user")}
            className="group relative w-full flex items-center justify-center py-4 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ClipboardDocumentListIcon className="h-6 w-6 text-indigo-200 group-hover:text-indigo-100 mr-3" />
            Data View/Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
