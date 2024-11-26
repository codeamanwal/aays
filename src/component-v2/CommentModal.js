import React, { useState, useEffect } from "react";

const CommentModal = ({ entry, isOpen, onClose, onAddComment = () => {} }) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [attachedFile, setAttachedFile] = useState(null);

  useEffect(() => {
    if (entry) {
      setComments(entry.comments || []);
    }
  }, [entry]);

  const handleAddComment = () => {
    if (commentText.trim() || attachedFile) {
      const newComment = {
        text: commentText,
        person: "You",
        file: attachedFile,
      };

      setComments((prevComments) => [...prevComments, newComment]);
      onAddComment(newComment);

      setCommentText("");
      setAttachedFile(null);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAttachedFile(file);
    }
  };

  if (!isOpen || !entry) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>

        {/* Comment List */}
        <div className="space-y-3 mb-6 max-h-80 overflow-y-auto">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className={`flex items-start space-x-2 ${
                  comment.person === "You"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-${
                    comment.person === "You" ? "purple-500" : "gray-800"
                  } text-white flex items-center justify-center`}
                >
                  {comment.person[0]}
                </div>

                <div
                  className={`p-3 rounded-lg max-w-xs ${
                    comment.person === "You"
                      ? "bg-purple-200 text-gray-800"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  <p className="text-sm">{comment.text}</p>
                  {comment.file && (
                    <p className="text-xs text-purple-600 mt-2">
                      Attached file: {comment.file.name}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>

        {/* Add Comment Section */}
        <div className="flex items-center space-x-3 mt-4">
          <input
            type="text"
            placeholder="Write your comment here..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-full bg-gray-100 focus:ring focus:ring-purple-200 transition"
          />
          <label className="px-2 py-2 bg-gray-200 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300 transition">
            <input type="file" onChange={handleFileChange} className="hidden" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
          <button
            onClick={handleAddComment}
            className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
          >
            Submit
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
