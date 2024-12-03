import React from 'react';
import { Edit,X } from 'lucide-react';

const FormHeader= ({ formId, createdBy, onClose }) => {
  return (
    <div className="px-6 py-4 bg-gradient-to-r from-[#ac1ccc] to-[#aa1ccc]  text-white">
      <div className ="flex justify-between items-center">
      <div className="flex items-center space-x-3 mb-2">
        <Edit className="text-white" size={24} />
        <h2 className="text-2xl font-bold text-white">Edit Form</h2>
      </div>
          <button
          onClick={onClose}
          className="focus:outline-none"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 ">
        <div>
          <span className="text-sm">Form ID:</span>
          <span className="ml-2 font-medium">{formId}</span>
        </div>
        <div>
          <span className="text-sm">Created By:</span>
          <span className="ml-2 font-medium">{createdBy}</span>
        </div>
      </div>
    </div>
  );
};

export function FormDialog({ formData, onClose, onSave }) {
    const handleSubmit = () => {
      onSave(formData);
    };

    // const handleChange = (field,input) => {

    //   console.log(formData)
    // }

    return (
      <div className="flex rounded-xl mt-0 mb-0 bg-transparent justify-center overflow-y-auto">
        <div className="rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <FormHeader formId={formData.formId} createdBy={formData.createdBy} onClose={onClose} />
  
          {/* Form Content */}
          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formData.fields.map((field) => (
                <FormField key={field.id} field={field} />
              ))}
            </div>
  
            {/* Footer */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}


export  function FormField({ field }) {
    const getInputElement = () => {
      // Special case for Referencing DDS field
      if (field.label === "Referencing DDS") {
        return (
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              onChange={() => {field.userInput = !field.userInput}}
              type="checkbox"
              defaultChecked={field.userInput === "true"}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        );
      }
  
      switch (field.fieldType) {
        case 'dropdown':
          return (
            <select
              onChange={(e) => {field.userInput = e.target.value}}
              defaultValue={field.userInput}
              className="w-full rounded-lg border-gray-300 border p-2 bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            >
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        case 'date':
          return (
            <input
              onChange={(e) => {field.userInput = e.target.value}}
              type="date"
              defaultValue={field.userInput}
              className="w-full rounded-lg border-gray-300 border p-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          );
        case 'number':
          return (
            <input
              onChange={(e) => {field.userInput = e.target.value}}
              type="number"
              defaultValue={field.userInput}
              className="w-full rounded-lg border-gray-300 border p-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          );
        default:
          return (
            <input
              onChange={(e) => {field.userInput = e.target.value}}
              type="text"
              defaultValue={field.userInput}
              className="w-full rounded-lg border-gray-300 border p-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          );
      }
    };
  
    return (
      <div className="flex flex-col gap-1.5 p-4 bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <label className="text-sm font-medium text-gray-700">{field.label}</label>
        {getInputElement()}
      </div>
    );
}


export  function EditForm({ entry, isOpen, onClose, onSave }) {

    return (
      <div className='fixed w-full mx-auto inset-0 md:w-[84%] 2xl:w-[87%] mr-0 max-h-fit top-10'>
      <div className="max-w-3xl flex items-center justify-center mx-auto">
        {isOpen && (
          <FormDialog
            formData={entry}
            onClose={onClose}
            onSave={onSave}
          />
        )}
      </div>
      </div>
    );
}