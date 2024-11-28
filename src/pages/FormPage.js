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
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Due Diligence Statement Submission
          </h1>
          <p className="mt-2 text-center text-gray-600">
            Please fill out the form below to submit the required information.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Section 1 */}
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-6 py-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Supplier Information
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Provide details about the supplier and product.
              </p>
            </div>
            <div className="border-t border-gray-200 px-6 py-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                {/* Supplier Code */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="supplierCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Supplier or Partner Code{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="supplierCode"
                    id="supplierCode"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Account Name */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="account"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Account Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="account"
                    id="account"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Product Code */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="productCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="productCode"
                    id="productCode"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Net Quantity */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="netQuantity"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Net Quantity (Kg) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="netQuantity"
                    id="netQuantity"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Purchase Order */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="purchaseOrder"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Purchase Order No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="purchaseOrder"
                    id="purchaseOrder"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Batch Number */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="batchNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Batch Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="batchNumber"
                    id="batchNumber"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* EUDR DDS Reference No. */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="eudrReference"
                    className="block text-sm font-medium text-gray-700"
                  >
                    EUDR DDS Reference No.
                  </label>
                  <input
                    type="text"
                    name="eudrReference"
                    id="eudrReference"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* EUDR DDS Verification No. */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="eudrVerification"
                    className="block text-sm font-medium text-gray-700"
                  >
                    EUDR DDS Verification No.
                  </label>
                  <input
                    type="text"
                    name="eudrVerification"
                    id="eudrVerification"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* EUDR Submission Date */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="eudrSubmissionDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    EUDR Submission Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="eudrSubmissionDate"
                    id="eudrSubmissionDate"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Referencing DDS Switch */}
                <div className="sm:col-span-3 flex items-center mt-6">
                  <input
                    id="referencingDDS"
                    name="referencingDDS"
                    type="checkbox"
                    checked={formData.referencingDDS}
                    onChange={handleToggleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="referencingDDS"
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    Referencing DDS?
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-6 py-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Personal Information
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Please provide your contact details.
              </p>
            </div>
            <div className="border-t border-gray-200 px-6 py-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                {/* Name */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Title */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Date */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Status */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="status"
                    name="status"
                    required
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Status</option>
                    <option value="Started">Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="text-sm font-semibold text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              {isSubmitting ? "Saving..." : "Submit"}
            </button>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-4 text-green-600 text-center">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormPage;
