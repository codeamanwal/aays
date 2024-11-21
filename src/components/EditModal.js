import React, { useState, useEffect } from "react";

const EditModal = ({ entry, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...entry });
  const [isSaving, setIsSaving] = useState(false);

  // Update formData whenever the entry prop changes
  useEffect(() => {
    if (entry) {
      const fieldsData = entry.fields.reduce((acc, field) => {
        acc[field.label] = field.userInput;
        return acc;
      }, {});
      setFormData({ ...entry, ...fieldsData });
    }
  }, [entry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);

    const updatedFields = entry.fields.map((field) => ({
      label: field.label,
      userInput: formData[field.label] || field.userInput,
    }));

    const updatedEntry = {
      formId: entry.formId,
      createdBy: entry.createdBy,
      fields: updatedFields,
    };

    console.log(updatedEntry)
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/edit/${entry.formId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedEntry),
        }
      );

      if (response.ok) {
        const result = await response.json();
        onSave(result); // Pass the updated entry to the parent
        alert("Form updated successfully!");
      } else {
        alert("Failed to update the form. Please try again.");
      }
    } catch (error) {
      console.error("Error updating the form:", error);
      alert("An error occurred while updating the form.");
    } finally {
      setIsSaving(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-[1000px] w-full overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-semibold text-center mb-6">Edit Form</h2>

        <div className="grid grid-cols-2 gap-6">
          {/* Dynamic Fields */}
          {entry.fields?.map((field) => (
            <div key={field.label}>
              <label
                htmlFor={field.label}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label}
              </label>
              {field.fieldType === "dropdown" ? (
                <select
                  name={field.label}
                  value={formData[field.label] || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                >
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.fieldType === "number" ? "number" : "text"}
                  name={field.label}
                  value={formData[field.label] || ""}
                  onChange={handleChange}
                  placeholder={field.label}
                  className="w-full px-3 py-2 border rounded"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6 space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className={`px-6 py-2 rounded text-white ${
              isSaving
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
