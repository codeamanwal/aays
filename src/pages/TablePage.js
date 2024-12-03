import React, { useState, useEffect, useMemo } from "react";
import ConfirmModal from "../components/ConfirmModal";
import CollapsibleTableRow from "../components/CollapsibleTableRow";
import { FormDetails } from "../components/Formdetail";
import { EditForm } from "../components/Editdetail";

// const data = [
//   {
//       "formId": "2MUH9R",
//       "createdBy": "Aman",
//       "fields": [
//           {
//               "id": 116,
//               "label": "Supplier Code",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 117,
//               "label": "Product Code",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 118,
//               "label": "Net Quantity",
//               "fieldType": "number",
//               "userInput": "2"
//           },
//           {
//               "id": 119,
//               "label": "Purchase Order",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 120,
//               "label": "Batch Number",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 121,
//               "label": "EUDR DDS Reference",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 122,
//               "label": "EUDR DDS Verification",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 123,
//               "label": "EUDR Submission Date",
//               "fieldType": "date",
//               "userInput": "2024-11-30"
//           },
//           {
//               "id": 124,
//               "label": "Referencing DDS",
//               "fieldType": "dropdown",
//               "userInput": "true",
//               "options": [
//                   "true",
//                   "false"
//               ]
//           },
//           {
//               "id": 125,
//               "label": "Name",
//               "fieldType": "text",
//               "userInput": "Aman"
//           },
//           {
//               "id": 126,
//               "label": "Account",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 127,
//               "label": "Title",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 128,
//               "label": "Created By",
//               "fieldType": "text",
//               "userInput": "Aman"
//           },
//           {
//               "id": 129,
//               "label": "Date",
//               "fieldType": "date",
//               "userInput": "2024-11-30"
//           },
//           {
//               "id": 130,
//               "label": "Status",
//               "fieldType": "dropdown",
//               "userInput": "Started",
//               "options": [
//                   "Started",
//                   "In Progress",
//                   "Completed"
//               ]
//           }
//       ]
//   },
//   {
//       "formId": "99VHU9",
//       "createdBy": "Aman",
//       "fields": [
//           {
//               "id": 86,
//               "label": "Supplier Code",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 87,
//               "label": "Product Code",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 88,
//               "label": "Net Quantity",
//               "fieldType": "number",
//               "userInput": "123"
//           },
//           {
//               "id": 89,
//               "label": "Purchase Order",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 90,
//               "label": "Batch Number",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 91,
//               "label": "EUDR DDS Reference",
//               "fieldType": "text",
//               "userInput": "12345678"
//           },
//           {
//               "id": 92,
//               "label": "EUDR DDS Verification",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 93,
//               "label": "EUDR Submission Date",
//               "fieldType": "date",
//               "userInput": "2024-11-22"
//           },
//           {
//               "id": 94,
//               "label": "Referencing DDS",
//               "fieldType": "dropdown",
//               "userInput": "true",
//               "options": [
//                   "true",
//                   "false"
//               ]
//           },
//           {
//               "id": 95,
//               "label": "Name",
//               "fieldType": "text",
//               "userInput": "Aman"
//           },
//           {
//               "id": 96,
//               "label": "Account",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 97,
//               "label": "Title",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 98,
//               "label": "Created By",
//               "fieldType": "text",
//               "userInput": "Aman"
//           },
//           {
//               "id": 99,
//               "label": "Date",
//               "fieldType": "date",
//               "userInput": "2024-11-28"
//           },
//           {
//               "id": 100,
//               "label": "Status",
//               "fieldType": "dropdown",
//               "userInput": "Started",
//               "options": [
//                   "Started",
//                   "In Progress",
//                   "Completed"
//               ]
//           }
//       ]
//   },
//   {
//       "formId": "LC9Y05",
//       "createdBy": "Aman",
//       "fields": [
//           {
//               "id": 101,
//               "label": "Supplier Code",
//               "fieldType": "text",
//               "userInput": "Aays"
//           },
//           {
//               "id": 102,
//               "label": "Product Code",
//               "fieldType": "text",
//               "userInput": "1234"
//           },
//           {
//               "id": 103,
//               "label": "Net Quantity",
//               "fieldType": "number",
//               "userInput": "100"
//           },
//           {
//               "id": 104,
//               "label": "Purchase Order",
//               "fieldType": "text",
//               "userInput": "PO123456"
//           },
//           {
//               "id": 105,
//               "label": "Batch Number",
//               "fieldType": "text",
//               "userInput": "B0123"
//           },
//           {
//               "id": 106,
//               "label": "EUDR DDS Reference",
//               "fieldType": "text",
//               "userInput": "EU123"
//           },
//           {
//               "id": 107,
//               "label": "EUDR DDS Verification",
//               "fieldType": "text",
//               "userInput": "EUabc"
//           },
//           {
//               "id": 108,
//               "label": "EUDR Submission Date",
//               "fieldType": "date",
//               "userInput": "2024-10-20"
//           },
//           {
//               "id": 109,
//               "label": "Referencing DDS",
//               "fieldType": "dropdown",
//               "userInput": "true",
//               "options": [
//                   "true",
//                   "false"
//               ]
//           },
//           {
//               "id": 110,
//               "label": "Name",
//               "fieldType": "text",
//               "userInput": "Sumit"
//           },
//           {
//               "id": 111,
//               "label": "Account",
//               "fieldType": "text",
//               "userInput": "Aays Private Ltd"
//           },
//           {
//               "id": 112,
//               "label": "Title",
//               "fieldType": "text",
//               "userInput": "Supply Chain lead"
//           },
//           {
//               "id": 113,
//               "label": "Created By",
//               "fieldType": "text",
//               "userInput": "Aman"
//           },
//           {
//               "id": 114,
//               "label": "Date",
//               "fieldType": "date",
//               "userInput": "2024-12-20"
//           },
//           {
//               "id": 115,
//               "label": "Status",
//               "fieldType": "dropdown",
//               "userInput": "Started",
//               "options": [
//                   "Started",
//                   "In Progress",
//                   "Completed"
//               ]
//           }
//       ]
//   },
//   {
//       "formId": "NDE7CG",
//       "createdBy": "Aman",
//       "fields": [
//           {
//               "id": 54,
//               "label": "Supplier Code",
//               "fieldType": "text",
//               "userInput": "2121"
//           },
//           {
//               "id": 55,
//               "label": "Product Code",
//               "fieldType": "text",
//               "userInput": "31313"
//           },
//           {
//               "id": 56,
//               "label": "Net Quantity",
//               "fieldType": "number",
//               "userInput": "212"
//           },
//           {
//               "id": 57,
//               "label": "Purchase Order",
//               "fieldType": "text",
//               "userInput": "22"
//           },
//           {
//               "id": 58,
//               "label": "Batch Number",
//               "fieldType": "text",
//               "userInput": "222"
//           },
//           {
//               "id": 59,
//               "label": "EUDR DDS Reference",
//               "fieldType": "text",
//               "userInput": "22"
//           },
//           {
//               "id": 60,
//               "label": "EUDR DDS Verification",
//               "fieldType": "text",
//               "userInput": "222"
//           },
//           {
//               "id": 61,
//               "label": "EUDR Submission Date",
//               "fieldType": "date",
//               "userInput": "2024-11-04"
//           },
//           {
//               "id": 62,
//               "label": "Referencing DDS",
//               "fieldType": "boolean",
//               "userInput": "true"
//           },
//           {
//               "id": 63,
//               "label": "Form Progress",
//               "fieldType": "dropdown",
//               "userInput": "",
//               "options": [
//                   "Started",
//                   "In Progress",
//                   "Completed"
//               ]
//           },
//           {
//               "id": 64,
//               "label": "Name",
//               "fieldType": "text",
//               "userInput": "Akash"
//           },
//           {
//               "id": 65,
//               "label": "Account",
//               "fieldType": "text",
//               "userInput": "332313"
//           },
//           {
//               "id": 66,
//               "label": "Title",
//               "fieldType": "text",
//               "userInput": "Ag"
//           },
//           {
//               "id": 67,
//               "label": "Created By",
//               "fieldType": "text",
//               "userInput": "Aman"
//           },
//           {
//               "id": 68,
//               "label": "Date",
//               "fieldType": "date",
//               "userInput": "2024-11-28"
//           },
//           {
//               "id": 69,
//               "label": "Status",
//               "fieldType": "dropdown",
//               "userInput": "Started",
//               "options": [
//                   "Started",
//                   "In Progress",
//                   "Completed"
//               ]
//           }
//       ]
//   },
//   {
//       "formId": "R2CE97",
//       "createdBy": "Aman",
//       "fields": [
//           {
//               "id": 131,
//               "label": "Supplier Code",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 132,
//               "label": "Product Code",
//               "fieldType": "text",
//               "userInput": "HSN123"
//           },
//           {
//               "id": 133,
//               "label": "Net Quantity",
//               "fieldType": "number",
//               "userInput": "2"
//           },
//           {
//               "id": 134,
//               "label": "Purchase Order",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 135,
//               "label": "Batch Number",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 136,
//               "label": "EUDR DDS Reference No.",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 137,
//               "label": "EUDR DDS Verification No.",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 138,
//               "label": "EUDR Submission Date",
//               "fieldType": "date",
//               "userInput": "2024-12-05"
//           },
//           {
//               "id": 139,
//               "label": "Referencing DDS",
//               "fieldType": "dropdown",
//               "userInput": "false",
//               "options": [
//                   "true",
//                   "false"
//               ]
//           },
//           {
//               "id": 140,
//               "label": "Name",
//               "fieldType": "text",
//               "userInput": "Aman"
//           },
//           {
//               "id": 141,
//               "label": "Account",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 142,
//               "label": "Title",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 143,
//               "label": "Created By",
//               "fieldType": "text",
//               "userInput": "Aman"
//           },
//           {
//               "id": 144,
//               "label": "Date",
//               "fieldType": "date",
//               "userInput": "2024-11-30"
//           },
//           {
//               "id": 145,
//               "label": "Status",
//               "fieldType": "dropdown",
//               "userInput": "In Progress",
//               "options": [
//                   "Started",
//                   "In Progress",
//                   "Completed"
//               ]
//           }
//       ]
//   },
//   {
//       "formId": "UKZKLD",
//       "createdBy": "Aman",
//       "fields": [
//           {
//               "id": 146,
//               "label": "Supplier Code",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 147,
//               "label": "Product Code",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 148,
//               "label": "Net Quantity",
//               "fieldType": "number",
//               "userInput": "2"
//           },
//           {
//               "id": 149,
//               "label": "Purchase Order",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 150,
//               "label": "Batch Number",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 151,
//               "label": "EUDR DDS Reference No.",
//               "fieldType": "text",
//               "userInput": "123"
//           },
//           {
//               "id": 152,
//               "label": "EUDR DDS Verification No.",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 153,
//               "label": "EUDR Submission Date",
//               "fieldType": "date",
//               "userInput": "2024-11-16"
//           },
//           {
//               "id": 154,
//               "label": "Referencing DDS",
//               "fieldType": "dropdown",
//               "userInput": "true",
//               "options": [
//                   "true",
//                   "false"
//               ]
//           },
//           {
//               "id": 155,
//               "label": "Name",
//               "fieldType": "text",
//               "userInput": "Aman"
//           },
//           {
//               "id": 156,
//               "label": "Account",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 157,
//               "label": "Title",
//               "fieldType": "text",
//               "userInput": "Test"
//           },
//           {
//               "id": 158,
//               "label": "Created By",
//               "fieldType": "text",
//               "userInput": "Aman"
//           },
//           {
//               "id": 159,
//               "label": "Date",
//               "fieldType": "date",
//               "userInput": "2024-11-30"
//           },
//           {
//               "id": 160,
//               "label": "Status",
//               "fieldType": "dropdown",
//               "userInput": "Completed",
//               "options": [
//                   "Started",
//                   "In Progress",
//                   "Completed"
//               ]
//           }
//       ]
//   }
// ]

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

  // useEffect(() => {
  //   setLoading(true);
  //   setEntries(data);
  //   setLoading(false);
  // },[])

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
      <div className="w-full max-w-7xl mx-auto">
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
          <EditForm
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
          <FormDetails
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
