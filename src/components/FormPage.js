import React, { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    profileUrl: "",
    account: "",
    title: "",
    email: "",
    routeTo: "",
    meetingStatus: "",
    meetingDate: "",
    nextSteps: "",
    amount: "",
    closedDate: "",
    source: "",
    notes: "",
    listName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-[600px] space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Add Target</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="profileUrl"
            placeholder="Profile URL"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="account"
            placeholder="Account"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="routeTo"
            placeholder="Route To"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <select
            name="meetingStatus"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">Select Meeting Status</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <input
            type="date"
            name="meetingDate"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="nextSteps"
            placeholder="Next Steps"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="amount"
            placeholder="Amount"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <select
            name="source"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">Select Source</option>
            <option value="Referral">Referral</option>
            <option value="Online">Online</option>
            <option value="Direct">Direct</option>
          </select>
          <input
            type="date"
            name="closedDate"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <textarea
            name="notes"
            placeholder="Notes"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <select
            name="listName"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">Select List Name</option>
            <option value="VIP">VIP</option>
            <option value="Priority">Priority</option>
            <option value="Regular">Regular</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
