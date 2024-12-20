import React from 'react';
// import { FormDetailRow } from './FormDetailRow';
import { ClipboardList, X } from 'lucide-react';


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
      <div className="px-6 py-4 bg-gradient-to-r from-[#ac1ccc] to-[#aa1ccc]  text-white">
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
      <div className='fixed w-full mx-auto inset-0 md:w-[84%] overflow-y-auto 2xl:w-[87%] mr-0 max-h-screen top-10'>
      <div className="inset-0 top-10 right-0 bg-white mx-auto my-auto rounded-xl shadow-xl max-w-3xl max-h-fit overflow-y-auto z-50 bg-gray-50 pb-10">
        <FormHeader formId={entry.formId} createdBy={entry.createdBy} onClose={onClose} />

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 overflow-y-auto lg:grid-cols-3 gap-4">
            {entry.fields.map((field) => (
              <FormField key={field.id} field={field} />
            ))}
          </div>
        </div>
      </div>
      </div>
    );
};