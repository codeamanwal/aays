// EditModal.jsx
import React, { useState, useEffect } from "react";
import Switch from "./Switch"; // Ensure the path is correct

const EditModal = ({ entry, isOpen, onClose, onSave }) => {
  const [formFields, setFormFields] = useState([]);

  useEffect(() => {
    if (entry && entry.fields) {
      setFormFields(entry.fields);
    }
  }, [entry]);

  const handleChange = (index, value) => {
    const updatedFields = [...formFields];
    updatedFields[index].userInput = value;
    setFormFields(updatedFields);
  };

  const handleToggle = (index) => {
    const updatedFields = [...formFields];
    const currentValue = updatedFields[index].userInput === "true";
    updatedFields[index].userInput = !currentValue;
    setFormFields(updatedFields);
  };

  const handleSelectChange = (index, value) => {
    const updatedFields = [...formFields];
    updatedFields[index].userInput = value;
    setFormFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEntry = { ...entry, fields: formFields };
    onSave(updatedEntry);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-6"
      aria-modal="true"
      role="dialog"
      aria-labelledby="edit-modal-title"
      onClick={onClose} // Close modal when clicking outside the content
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-y-auto max-h-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2
            id="edit-modal-title"
            className="text-2xl font-semibold text-gray-800"
          >
            Edit Form
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map((field, index) => (
              <div key={field.label}>
                {field.fieldType === "boolean" ? (
                  <Switch
                    label={field.label}
                    checked={field.userInput === "true"}
                    onChange={() => handleToggle(index)}
                  />
                ) : field.fieldType === "dropdown" ? (
                  <label className="block">
                    <span className="text-gray-700">
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </span>
                    <select
                      value={field.userInput || ""}
                      onChange={(e) =>
                        handleSelectChange(index, e.target.value)
                      }
                      required={field.required}
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="" disabled>
                        Select {field.label.toLowerCase()}
                      </option>
                      {field.options &&
                        field.options.map((option) => (
                          <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </option>
                        ))}
                    </select>
                  </label>
                ) : field.fieldType === "date" ? (
                  <label className="block">
                    <span className="text-gray-700">
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </span>
                    <input
                      type="date"
                      value={field.userInput || ""}
                      onChange={(e) => handleChange(index, e.target.value)}
                      required={field.required}
                      className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm"
                    />
                  </label>
                ) : field.fieldType === "number" ? (
                  <label className="block">
                    <span className="text-gray-700">
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </span>
                    <input
                      type="number"
                      value={field.userInput || ""}
                      onChange={(e) => handleChange(index, e.target.value)}
                      required={field.required}
                      className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm"
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  </label>
                ) : (
                  <label className="block">
                    <span className="text-gray-700">
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </span>
                    <input
                      type="text"
                      value={field.userInput || ""}
                      onChange={(e) => handleChange(index, e.target.value)}
                      required={field.required}
                      className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm"
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  </label>
                )}
              </div>
            ))}
          </div>

          {/* Form Actions */}
          <div className="flex justify-end mt-6 space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
