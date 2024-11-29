import React from "react";

const Switch = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center space-x-3">
      {label && <span className="text-gray-700">{label}</span>}
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner transition-colors duration-200 ease-in-out"></div>
        <div
          className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
            checked ? "translate-x-6 bg-indigo-600" : "translate-x-0 bg-white"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Switch;
