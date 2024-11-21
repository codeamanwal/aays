import React, { useState } from "react";

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
    geolocationFile: "",
    geolocationConfidential: "",
    formProgress: "",
    name: "",
    account: "",
    title: "",
    createdBy: "Aman", // Default createdBy
    date: "",
    status: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleChange = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      referencingDDS: !prevFormData.referencingDDS,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show loader and disable button
    setSuccessMessage(""); // Clear any previous success message

    // Prepare the fields array to match the backend structure
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
        fieldType: "boolean",
        userInput: formData.referencingDDS,
      },
      {
        label: "Form Progress",
        fieldType: "dropdown",
        userInput: formData.formProgress,
        options: ["Started", "In Progress", "Completed"],
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
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-[1000px] space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">
          Submit New Due-Diligence Statement Information
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* Supplier Details */}
          <input
            name="supplierCode"
            placeholder="Supplier or Partner Code (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
          <input
            name="account"
            placeholder="Account Name (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />

          {/* Product Details */}
          <input
            name="productCode"
            placeholder="Product Code (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
          <input
            name="netQuantity"
            placeholder="Net Quantity (Kg) (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
          <input
            name="purchaseOrder"
            placeholder="Purchase Order No. (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
          <input
            name="batchNumber"
            placeholder="Batch Number (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />

          {/* Due-Diligence Information */}
          <input
            name="eudrReference"
            placeholder="EUDR DDS Reference No."
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="eudrVerification"
            placeholder="EUDR DDS Verification No."
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <input
            type="date"
            name="eudrSubmissionDate"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">Referencing DDS?</label>
            <div
              onClick={handleToggleChange}
              className={`cursor-pointer w-12 h-6 flex items-center rounded-full p-1 ${
                formData.referencingDDS ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`h-4 w-4 bg-white rounded-full shadow-md transform ${
                  formData.referencingDDS ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
          </div>

          {/* Metadata */}
          <input
            name="name"
            placeholder="Name (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
          <input
            name="title"
            placeholder="Title (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
          <input
            name="date"
            type="date"
            placeholder="Date (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
          <select
            name="status"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          >
            <option value="">Select Status</option>
            <option value="Started">Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            type="submit"
            className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-600 font-semibold mt-4">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default FormPage;
