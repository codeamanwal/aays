import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomizePage = () => {
  const [loading, setLoading] = useState(false);

  const [items, setItems] = useState([
    { id: '1', fieldType: 'text', label: 'Supplier Code', required: false },
    { id: '2', fieldType: 'text', label: 'Product Code', required: false },
    { id: '3', fieldType: 'number', label: 'Net Quantity', required: false },
    { id: '4', fieldType: 'text', label: 'Purchase Order', required: false },
    { id: '5', fieldType: 'text', label: 'Batch Number', required: false },
    { id: '6', fieldType: 'text', label: 'EUDR DDS Reference', required: false },
    { id: '7', fieldType: 'text', label: 'EUDR DDS Verification', required: false },
    { id: '8', fieldType: 'date', label: 'EUDR Submission Date', required: false },
    { id: '9', fieldType: 'dropdown', options: ['true', 'false'], label: 'Referencing DDS', required: false },
    { id: '10', fieldType: 'text', label: 'Name', required: false },
    { id: '11', fieldType: 'text', label: 'Account', required: false },
    { id: '12', fieldType: 'text', label: 'Title', required: false },
    { id: '13', fieldType: 'text', label: 'Created By', required: false },
    { id: '14', fieldType: 'date', label: 'Date', required: false },
    { id: '15', fieldType: 'dropdown', options: ["Started", "In Progress", "Completed"], label: 'Status', required: false },
  ]);

  const handleToggle = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, required: !item.required } : item
    ));
  };

  const handleCancle = () => {
    setItems(() => {
      return items.map(item => ({ ...item, required: false }));
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const requiredItems = items.filter(item => item.required);

    if (requiredItems.length === 0) {
      toast.error('Data is empty, please choose at least one field.');
      setLoading(false);
      return;
    }

    try {
      const data = { fields: requiredItems };
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/create/admin`,
        data
      );

      const formId = response.data.formId;
      localStorage.setItem('formId', formId);
      console.log('Form ID saved:', formId);

      // Uncheck items after successful submission
      setItems(items.map(item => ({ ...item, required: false })));

      toast.success('Your fields saved successfully!');
      setLoading(false);

    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      toast.error('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="mx-auto max-w-7xl bg-white">
        <div className="mb-6 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Customize Form</h1>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 bg-white p-4 mt-2">
          {items.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg border bg-white p-4 shadow-sm transition-all ${
                item.required ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-200'
              }`}
            >
              <label className="flex cursor-pointer items-center space-x-3">
                <input
                  type="checkbox"
                  required={item.required}
                  onChange={() => handleToggle(item.id)}
                  className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">{item.label}</p>
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-end text-black gap-4 mb-5 p-4">
          <button
            onClick={handleCancle}
            className="rounded-md bg-gray-100 px-6 py-2 text-black shadow-sm transition-all hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="rounded-md bg-indigo-600 px-6 py-2 text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            {loading ? "Saving..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomizePage;
