import React, { useState } from "react";
import Card from "./Card";
import EditModal from "./EditModal";
import CommentModal from "./CommentModal";
import ConfirmModal from "./ConfirmModal";

const TablePage = () => {
  const [entries, setEntries] = useState([
    {
      name: "Deyanira Juliet",
      account: "SECURITY NEXTGEN",
      title: "Founder",
      createdBy: "Jeremy",
      date: "2021-03-05",
      status: "In Progress",
      comments: [],
    },
    {
      name: "Cliff Majersik",
      account: "Institute for Marketing",
      title: "Director of Marketing",
      createdBy: "Jeremy",
      date: "2020-11-10",
      status: "Not Interested",
      comments: [],
    },
    {
      name: "Shyla Raghav",
      account: "Conservation Movement",
      title: "Vice President",
      createdBy: "Jeremy",
      date: "2020-09-18",
      status: "Not Interested",
      comments: [],
    },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Function to open Edit Modal with selected entry data
  const handleEdit = (entry) => {
    setSelectedEntry(entry);
    setIsEditModalOpen(true);
  };

  // Function to save updated entry from Edit Modal
  const handleSave = (updatedEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((e) => (e.name === updatedEntry.name ? updatedEntry : e))
    );
    setIsEditModalOpen(false);
  };

  // Function to open Confirm Modal for delete confirmation
  const handleDelete = (entry) => {
    setSelectedEntry(entry);
    setIsConfirmModalOpen(true);
  };

  // Function to confirm and delete the selected entry
  const confirmDelete = () => {
    setEntries((prevEntries) =>
      prevEntries.filter((e) => e.name !== selectedEntry.name)
    );
    setIsConfirmModalOpen(false);
  };

  // Function to open Comment Modal with selected entry data
  const handleComment = (entry) => {
    setSelectedEntry(entry);
    setIsCommentModalOpen(true);
  };

  // Function to add a new comment to the selected entry
  const handleAddComment = (newComment) => {
    setEntries((prevEntries) =>
      prevEntries.map((e) =>
        e.name === selectedEntry.name
          ? { ...e, comments: [...e.comments, newComment] }
          : e
      )
    );
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Targets</h1>
      {entries.length > 0 ? (
        entries.map((entry, index) => (
          <Card
            key={index}
            entry={entry}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onComment={handleComment}
          />
        ))
      ) : (
        <p className="text-gray-500">No entries available</p>
      )}

      {/* Edit Modal */}
      <EditModal
        entry={selectedEntry}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSave}
      />

      {/* Comment Modal */}
      <CommentModal
        entry={selectedEntry}
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        onAddComment={handleAddComment}
      />

      {/* Confirm Delete Modal */}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmDelete}
        message={`Are you sure you want to delete ${selectedEntry?.name}?`}
      />
    </div>
  );
};

export default TablePage;
