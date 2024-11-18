import React, { useState } from "react";
import EditModal from "./EditModal";
import CommentModal from "./CommentModal";
import ConfirmModal from "./ConfirmModal";

const TablePage = () => {
  const [entries, setEntries] = useState([
    {
      formId: "1",
      formName: "Form 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      owner: "Liana Fletcher",
      comments: [],
    },
    {
      formId: "2",
      formName: "Form 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      owner: "Adrian Moss",
      comments: [],
    },
    {
      formId: "3",
      formName: "Form 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      owner: "Clara Whitaker",
      comments: [],
    },
    {
      formId: "4",
      formName: "Form 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      owner: "Ethan Caldwell",
      comments: [],
    },
    {
      formId: "5",
      formName: "Form 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      owner: "Simone Landry",
      comments: [],
    },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleEdit = (entry) => {
    setSelectedEntry(entry);
    setIsEditModalOpen(true);
  };

  const handleSave = (updatedEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((e) =>
        e.formId === updatedEntry.formId ? updatedEntry : e
      )
    );
    setIsEditModalOpen(false);
  };

  const handleDelete = (entry) => {
    setSelectedEntry(entry);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    setEntries((prevEntries) =>
      prevEntries.filter((e) => e.formId !== selectedEntry.formId)
    );
    setIsConfirmModalOpen(false);
  };

  const handleComment = (entry) => {
    setSelectedEntry(entry);
    setIsCommentModalOpen(true);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Forms</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md shadow-sm">
          <thead>
            <tr className="text-center border-b">
              <th className="px-6 py-3 text-sm font-semibold">Form Name</th>
              <th className="px-6 py-3 text-sm font-semibold">Description</th>
              <th className="px-6 py-3 text-sm font-semibold">Owner</th>
              <th className="px-6 py-3 text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.formId} className="hover:bg-gray-100 text-center">
                <td className="px-6 py-4">{entry.formName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {entry.description}
                </td>
                <td className="px-6 py-4">{entry.owner}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={() => handleComment(entry)}
                      className="text-purple-500 hover:text-purple-700"
                    >
                      {/* Comment Icon */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3334 5.33333C29.3334 3.86666 28.1334 2.66666 26.6667 2.66666H5.33341C3.86675 2.66666 2.66675 3.86666 2.66675 5.33333V21.3333C2.66675 22.8 3.86675 24 5.33341 24H24.0001L29.3334 29.3333V5.33333ZM21.3334 14.6667H17.3334V18.6667C17.3334 19.4 16.7334 20 16.0001 20C15.2667 20 14.6667 19.4 14.6667 18.6667V14.6667H10.6667C9.93341 14.6667 9.33341 14.0667 9.33341 13.3333C9.33341 12.6 9.93341 12 10.6667 12H14.6667V8C14.6667 7.26666 15.2667 6.66666 16.0001 6.66666C16.7334 6.66666 17.3334 7.26666 17.3334 8V12H21.3334C22.0667 12 22.6667 12.6 22.6667 13.3333C22.6667 14.0667 22.0667 14.6667 21.3334 14.6667Z"
                          fill="#9A9595"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleEdit(entry)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {/* Edit Icon */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 23.28V27.3333C4 27.7067 4.29333 28 4.66667 28H8.72C8.89333 28 9.06667 27.9333 9.18667 27.8L23.7467 13.2533L18.7467 8.25333L4.2 22.8C4.06667 22.9333 4 23.0933 4 23.28ZM27.6133 9.38667C27.7369 9.26332 27.835 9.1168 27.9019 8.9555C27.9688 8.7942 28.0033 8.62129 28.0033 8.44667C28.0033 8.27204 27.9688 8.09913 27.9019 7.93784C27.835 7.77654 27.7369 7.63002 27.6133 7.50667L24.4933 4.38667C24.37 4.26306 24.2235 4.165 24.0622 4.09809C23.9009 4.03118 23.728 3.99674 23.5533 3.99674C23.3787 3.99674 23.2058 4.03118 23.0445 4.09809C22.8832 4.165 22.7367 4.26306 22.6133 4.38667L20.1733 6.82667L25.1733 11.8267L27.6133 9.38667Z"
                          fill="#9A9595"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(entry)}
                      className="text-red-500 hover:text-red-700"
                    >
                      {/* Delete Icon */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00008 25.3333C8.00008 26.8 9.20008 28 10.6667 28H21.3334C22.8001 28 24.0001 26.8 24.0001 25.3333V12C24.0001 10.5333 22.8001 9.33333 21.3334 9.33333H10.6667C9.20008 9.33333 8.00008 10.5333 8.00008 12V25.3333ZM24.0001 5.33333H20.6667L19.7201 4.38667C19.4801 4.14667 19.1334 4 18.7867 4H13.2134C12.8667 4 12.5201 4.14667 12.2801 4.38667L11.3334 5.33333H8.00008C7.26675 5.33333 6.66675 5.93333 6.66675 6.66667C6.66675 7.4 7.26675 8 8.00008 8H24.0001C24.7334 8 25.3334 7.4 25.3334 6.66667C25.3334 5.93333 24.7334 5.33333 24.0001 5.33333Z"
                          fill="#9A9595"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EditModal
        entry={selectedEntry}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSave}
      />

      <CommentModal
        entry={selectedEntry}
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
      />

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmDelete}
        message={`Are you sure you want to delete ${selectedEntry?.formName}?`}
      />
    </div>
  );
};

export default TablePage;
