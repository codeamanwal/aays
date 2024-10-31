import React from "react";
import {
  PencilIcon,
  ChatBubbleLeftRightIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const Card = ({ entry, onEdit, onDelete, onComment }) => {
  return (
    <div className="flex items-center bg-white shadow-md p-4 rounded-lg mb-2 space-x-4">
      {/* Profile Section */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-xl font-semibold">
          {entry.name[0]}
        </div>
      </div>

      {/* Name and Role Section */}
      <div className="flex-1">
        <p className="font-medium text-gray-800">{entry.name}</p>
        <p className="text-sm text-gray-500">
          {entry.account} &middot; {entry.title}
        </p>
      </div>

      {/* Created By and Date */}
      <div className="w-32 text-center">
        <p className="text-gray-700 font-medium">{entry.createdBy}</p>
        <p className="text-sm text-gray-500">{entry.date}</p>
      </div>

      {/* Status */}
      <div className="w-32 text-center">
        <p
          className={`text-sm font-semibold ${
            entry.status === "In Progress"
              ? "text-yellow-500"
              : entry.status === "Not Interested"
              ? "text-green-500"
              : "text-gray-500"
          }`}
        >
          {entry.status}
        </p>
      </div>

      {/* Action Icons with Comment Count */}
      <div className="flex items-center space-x-3">
        <button onClick={() => onComment(entry)} className="relative">
          <ChatBubbleLeftRightIcon className="w-6 h-6 text-purple-500" />
          {entry.comments && entry.comments.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              {entry.comments.length}
            </span>
          )}
        </button>
        <button onClick={() => onEdit(entry)}>
          <PencilIcon className="w-6 h-6 text-gray-500" />
        </button>
        <button onClick={() => onDelete(entry)}>
          <TrashIcon className="w-6 h-6 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default Card;
