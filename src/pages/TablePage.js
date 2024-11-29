import React, { useState, useEffect, useMemo } from "react";
import EditModal from "../components/EditModal";
import ConfirmModal from "../components/ConfirmModal";
import ViewModal from "../components/ViewModal";
import CollapsibleTableRow from "../components/CollapsibleTableRow";

const TablePage = () => {
  const loggedInUser = useMemo(
    () => ({
      role: "admin",
      name: "Jeremy",
    }),
    []
  );

  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch data from API
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/all-forms`
        );
        const data = await response.json();
        console.log("Fetched data:", data);
        setEntries(data);
      } catch (error) {
        console.error("Error fetching entries:", error);
      } finally {
        setLoading(false);
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
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Due Diligence Statements
          </h1>
          <p className="mt-2 text-gray-600">
            View, edit, and manage due diligence statements below.
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
            {successMessage}
          </div>
        )}

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          </div>
        ) : (
          <>
            {filteredEntries.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Details
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Supplier Code
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Product Code
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Net Quantity (Kg)
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Purchase Order No.
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Batch Number
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEntries.map((entry) => (
                      <CollapsibleTableRow
                        key={entry.formId}
                        entry={entry}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onView={handleView}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-gray-500">No entries available.</p>
            )}
          </>
        )}

        {/* Modals */}
        {isEditModalOpen && (
          <EditModal
            entry={selectedEntry}
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            onSave={handleSave}
          />
        )}
        {isConfirmModalOpen && (
          <ConfirmModal
            isOpen={isConfirmModalOpen}
            onClose={() => setIsConfirmModalOpen(false)}
            onConfirm={confirmDelete}
            message={"Are you sure you want to delete this entry?"}
          />
        )}
        {isViewModalOpen && (
          <ViewModal
            entry={selectedEntry}
            isOpen={isViewModalOpen}
            onClose={() => setIsViewModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default TablePage;
