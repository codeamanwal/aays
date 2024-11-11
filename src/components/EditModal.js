import React, { useState, useEffect } from "react";

const EditModal = ({ entry, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState(entry ? entry.fields : []);

  useEffect(() => {
    if (entry) {
      setFormData(entry.fields);
    }
  }, [entry]);

  const handleFieldChange = (e, index) => {
    const { value } = e.target;
    setFormData((prevData) =>
      prevData.map((field, i) =>
        i === index ? { ...field, userInput: value } : field
      )
    );
  };

  const handleSave = () => {
    const updatedEntry = { ...entry, fields: formData };
    onSave(updatedEntry); // Pass updated entry to parent for PUT request
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Edit Target</h2>
        <div className="space-y-3">
          {formData.map((field, index) => (
            <div key={field.id} className="flex flex-col">
              <label className="text-sm text-gray-600">{field.label}</label>
              {field.fieldType === "dropdown" ? (
                <select
                  value={field.userInput || ""}
                  onChange={(e) => handleFieldChange(e, index)}
                  className="w-full px-4 py-2 border rounded"
                >
                  {field.options.split(", ").map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.fieldType}
                  value={field.userInput || ""}
                  onChange={(e) => handleFieldChange(e, index)}
                  placeholder={field.label}
                  className="w-full px-4 py-2 border rounded"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
