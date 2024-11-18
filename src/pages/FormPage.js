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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleChange = () => {
    setFormData({ ...formData, referencingDDS: !formData.referencingDDS });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
          {/* Supplier or Partner Code */}
          <input
            name="supplierCode"
            placeholder="Supplier or Partner Code (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />

          {/* Product Code */}
          <input
            name="productCode"
            placeholder="Product Code (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />

          {/* Net Quantity */}
          <input
            name="netQuantity"
            placeholder="Net Quantity (Kg) (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />

          {/* Mars Purchase Order */}
          <input
            name="purchaseOrder"
            placeholder="Mars Purchase Order No. (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />

          {/* Delivery Batch Number */}
          <input
            name="batchNumber"
            placeholder="Delivery Batch Number or Bill of Lader (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />

          {/* EUDR DDS Reference */}
          <input
            name="eudrReference"
            placeholder="EUDR DDS Reference No. (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />

          {/* EUDR DDS Verification */}
          <input
            name="eudrVerification"
            placeholder="EUDR DDS Verification No. (*)"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />

          {/* EUDR DDS Submission Date */}
          <input
            type="date"
            name="eudrSubmissionDate"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />

          {/* Referencing DDS Toggle */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">Referencing a DDS? (*)</label>
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

          {/* Geolocation File Upload */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">Geolocation File (*)</label>
            <input
              type="file"
              name="geolocationFile"
              onChange={(e) =>
                setFormData({ ...formData, geolocationFile: e.target.files[0] })
              }
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          {/* Geolocation Confidential Radio */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">
              Is Geolocation Data Confidential?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="geolocationConfidential"
                  value="Yes"
                  onChange={handleChange}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="geolocationConfidential"
                  value="No"
                  onChange={handleChange}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Form Progress Dropdown */}
          <select
            name="formProgress"
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          >
            <option value="">Select Form Progress</option>
            <option value="Started">Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Preview
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
