import React from "react";

const ViewModal = ({ entry, isOpen, onClose }) => {
  if (!isOpen || !entry) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-[1000px] w-full overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Form Details
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* Render Fields Dynamically */}
          {entry.fields.map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              {field.fieldType === "boolean" ? (
                <div
                  className={`w-12 h-6 flex items-center rounded-full p-1 ${
                    field.userInput ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`h-4 w-4 bg-white rounded-full shadow-md transform ${
                      field.userInput ? "translate-x-6" : ""
                    }`}
                  ></div>
                </div>
              ) : (
                <div className="border rounded px-3 py-2 w-full bg-gray-100 text-gray-800">
                  {field.userInput || "N/A"}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
