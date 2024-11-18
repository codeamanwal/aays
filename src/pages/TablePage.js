import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import EditModal from "../components/EditModal";
import ConfirmModal from "../components/ConfirmModal";

const TablePage = () => {
  // Mock data for logged-in user
  const loggedInUser = {
    role: "admin", // Change to "admin" for admin users
    name: "Jeremy", // User's name to filter entries
  };

  const [entries, setEntries] = useState([
    {
      name: "Deyanira Juliet",
      account: "SECURITY NEXTGEN",
      title: "Founder",
      createdBy: "Jeremy",
      date: "2021-03-05",
      status: "In Progress",
    },
    {
      name: "Cliff Majersik",
      account: "Institute for Marketing",
      title: "Director of Marketing",
      createdBy: "Jeremy",
      date: "2020-11-10",
      status: "Not Interested",
    },
    {
      name: "Shyla Raghav",
      account: "Conservation Movement",
      title: "Vice President",
      createdBy: "AdminUser",
      date: "2020-09-18",
      status: "Not Interested",
    },
  ]);

  const [filteredEntries, setFilteredEntries] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Filter entries based on user role
  useEffect(() => {
    if (loggedInUser.role === "admin") {
      setFilteredEntries(entries); // Admin sees all entries
    } else {
      setFilteredEntries(
        entries.filter((entry) => entry.createdBy === loggedInUser.name) // User sees only their own entries
      );
    }
  }, [entries, loggedInUser]);

  // Function to open Edit Modal
  const handleEdit = (entry) => {
    setSelectedEntry(entry);
    setIsEditModalOpen(true);
  };

  // Function for the View button (does nothing for now)
  const handleView = (entry) => {
    console.log("View clicked for entry:", entry); // Placeholder for View action
  };

  // Function to open Confirm Modal for delete confirmation
  const handleDelete = (entry) => {
    setSelectedEntry(entry);
    setIsConfirmModalOpen(true);
  };

  // Function to confirm delete
  const confirmDelete = () => {
    setEntries((prevEntries) =>
      prevEntries.filter((e) => e.name !== selectedEntry.name)
    );
    setIsConfirmModalOpen(false);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Targets</h1>
      {filteredEntries.length > 0 ? (
        filteredEntries.map((entry, index) => (
          <Card
            key={index}
            entry={entry}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView} // Pass the View handler
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
