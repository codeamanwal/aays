import React, { useState, useEffect } from "react";

const CommentModal = ({ entry, isOpen, onClose, onAddComment }) => {
  const [commentText, setCommentText] = useState("");
  const [person, setPerson] = useState("You"); // Track who is commenting
  const [comments, setComments] = useState([]);

  // Update local comments state if entry changes and is not null
  useEffect(() => {
    if (entry) {
      setComments(entry.comments || []);
    }
  }, [entry]);

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = { text: commentText, person };

      // Update local comments immediately
      setComments((prevComments) => [...prevComments, newComment]);

      // Update parent component's comments
      onAddComment(newComment);

      // Clear input field
      setCommentText("");
    }
  };

  if (!isOpen || !entry) return null; // Ensure modal is open and entry exists

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>

        {/* Comment List */}
        <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  comment.person === "You" ? "bg-blue-100" : "bg-green-100"
                }`}
              >
                <p className="text-sm font-semibold text-gray-700">
                  {comment.person}:
                </p>
                <p className="text-gray-800">{comment.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>

        {/* Add Comment Section */}
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <select
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-gray-50 focus:ring focus:ring-blue-200 transition"
          >
            <option value="You">You</option>
            <option value="Other Person">Other Person</option>
          </select>
          <input
            type="text"
            placeholder="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-lg bg-gray-50 focus:ring focus:ring-blue-200 transition"
          />
          <button
            onClick={handleAddComment}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
