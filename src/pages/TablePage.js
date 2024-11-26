import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import EditModal from "../components/EditModal";
import ConfirmModal from "../components/ConfirmModal";
import ViewModal from "../components/ViewModal";

const TablePage = () => {
  const loggedInUser = {
    role: "admin", // Change to "admin" for admin users
    name: "Jeremy", // User's name to filter entries
  };

  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [loading, setLoading] = useState(true); // Loader state
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch data from API
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        setLoading(true); // Show loader
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/all-forms`
        );
        const data = await response.json();
        console.log("Fetched data:", data);
        setEntries(data);
      } catch (error) {
        console.error("Error fetching entries:", error);
      } finally {
        setLoading(false); // Hide loader
      }
    };

    fetchEntries();
  }, []);

  // Filter entries based on user role
  useEffect(() => {
    if (loggedInUser.role === "admin") {
      setFilteredEntries(entries); // Admin sees all entries
    } else {
      setFilteredEntries(
        entries.filter((entry) => entry.createdBy === loggedInUser.name)
      );
    }
  }, [entries, loggedInUser]);

  // Open Edit Modal
  const handleEdit = (entry) => {
    setSelectedEntry(entry);
    setIsEditModalOpen(true);
  };

  // Open View Modal
  const handleView = (entry) => {
    setSelectedEntry(entry);
    setIsViewModalOpen(true);
  };

  // Open Confirm Delete Modal
  const handleDelete = (entry) => {
    setSelectedEntry(entry);
    setIsConfirmModalOpen(true);
  };

  // Confirm Delete Action
  const confirmDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/delete/${selectedEntry.formId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setEntries((prevEntries) =>
          prevEntries.filter((e) => e.formId !== selectedEntry.formId)
        );
        setSuccessMessage(
          `Form "${selectedEntry.formId}" deleted successfully!`
        );
        setIsConfirmModalOpen(false);
      } else {
        setSuccessMessage("Failed to delete the form. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting the form:", error);
      setSuccessMessage("An error occurred while deleting the form.");
    }
  };

  // Save updated entry
  const handleSave = (updatedEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.formId === updatedEntry.formId ? updatedEntry : entry
      )
    );
    setSuccessMessage("Form updated successfully!");
    setIsEditModalOpen(false);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Targets</h1>

      {loading ? (
        // Loader UI
        <div className="flex justify-center items-center h-60">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : (
        <>
          {successMessage && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
              {successMessage}
            </div>
          )}

          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry, index) => (
              <Card
                key={index}
                entry={{
                  name:
                    entry.fields.find((f) => f.label === "Name")?.userInput ||
                    "N/A",
                  account:
                    entry.fields.find((f) => f.label === "Account")
                      ?.userInput || "N/A",
                  title:
                    entry.fields.find((f) => f.label === "Title")?.userInput ||
                    "N/A",
                  createdBy: entry.createdBy,
                  date:
                    entry.fields.find((f) => f.label === "Date")?.userInput ||
                    "N/A",
                  status:
                    entry.fields.find((f) => f.label === "Status")?.userInput ||
                    "N/A",
                }}
                onEdit={() => handleEdit(entry)}
                onDelete={() => handleDelete(entry)}
                onView={() => handleView(entry)}
              />
            ))
          ) : (
            <p className="text-gray-500">No entries available</p>
          )}
        </>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <EditModal
          entry={selectedEntry}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSave} // Pass the handleSave function
        />
      )}

      {/* Confirm Delete Modal */}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmDelete}
        message={`Are you sure you want to delete this entry?`}
      />

      {/* View Modal */}
      <ViewModal
        entry={selectedEntry}
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />
    </div>
  );
};

export default TablePage;
