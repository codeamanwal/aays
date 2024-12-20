import React, { useState } from "react";

const FormHeader = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
}) => {
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);

  return (
    <div className="relative bg-white shadow rounded-lg border border-gray-200">
      {/* Left Colored Border */}
      <div className="absolute top-0 left-0 w-2 h-full bg-[#C730CB] rounded-tl-lg rounded-bl-lg"></div>

      {/* Top Colored Border */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#C730CB] rounded-tl-lg rounded-tr-lg"></div>

      {/* Content Container */}
      <div className="relative p-6">
        {/* Title */}
        {isTitleEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            onBlur={() => setIsTitleEditing(false)}
            autoFocus
            placeholder="Form Title"
            className="w-full text-2xl font-semibold mb-2 focus:outline-none border-b-2 border-gray-200"
          />
        ) : (
          <h1
            className={`w-full text-2xl font-semibold mb-2 cursor-text ${
              title ? "text-gray-800" : "text-gray-400 italic"
            }`}
            onClick={() => setIsTitleEditing(true)}
          >
            {title || "Form Title"}
          </h1>
        )}

        {/* Description */}
        {isDescriptionEditing ? (
          <textarea
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            onBlur={() => setIsDescriptionEditing(false)}
            autoFocus
            placeholder="Form Description"
            className="w-full text-gray-600 mb-2 focus:outline-none resize-none border-b-2 border-gray-200"
          />
        ) : (
          <p
            className={`w-full text-gray-600 mb-2 cursor-text ${
              description ? "text-gray-800" : "text-gray-400 italic"
            }`}
            onClick={() => setIsDescriptionEditing(true)}
          >
            {description || "Form Description"}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormHeader;
