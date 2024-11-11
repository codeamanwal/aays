import React, { useState } from "react";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      formName: "User Feedback Form",
      createdBy: "User@example.com",
      fields: [
        { label: "Name", fieldType: "text", userInput: formData.name },
        {
          label: "Profile URL",
          fieldType: "text",
          userInput: formData.profileUrl,
        },
        { label: "Account", fieldType: "text", userInput: formData.account },
        { label: "Title", fieldType: "text", userInput: formData.title },
        { label: "Email", fieldType: "email", userInput: formData.email },
        { label: "Route To", fieldType: "text", userInput: formData.routeTo },
        {
          label: "Meeting Status",
          fieldType: "dropdown",
          userInput: formData.meetingStatus,
        },
        {
          label: "Meeting Date",
          fieldType: "date",
          userInput: formData.meetingDate,
        },
        {
          label: "Next Steps",
          fieldType: "text",
          userInput: formData.nextSteps,
        },
        { label: "Amount", fieldType: "number", userInput: formData.amount },
        {
          label: "Closed Date",
          fieldType: "date",
          userInput: formData.closedDate,
        },
        { label: "Source", fieldType: "dropdown", userInput: formData.source },
        { label: "Notes", fieldType: "textarea", userInput: formData.notes },
        {
          label: "List Name",
          fieldType: "dropdown",
          userInput: formData.listName,
        },
      ],
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/forms/save`,
        formattedData
      );
      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.response || error);
      alert(
        `Error submitting form: ${
          error.response?.data?.error || "Unknown error"
        }`
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-6 max-h-[80vh] overflow-y-auto"
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
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
