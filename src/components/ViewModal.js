import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

const ViewModal = ({ entry, isOpen, onClose }) => {
  if (!isOpen || !entry) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Form Details</DialogTitle>
      <DialogContent>
        <Table>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewModal;
