import React from "react";

const FormCard = ({ title, description, owner }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-64 max-w-xs">
      <div className="flex items-center space-x-2 mb-4">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.1562 19.2188C20.1562 19.5917 20.0081 19.9494 19.7444 20.2131C19.4806 20.4768 19.123 20.625 18.75 20.625H11.25C10.877 20.625 10.5194 20.4768 10.2556 20.2131C9.99191 19.9494 9.84375 19.5917 9.84375 19.2188C9.84375 18.8458 9.99191 18.4881 10.2556 18.2244C10.5194 17.9607 10.877 17.8125 11.25 17.8125H18.75C19.123 17.8125 19.4806 17.9607 19.7444 18.2244C20.0081 18.4881 20.1562 18.8458 20.1562 19.2188ZM18.75 13.125H11.25C10.877 13.125 10.5194 13.2732 10.2556 13.5369C9.99191 13.8006 9.84375 14.1583 9.84375 14.5312C9.84375 14.9042 9.99191 15.2619 10.2556 15.5256C10.5194 15.7893 10.877 15.9375 11.25 15.9375H18.75C19.123 15.9375 19.4806 15.7893 19.7444 15.5256C20.0081 15.2619 20.1562 14.9042 20.1562 14.5312C20.1562 14.1583 20.0081 13.8006 19.7444 13.5369C19.4806 13.2732 19.123 13.125 18.75 13.125ZM25.7812 5.625V25.3125C25.7812 25.9341 25.5343 26.5302 25.0948 26.9698C24.6552 27.4093 24.0591 27.6562 23.4375 27.6562H6.5625C5.9409 27.6562 5.34476 27.4093 4.90522 26.9698C4.46568 26.5302 4.21875 25.9341 4.21875 25.3125V5.625C4.21875 5.0034 4.46568 4.40726 4.90522 3.96772C5.34476 3.52818 5.9409 3.28125 6.5625 3.28125H10.609C11.1765 2.68862 11.8581 2.217 12.6128 1.8948C13.3674 1.57261 14.1795 1.40651 15 1.40651C15.8205 1.40651 16.6326 1.57261 17.3872 1.8948C18.1419 2.217 18.8235 2.68862 19.391 3.28125H23.4375C24.0591 3.28125 24.6552 3.52818 25.0948 3.96772C25.5343 4.40726 25.7812 5.0034 25.7812 5.625ZM11.7527 7.03125H18.2473C18.1341 6.25079 17.7435 5.5372 17.1472 5.02113C16.5509 4.50506 15.7886 4.22103 15 4.22103C14.2114 4.22103 13.4491 4.50506 12.8528 5.02113C12.2565 5.5372 11.8659 6.25079 11.7527 7.03125ZM22.9688 6.09375H20.9285C21.038 6.55449 21.0935 7.02642 21.0938 7.5V8.4375C21.0938 8.81046 20.9456 9.16815 20.6819 9.43187C20.4181 9.69559 20.0605 9.84375 19.6875 9.84375H10.3125C9.93954 9.84375 9.58185 9.69559 9.31813 9.43187C9.05441 9.16815 8.90625 8.81046 8.90625 8.4375V7.5C8.9065 7.02642 8.96195 6.55449 9.07148 6.09375H7.03125V24.8438H22.9688V6.09375Z"
            fill="#C730CB"
          />
        </svg>

        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-4">
        <strong>Owner:</strong> {owner}
      </p>
      <div className="flex items-center justify-end space-x-2 text-[#bb1ccc] cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
            fill="#C730CB"
          />
        </svg>

        <span className="text-sm font-semibold">View Form</span>
      </div>
    </div>
  );
};

export default FormCard;