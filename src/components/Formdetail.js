import React from 'react';
// import { FormDetailRow } from './FormDetailRow';
import { ClipboardList, X } from 'lucide-react';

const entry = {
    formId: "2MUH9R",
    createdBy: "Aman",
    fields: [
      { id: 116, label: "Supplier Code", fieldType: "text", userInput: "123" },
      { id: 117, label: "Product Code", fieldType: "text", userInput: "Test" },
      { id: 118, label: "Net Quantity", fieldType: "number", userInput: "2" },
      { id: 119, label: "Purchase Order", fieldType: "text", userInput: "123" },
      { id: 120, label: "Batch Number", fieldType: "text", userInput: "123" },
      { id: 121, label: "EUDR DDS Reference", fieldType: "text", userInput: "123" },
      { id: 122, label: "EUDR DDS Verification", fieldType: "text", userInput: "Test" },
      { id: 123, label: "EUDR Submission Date", fieldType: "date", userInput: "2024-11-30" },
      { id: 124, label: "Referencing DDS", fieldType: "dropdown", userInput: "true", options: ["true", "false"] },
      { id: 125, label: "Name", fieldType: "text", userInput: "Aman" },
      { id: 126, label: "Account", fieldType: "text", userInput: "Test" },
      { id: 127, label: "Title", fieldType: "text", userInput: "Test" },
      { id: 128, label: "Created By", fieldType: "text", userInput: "Aman" },
      { id: 129, label: "Date", fieldType: "date", userInput: "2024-11-30" },
      { id: 130, label: "Status", fieldType: "dropdown", userInput: "Started", options: ["Started", "In Progress", "Completed"] }
    ]
  };

export const StatusBadge = ({ status }) => {
    const getStatusColor = (status) => {
      switch (status.toLowerCase()) {
        case 'started':
          return 'bg-blue-100 text-blue-800';
        case 'in progress':
          return 'bg-yellow-100 text-yellow-800';
        case 'completed':
          return 'bg-green-100 text-green-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    };
  
    return (
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
        {status}
      </span>
    );
};

const FormDetailItem = ({ label, value }) => {
    return (
      <div className="flex-1 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
        <dt className="text-sm font-medium text-gray-500 mb-1 break-words">{label}</dt>
        <dd className="text-base font-semibold text-gray-900 break-words">
          {typeof value === 'boolean' ? (
            <span className={`inline-block px-2 py-1 rounded-full text-xs ${value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {value ? 'Yes' : 'No'}
            </span>
          ) : value}
        </dd>
      </div>
    );
  };

export const FormDetailRow= ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      {items.map((item, index) => (
        <FormDetailItem key={index} {...item} />
      ))}
    </div>
  );
};


export const FormField= ({ field }) => {
    const renderValue = () => {
      switch (field.fieldType) {
        case 'date':
          return new Date(field.userInput).toLocaleDateString();
        case 'dropdown':
          if (field.label === 'Status') {
            return <StatusBadge status={field.userInput} />;
          }
          if (field.userInput === 'true' || field.userInput === 'false') {
            const isTrue = field.userInput === 'true';
            return (
              <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                isTrue ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {isTrue ? 'Yes' : 'No'}
              </span>
            );
          }
          return field.userInput;
        default:
          return field.userInput;
      }
    };
  
    return (
      <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-500 transition-colors">
        <dt className="text-sm font-medium text-gray-500 mb-1">{field.label}</dt>
        <dd className="text-base font-semibold text-gray-900">{renderValue()}</dd>
      </div>
    );
};


export const FormHeader= ({ formId, createdBy, onClose }) => {
    return (
      <div className="px-6 py-4  bg-[#bb1ccc]  text-white">
        <div className ="flex justify-between items-center">
        <div className="flex items-center space-x-3 mb-2">
          <ClipboardList className="text-white" size={24} />
          <h2 className="text-2xl font-bold text-white">Form Details</h2>
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

export const FormDetails = ({ entry , isOpen, onClose}) => {

    if (!isOpen || !entry) return null;

    return (
      <div className="fixed inset-10 left-20 right-20 bg-opacity-50 z-50 bg-gray-50  rounded-lg shadow-xl max-w-3xl w-full mx-auto pb-10 overflow-hidden">
        <FormHeader formId={entry.formId} createdBy={entry.createdBy} onClose={onClose} />

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {entry.fields.map((field) => (
              <FormField key={field.id} field={field} />
            ))}
          </div>
        </div>
      </div>
    );
};