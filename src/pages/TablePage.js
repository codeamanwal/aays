import React, { useState, useEffect, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Edit,
  Delete,
  Visibility,
} from "@mui/icons-material";
import EditModal from "../components/EditModal";
import ConfirmModal from "../components/ConfirmModal";
import ViewModal from "../components/ViewModal";

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
    <div className="p-10 bg-gray-100">
      <Typography variant="h4" gutterBottom>
        Targets
      </Typography>

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
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Supplier Code</TableCell>
                    <TableCell>Product Code</TableCell>
                    <TableCell>Net Quantity (Kg)</TableCell>
                    <TableCell>Purchase Order No.</TableCell>
                    <TableCell>Batch Number</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredEntries.map((entry) => (
                    <CollapsibleTableRow
                      key={entry.formId}
                      entry={entry}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      onView={handleView}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <p className="text-gray-500">No entries available</p>
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
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmDelete}
        message={"Are you sure you want to delete this entry?"}
      />
      <ViewModal
        entry={selectedEntry}
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />
    </div>
  );
};

export default TablePage;

// CollapsibleTableRow Component
const CollapsibleTableRow = ({ entry, onEdit, onDelete, onView }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  // Extract fields from entry
  const getField = (label) =>
    entry.fields.find((f) => f.label === label)?.userInput || "N/A";

  const supplierCode = getField("Supplier Code");
  const productCode = getField("Product Code");
  const netQuantity = getField("Net Quantity");
  const purchaseOrder = getField("Purchase Order");
  const batchNumber = getField("Batch Number");
  const status = getField("Status");

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={handleToggle}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{supplierCode}</TableCell>
        <TableCell>{productCode}</TableCell>
        <TableCell>{netQuantity}</TableCell>
        <TableCell>{purchaseOrder}</TableCell>
        <TableCell>{batchNumber}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => onView(entry)}>
            <Visibility fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => onEdit(entry)}>
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => onDelete(entry)}>
            <Delete fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Additional Details
              </Typography>
              <Table size="small" aria-label="additional details">
                <TableBody>
                  {entry.fields.map((field) => (
                    <TableRow key={field.label}>
                      <TableCell component="th" scope="row">
                        {field.label}
                      </TableCell>
                      <TableCell>{field.userInput || "N/A"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
