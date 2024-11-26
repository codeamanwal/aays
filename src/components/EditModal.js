import React, { useState, useEffect } from "react";

const EditModal = ({ entry, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Populate formData from entry fields
  useEffect(() => {
    if (entry) {
      const fieldsData = entry.fields.reduce((acc, field) => {
        acc[field.label] = field.userInput;
        return acc;
      }, {});
      setFormData({ ...fieldsData });
    }
  }, [entry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleToggleChange = (label) => {
    setFormData((prevData) => ({
      ...prevData,
      [label]: prevData[label] === "true" ? "false" : "true",
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSuccessMessage("");

    const updatedFields = entry.fields.map((field) => ({
      label: field.label,
      userInput: formData[field.label] || field.userInput,
      ...(field.fieldType === "dropdown" && { options: field.options }),
    }));

    const updatedEntry = { fields: updatedFields };

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

      // Handle non-JSON responses gracefully
      if (!response.ok) {
        const errorMessage = `Failed with status: ${response.status}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }

      // Check for empty response
      const result = await response.json().catch(() => null);

      console.log("Response data:", result);

      // Call onSave if successful
      onSave(result || updatedEntry); // Pass back updated entry even if no JSON body
      setSuccessMessage("Form updated successfully!");
    } catch (error) {
      console.error("Error updating the form:", error);
      alert("Failed to update the form. Please try again.");
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
              {field.label === "Referencing DDS" ? (
                <div
                  onClick={() => handleToggleChange(field.label)}
                  className={`cursor-pointer w-12 h-6 flex items-center rounded-full p-1 ${
                    formData[field.label] === "true"
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`h-4 w-4 bg-white rounded-full shadow-md transform ${
                      formData[field.label] === "true" ? "translate-x-6" : ""
                    }`}
                  ></div>
                </div>
              ) : field.fieldType === "dropdown" ? (
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

        {successMessage && (
          <p className="text-green-600 font-semibold mt-4">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default EditModal;
