// Question.jsx
import React from "react";

const Question = ({
  question,
  onQuestionTextChange,
  onQuestionTypeChange,
  onOptionChange,
  onAddOption,
  onRemoveOption,
  onDeleteQuestion,
  onDuplicateQuestion, // function to handle duplication
  onDoneEditing, // function to handle "Done" action
}) => {
  const handleFileUpload = (event, optionIndex) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onOptionChange(question.id, optionIndex, {
          text: "",
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg border border-gray-200 mb-6 relative">
      <input
        type="text"
        value={question.text}
        onChange={(e) => onQuestionTextChange(question.id, e.target.value)}
        placeholder="Untitled Question"
        className="w-full text-lg font-semibold mb-4 text-gray-700 border-b-2 pb-2 focus:outline-none"
      />

      <div className="mb-4">
        <select
          value={question.type}
          onChange={(e) => onQuestionTypeChange(question.id, e.target.value)}
          className="p-2 border rounded text-gray-600 focus:outline-none"
        >
          <option value="single-choice">Single Choice</option>
          <option value="multiple-choice">Multiple Choice</option>
          <option value="text">Text</option>
          <option value="image">Image Option</option>
        </select>
      </div>

      {question.options.map((option, index) => (
        <div key={index} className="flex items-center space-x-4 mb-2">
          {option.image ? (
            <img
              src={option.image}
              alt={`Option ${index + 1}`}
              className="w-16 h-16 object-cover border rounded"
            />
          ) : (
            <input
              type="text"
              value={option.text || ""}
              onChange={(e) =>
                onOptionChange(question.id, index, {
                  text: e.target.value,
                  image: "",
                })
              }
              placeholder={`Option ${index + 1}`}
              className="flex-grow p-2 border-b text-gray-700 focus:outline-none"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, index)}
            className="hidden"
            id={`file-upload-${question.id}-${index}`}
          />
          <label
            htmlFor={`file-upload-${question.id}-${index}`}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            📎
          </label>

          <button
            onClick={() => onRemoveOption(question.id, index)}
            className="text-red-500 hover:text-red-700"
          >
            ❌
          </button>
        </div>
      ))}

      <button
        onClick={() => onAddOption(question.id)}
        className="text-blue-500 hover:underline mt-2"
      >
        Add option
      </button>

      <div className="flex items-center justify-end space-x-4 mt-4">
        <button
          onClick={() => onDoneEditing(question.id)}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Done
        </button>
        <button
          onClick={() => onDuplicateQuestion(question.id)}
          className="text-gray-500 hover:text-gray-700"
        >
          📄 Duplicate
        </button>
        <button
          onClick={() => onDeleteQuestion(question.id)}
          className="text-red-500 hover:text-red-700"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default Question;
