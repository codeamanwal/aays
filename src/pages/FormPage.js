import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel,
  Button,
  Box,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";

const FormPage = () => {
  const [formData, setFormData] = useState({
    supplierCode: "",
    productCode: "",
    netQuantity: "",
    purchaseOrder: "",
    batchNumber: "",
    eudrReference: "",
    eudrVerification: "",
    eudrSubmissionDate: "",
    referencingDDS: false,
    name: "",
    account: "",
    title: "",
    createdBy: "Aman",
    date: "",
    status: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleToggleChange = (e) => {
    setFormData({
      ...formData,
      referencingDDS: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    const fields = [
      {
        label: "Supplier Code",
        fieldType: "text",
        userInput: formData.supplierCode,
      },
      {
        label: "Product Code",
        fieldType: "text",
        userInput: formData.productCode,
      },
      {
        label: "Net Quantity",
        fieldType: "number",
        userInput: formData.netQuantity,
      },
      {
        label: "Purchase Order",
        fieldType: "text",
        userInput: formData.purchaseOrder,
      },
      {
        label: "Batch Number",
        fieldType: "text",
        userInput: formData.batchNumber,
      },
      {
        label: "EUDR DDS Reference",
        fieldType: "text",
        userInput: formData.eudrReference,
      },
      {
        label: "EUDR DDS Verification",
        fieldType: "text",
        userInput: formData.eudrVerification,
      },
      {
        label: "EUDR Submission Date",
        fieldType: "date",
        userInput: formData.eudrSubmissionDate,
      },
      {
        label: "Referencing DDS",
        fieldType: "dropdown",
        userInput: formData.referencingDDS ? "true" : "false",
        options: ["true", "false"],
      },
      { label: "Name", fieldType: "text", userInput: formData.name },
      { label: "Account", fieldType: "text", userInput: formData.account },
      { label: "Title", fieldType: "text", userInput: formData.title },
      { label: "Created By", fieldType: "text", userInput: formData.createdBy },
      { label: "Date", fieldType: "date", userInput: formData.date },
      {
        label: "Status",
        fieldType: "dropdown",
        userInput: formData.status,
        options: ["Started", "In Progress", "Completed"],
      },
    ];

    const payload = {
      createdBy: formData.createdBy,
      fields,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form saved successfully:", result);
        setSuccessMessage(`Form saved successfully! Form ID: ${result.formId}`);
      } else {
        console.error("Failed to save the form.");
        alert("Failed to save the form. Please try again.");
      }
    } catch (error) {
      console.error("Error while saving the form:", error);
      alert("An error occurred while saving the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box width="100%" padding="20px">
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" align="center" gutterBottom>
              Submit New Due-Diligence Statement Information
            </Typography>

            <Box mt={2}>
              <Grid container spacing={2}>
                {/* Supplier Code */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="supplierCode"
                    label="Supplier or Partner Code (*)"
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Account Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="account"
                    label="Account Name (*)"
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Product Code */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="productCode"
                    label="Product Code (*)"
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Net Quantity */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="netQuantity"
                    label="Net Quantity (Kg) (*)"
                    type="number"
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Purchase Order */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="purchaseOrder"
                    label="Purchase Order No. (*)"
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Batch Number */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="batchNumber"
                    label="Batch Number (*)"
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* EUDR Reference */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="eudrReference"
                    label="EUDR DDS Reference No."
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                {/* EUDR Verification */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="eudrVerification"
                    label="EUDR DDS Verification No."
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                {/* EUDR Submission Date */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="eudrSubmissionDate"
                    label="EUDR Submission Date (*)"
                    type="date"
                    onChange={handleChange}
                    fullWidth
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                {/* Referencing DDS Switch */}
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.referencingDDS}
                        onChange={handleToggleChange}
                        name="referencingDDS"
                        color="primary"
                      />
                    }
                    label="Referencing DDS?"
                  />
                </Grid>
                {/* Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="name"
                    label="Name (*)"
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Title */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="title"
                    label="Title (*)"
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Date */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="date"
                    label="Date (*)"
                    type="date"
                    onChange={handleChange}
                    fullWidth
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                {/* Status */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                      labelId="status-label"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      label="Status"
                    >
                      <MenuItem value="">
                        <em>Select Status</em>
                      </MenuItem>
                      <MenuItem value="Started">Started</MenuItem>
                      <MenuItem value="In Progress">In Progress</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            {/* Buttons */}
            <Box mt={3} display="flex" justifyContent="flex-end">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </Box>

            {/* Success Message */}
            {successMessage && (
              <Typography
                variant="body1"
                color="success.main"
                style={{ marginTop: "20px" }}
              >
                {successMessage}
              </Typography>
            )}
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default FormPage;
