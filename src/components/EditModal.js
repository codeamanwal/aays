import React, { useState, useEffect } from "react";
const EditModal = ({ entry, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...entry });
  // Update formData whenever the entry prop changes
  useEffect(() => {
    if (entry) {
      setFormData({ ...entry });
    }
  }, [entry]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSave = () => {
    onSave(formData);
    onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Target</h2>
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="account"
            value={formData.account || ""}
            onChange={handleChange}
            placeholder="Account"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            placeholder="Title"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="createdBy"
            value={formData.createdBy || ""}
            onChange={handleChange}
            placeholder="Created By"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="date"
            name="date"
            value={formData.date || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <select
            name="status"
            value={formData.status || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="In Progress">In Progress</option>
            <option value="Not Interested">Not Interested</option>
            <option value="Completed">Completed</option>
          </select>
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
