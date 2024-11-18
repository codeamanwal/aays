import React, { useState } from "react";

// SVG Icons
const SingleChoiceIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10"
      cy="10"
      r="9"
      fill="#FCFCFC"
      stroke="#898787"
      strokeWidth="2"
    />
    <circle cx="10" cy="10" r="5" fill="#898787" />
  </svg>
);

const MultipleChoiceIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="18"
      height="18"
      rx="2"
      fill="#FCFCFC"
      stroke="#898787"
      strokeWidth="2"
    />
    <rect x="5" y="5" width="10" height="10" rx="1" fill="#898787" />
  </svg>
);

const TextIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 20H22V24H2V20ZM5.49 17H7.91L9.18 13.42H14.83L16.09 17H18.51L13.25 3H10.75L5.49 17ZM9.91 11.39L11.94 5.6H12.06L14.09 11.39H9.91Z"
      fill="#898787"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10"
      cy="10"
      r="9"
      fill="#FCFCFC"
      stroke="#898787"
      strokeWidth="2"
    />
    <circle cx="10" cy="10" r="5" fill="#898787" />
  </svg>
);

const QuestionTypeDropdown = ({ selectedType, onSelectType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "single-choice", label: "Single Choice", Icon: SingleChoiceIcon },
    {
      value: "multiple-choice",
      label: "Multiple Choice",
      Icon: MultipleChoiceIcon,
    },
    { value: "text", label: "Text", Icon: TextIcon },
    { value: "calendar", label: "Calendar", Icon: CalendarIcon },
  ];

  const selectedOption = options.find(
    (option) => option.value === selectedType
  );

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none bg-white shadow-sm text-gray-700"
      >
        {selectedOption && (
          <>
            <selectedOption.Icon className="inline h-5 w-5 mr-2" />
            {selectedOption.label}
          </>
        )}
        <span className="ml-auto">▼</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onSelectType(option.value);
                setIsOpen(false);
              }}
              className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedType === option.value ? "bg-gray-100" : ""
              }`}
            >
              <option.Icon className="inline h-5 w-5 mr-2 text-gray-600" />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionTypeDropdown;
