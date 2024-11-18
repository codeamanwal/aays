import React from "react";
import {
  PencilIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-start justify-center h-screen mt-10 bg-gray-100">
      <div className="flex gap-8">
        {/* Data Entry Button */}
        <button
          onClick={() => navigate("/form")}
          className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <PencilIcon className="w-6 h-6 mr-3" />
          Data Entry
        </button>
        {/* Data View/Edit Button */}
        <button
          onClick={() => navigate("/user")}
          className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <ClipboardDocumentListIcon className="w-6 h-6 mr-3" />
          Data View/Edit
        </button>
      </div>
    </div>
  );
};

export default Overview;
