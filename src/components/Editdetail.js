import React from 'react';
import { X } from 'lucide-react';

export function FormDialog({ formData, onClose }) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center px-6 py-4  bg-[#bb1ccc]  text-white justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold">Edit Form</h2>
            <button
              onClick={onClose}
              className="p-2  rounded-full transition-colors"
            >
              <X className="w-5 h-5 hover:text-gray-200 text-gray-100" />
            </button>
          </div>
  
          {/* Form Content */}
          <div className="p-6 bg-gray-50">
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
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
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
              type="date"
              defaultValue={field.userInput}
              className="w-full rounded-lg border-gray-300 border p-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          );
        case 'number':
          return (
            <input
              type="number"
              defaultValue={field.userInput}
              className="w-full rounded-lg border-gray-300 border p-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          );
        default:
          return (
            <input
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


export  function EditForm({entry, isOpen=true, onClose,}) {
  
    return (
      <div className="min-h-screen max-w-2xl bg-gray-100 flex items-center justify-center">
        {isOpen && (
          <FormDialog
            formData={entry}
            onClose={onClose}
          />
        )}
      </div>
    );
}