import React, { useState, useEffect } from "react";
import Card from "./Card";
import EditModal from "./EditModal";
import CommentModal from "./CommentModal";
import ConfirmModal from "./ConfirmModal";
import axios from "axios";

const TablePage = () => {
  const [entries, setEntries] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchForms = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/admin/all`
        );
        setEntries(response.data);
      } catch (error) {
        console.error("Error fetching forms data:", error);
      }
      setIsLoading(false);
    };

    fetchForms();
  }, []);

  const handleEdit = (entry) => {
    setSelectedEntry(entry);
    setIsEditModalOpen(true);
  };

  const handleSave = async (updatedEntry) => {
    if (updatedEntry.formId) {
      try {
        await axios.put(
          `${process.env.REACT_APP_BASE_URL}/edit/${updatedEntry.formId}`,
          updatedEntry
        );
        setEntries((prevEntries) =>
          prevEntries.map((e) =>
            e.formId === updatedEntry.formId ? updatedEntry : e
          )
        );
      } catch (error) {
        console.error("Error updating entry:", error);
      }
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/save`,
          updatedEntry
        );
        setEntries((prevEntries) => [...prevEntries, response.data]);
      } catch (error) {
        console.error("Error saving new entry:", error);
      }
    }
    setIsEditModalOpen(false);
  };

  const handleDelete = (entry) => {
    setSelectedEntry(entry);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/delete/${selectedEntry.formId}`
      );
      setEntries((prevEntries) =>
        prevEntries.filter((e) => e.formId !== selectedEntry.formId)
      );
      setIsConfirmModalOpen(false);
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Targets</h1>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      ) : entries.length > 0 ? (
        entries.map((entry, index) => (
          <Card
            key={index}
            entry={entry}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onComment={() => setIsCommentModalOpen(true)}
          />
        ))
      ) : (
        <p className="text-gray-500">No entries available</p>
      )}

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
