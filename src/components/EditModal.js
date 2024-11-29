import React, { useState, useEffect } from "react";
import Switch from "./Switch";

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
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-y-auto max-h-full">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
                ) : (
                  <label className="block">
                    <span className="text-gray-700">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </span>
                    <input
                      type={field.fieldType === "number" ? "number" : "text"}
                      value={field.userInput || ""}
                      onChange={(e) => handleChange(index, e.target.value)}
                      required={field.required}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
