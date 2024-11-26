import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";

const EditModal = ({ entry, isOpen, onClose, onSave }) => {
  const [formFields, setFormFields] = useState(entry.fields);

  const handleChange = (index, value) => {
    const updatedFields = [...formFields];
    updatedFields[index].userInput = value;
    setFormFields(updatedFields);
  };

  const handleToggle = (index) => {
    const updatedFields = [...formFields];
    updatedFields[index].userInput =
      updatedFields[index].userInput === "true" ? "false" : "true";
    setFormFields(updatedFields);
  };

  const handleSubmit = () => {
    const updatedEntry = { ...entry, fields: formFields };
    onSave(updatedEntry);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Edit Form</DialogTitle>
      <DialogContent>
        {formFields.map((field, index) => (
          <div key={field.label} style={{ marginBottom: "16px" }}>
            {field.fieldType === "boolean" ? (
              <FormControlLabel
                control={
                  <Switch
                    checked={field.userInput === "true"}
                    onChange={() => handleToggle(index)}
                  />
                }
                label={field.label}
              />
            ) : (
              <TextField
                fullWidth
                label={field.label}
                type={field.fieldType === "number" ? "number" : "text"}
                value={field.userInput || ""}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            )}
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
