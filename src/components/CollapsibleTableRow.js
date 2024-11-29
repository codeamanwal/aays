import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

const CollapsibleTableRow = ({ entry, onEdit, onDelete, onView }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  // Define main table fields to exclude from additional details
  const mainFields = [
    "Supplier Code",
    "Product Code",
    "Net Quantity",
    "Purchase Order",
    "Batch Number",
    "Status",
  ];

  // Filter out main fields to get additional details
  const additionalDetails = entry.fields.filter(
    (field) => !mainFields.includes(field.label)
  );

  return (
    <>
      <tr className="border-b">
        {/* Details Toggle */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
          <button
            onClick={handleToggle}
            className="flex items-center text-indigo-600 hover:text-indigo-900 focus:outline-none"
          >
            {open ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </button>
        </td>
        {/* Supplier Code */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
          {entry.fields.find((f) => f.label === "Supplier Code")?.userInput || "N/A"}
        </td>
        {/* Product Code */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
          {entry.fields.find((f) => f.label === "Product Code")?.userInput || "N/A"}
        </td>
        {/* Net Quantity */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
          {entry.fields.find((f) => f.label === "Net Quantity")?.userInput || "N/A"}
        </td>
        {/* Purchase Order */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
          {entry.fields.find((f) => f.label === "Purchase Order")?.userInput || "N/A"}
        </td>
        {/* Batch Number */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
          {entry.fields.find((f) => f.label === "Batch Number")?.userInput || "N/A"}
        </td>
        {/* Status */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              entry.fields.find((f) => f.label === "Status")?.userInput === "Completed"
                ? "bg-green-100 text-green-800"
                : entry.fields.find((f) => f.label === "Status")?.userInput === "In Progress"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {entry.fields.find((f) => f.label === "Status")?.userInput || "N/A"}
          </span>
        </td>

        {/* Actions */}
        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
          <button
            onClick={() => onView(entry)}
            className="text-indigo-600 hover:text-indigo-900 mr-2"
          >
            <EyeIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => onEdit(entry)}
            className="text-yellow-600 hover:text-yellow-900 mr-2"
          >
            <PencilSquareIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(entry)}
            className="text-red-600 hover:text-red-900"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </td>
      </tr>
      {/* Collapsible Row */}
      {open && (
        <tr>
          <td className="px-6 py-4 whitespace-nowrap" colSpan={8}>
            <div className="bg-gray-50 p-4 rounded-md shadow-inner">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Additional Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {additionalDetails.map((field) => (
                  <div key={field.label}>
                    <span className="font-medium text-gray-700">
                      {field.label}:
                    </span>{" "}
                    <span className="text-gray-600">
                      {field.userInput || "N/A"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default CollapsibleTableRow;
