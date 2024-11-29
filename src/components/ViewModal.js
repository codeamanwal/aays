import React from "react";

const ViewModal = ({ entry, isOpen, onClose }) => {
  if (!isOpen || !entry) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-6"
      aria-modal="true"
      role="dialog"
      aria-labelledby="view-modal-title"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-y-auto max-h-full">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2
            id="view-modal-title"
            className="text-2xl font-semibold text-gray-800"
          >
            Form Details
          </h2>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {entry.fields.map((field) => (
                  <tr key={field.label}>
                    <th
                      scope="row"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-700 whitespace-nowrap"
                    >
                      {field.label}
                    </th>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {field.userInput || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Close Button at Bottom */}
          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
