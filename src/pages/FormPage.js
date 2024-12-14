// import React, { useState, useRef } from "react";
// import { toast } from "react-toastify";

// const FormPage = () => {
//   const [formData, setFormData] = useState({
//     supplierCode: "",
//     productCode: "",
//     netQuantity: "",
//     purchaseOrder: "",
//     batchNumber: "",
//     eudrReference: "",
//     eudrVerification: "",
//     eudrSubmissionDate: "",
//     referencingDDS: false,
//     name: "",
//     account: "",
//     title: "",
//     createdBy: "Aman",
//     date: "",
//     status: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   // Remove successMessage state as we'll use toasts instead
//   // const [successMessage, setSuccessMessage] = useState("");

//   const formRef = useRef(null); // Reference to the form for potential future use

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleToggleChange = (e) => {
//     setFormData({
//       ...formData,
//       referencingDDS: e.target.checked,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // setSuccessMessage("");

//     const fields = [
//       {
//         label: "Supplier Code",
//         fieldType: "text",
//         userInput: formData.supplierCode,
//       },
//       {
//         label: "Product Code",
//         fieldType: "text",
//         userInput: formData.productCode,
//       },
//       {
//         label: "Net Quantity",
//         fieldType: "number",
//         userInput: formData.netQuantity,
//       },
//       {
//         label: "Purchase Order",
//         fieldType: "text",
//         userInput: formData.purchaseOrder,
//       },
//       {
//         label: "Batch Number",
//         fieldType: "text",
//         userInput: formData.batchNumber,
//       },
//       {
//         label: "EUDR DDS Reference No.",
//         fieldType: "text",
//         userInput: formData.eudrReference,
//       },
//       {
//         label: "EUDR DDS Verification No.",
//         fieldType: "text",
//         userInput: formData.eudrVerification,
//       },
//       {
//         label: "EUDR Submission Date",
//         fieldType: "date",
//         userInput: formData.eudrSubmissionDate,
//       },
//       {
//         label: "Referencing DDS",
//         fieldType: "dropdown",
//         userInput: formData.referencingDDS ? "true" : "false",
//         options: ["true", "false"],
//       },
//       { label: "Name", fieldType: "text", userInput: formData.name },
//       { label: "Account", fieldType: "text", userInput: formData.account },
//       { label: "Title", fieldType: "text", userInput: formData.title },
//       { label: "Created By", fieldType: "text", userInput: formData.createdBy },
//       { label: "Date", fieldType: "date", userInput: formData.date },
//       {
//         label: "Status",
//         fieldType: "dropdown",
//         userInput: formData.status,
//         options: ["Started", "In Progress", "Completed"],
//       },
//     ];

//     const payload = {
//       createdBy: formData.createdBy,
//       fields,
//     };

//     try {
//       const response = await fetch(`${process.env.REACT_APP_BASE_URL}/save`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log("Form saved successfully:", result);
//         // setSuccessMessage(`Form saved successfully! Form ID: ${result.formId}`);

//         // Trigger toast notification
//         toast.success(`Form saved successfully! Form ID: ${result.formId}`);

//         // Optionally, reset the form here
//         setFormData({
//           supplierCode: "",
//           productCode: "",
//           netQuantity: "",
//           purchaseOrder: "",
//           batchNumber: "",
//           eudrReference: "",
//           eudrVerification: "",
//           eudrSubmissionDate: "",
//           referencingDDS: false,
//           name: "",
//           account: "",
//           title: "",
//           createdBy: "Aman",
//           date: "",
//           status: "",
//         });

//         // Optionally, reset the form fields refocus if needed
//         // formRef.current.reset();
//       } else {
//         console.error("Failed to save the form.");
//         toast.error("Failed to save the form. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error while saving the form:", error);
//       toast.error("An error occurred while saving the form.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Page Heading */}
//         <div className="mb-12 text-left">
//           <h1 className="text-3xl font-bold text-gray-900">
//             Due Diligence Statement Submission
//           </h1>
//           <p className="mt-4 text-md text-gray-600">
//             Please fill out the form below to submit the required information.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-12"
//           ref={formRef} // Reference to the form
//         >
//           {/* Section 1 */}
//           <div className="bg-white shadow-lg sm:rounded-lg">
//             <div className="px-8 py-6">
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 Supplier Information
//               </h2>
//               <p className="mt-2 text-gray-600">
//                 Provide details about the supplier and product.
//               </p>
//             </div>
//             <div className="border-t border-gray-200 px-8 py-6">
//               <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                 {/* Supplier Code */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="supplierCode"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Supplier or Partner Code{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="supplierCode"
//                     id="supplierCode"
//                     required
//                     onChange={handleChange}
//                     value={formData.supplierCode}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter supplier code"
//                   />
//                 </div>

//                 {/* Account Name */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="account"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Account Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="account"
//                     id="account"
//                     required
//                     onChange={handleChange}
//                     value={formData.account}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter account name"
//                   />
//                 </div>

//                 {/* Product Code */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="productCode"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Product Code <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="productCode"
//                     id="productCode"
//                     required
//                     onChange={handleChange}
//                     value={formData.productCode}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter product code"
//                   />
//                 </div>

//                 {/* Net Quantity */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="netQuantity"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Net Quantity (Kg) <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     name="netQuantity"
//                     id="netQuantity"
//                     required
//                     onChange={handleChange}
//                     value={formData.netQuantity}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter net quantity"
//                   />
//                 </div>

//                 {/* Purchase Order */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="purchaseOrder"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Purchase Order No. <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="purchaseOrder"
//                     id="purchaseOrder"
//                     required
//                     onChange={handleChange}
//                     value={formData.purchaseOrder}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter purchase order number"
//                   />
//                 </div>

//                 {/* Batch Number */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="batchNumber"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Batch Number <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="batchNumber"
//                     id="batchNumber"
//                     required
//                     onChange={handleChange}
//                     value={formData.batchNumber}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter batch number"
//                   />
//                 </div>

//                 {/* EUDR DDS Reference No. */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="eudrReference"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     EUDR DDS Reference No.
//                   </label>
//                   <input
//                     type="text"
//                     name="eudrReference"
//                     id="eudrReference"
//                     onChange={handleChange}
//                     value={formData.eudrReference}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter EUDR DDS Reference"
//                   />
//                 </div>

//                 {/* EUDR DDS Verification No. */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="eudrVerification"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     EUDR DDS Verification No.
//                   </label>
//                   <input
//                     type="text"
//                     name="eudrVerification"
//                     id="eudrVerification"
//                     onChange={handleChange}
//                     value={formData.eudrVerification}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter EUDR DDS Verification"
//                   />
//                 </div>

//                 {/* EUDR Submission Date */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="eudrSubmissionDate"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     EUDR Submission Date <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="date"
//                     name="eudrSubmissionDate"
//                     id="eudrSubmissionDate"
//                     required
//                     onChange={handleChange}
//                     value={formData.eudrSubmissionDate}
//                     className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-md"
//                   />
//                 </div>

//                 {/* Referencing DDS Switch */}
//                 <div className="sm:col-span-3 flex items-center mt-6">
//                   <input
//                     id="referencingDDS"
//                     name="referencingDDS"
//                     type="checkbox"
//                     checked={formData.referencingDDS}
//                     onChange={handleToggleChange}
//                     className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                   />
//                   <label
//                     htmlFor="referencingDDS"
//                     className="ml-2 block text-sm font-medium text-gray-700"
//                   >
//                     Referencing DDS?
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="bg-white shadow-lg sm:rounded-lg">
//             <div className="px-8 py-6">
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 Personal Information
//               </h2>
//               <p className="mt-2 text-gray-600">
//                 Please provide your contact details.
//               </p>
//             </div>
//             <div className="border-t border-gray-200 px-8 py-6">
//               <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                 {/* Name */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     required
//                     onChange={handleChange}
//                     value={formData.name}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter your name"
//                   />
//                 </div>

//                 {/* Title */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="title"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Title <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="title"
//                     id="title"
//                     required
//                     onChange={handleChange}
//                     value={formData.title}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter your title"
//                   />
//                 </div>

//                 {/* Date */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="date"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Date <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="date"
//                     name="date"
//                     id="date"
//                     required
//                     onChange={handleChange}
//                     value={formData.date}
//                     className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-md"
//                   />
//                 </div>

//                 {/* Status */}
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="status"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Status <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="status"
//                     name="status"
//                     required
//                     value={formData.status}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-md"
//                   >
//                     <option value="">Select Status</option>
//                     <option value="Started">Started</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6 flex items-center justify-end gap-x-6">
//             <button
//               type="button"
//               onClick={() => window.location.reload()}
//               className="text-sm font-semibold text-gray-700 hover:text-gray-900"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 ${
//                 isSubmitting ? "cursor-not-allowed opacity-50" : ""
//               }`}
//             >
//               {isSubmitting ? "Saving..." : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormPage;



import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

const FormPage = () => {
  const [formId, setFormId] = useState("");
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const localFormId = localStorage.getItem("formId");
    if (localFormId) {
      setFormId(localFormId);
      fetchFormData(localFormId);
    } else {
      toast.error("Form ID not found in localStorage!");
    }
  }, []);

  const fetchFormData = async (id) => {
    try {
      const response = await fetch(
        `https://adet.azurewebsites.net/api/forms/admin/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setFormFields(data.fields);
        const initialData = {};
        data.fields.forEach((field) => {
          initialData[field.label] = field.fieldType === "dropdown" ? "" : "";
        });
        setFormData(initialData);
      } else {
        toast.error("Failed to fetch form fields.");
      }
    } catch (error) {
      console.error("Error fetching form data:", error);
      toast.error("Error fetching form data.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      createdBy: "Aman",
      fields: Object.entries(formData).map(([label, userInput]) => ({
        label,
        userInput,
      })),
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(`Form saved successfully! Form ID: ${result.formId}`);
        setFormData({});
        formRef.current?.reset();
      } else {
        toast.error("Failed to save the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while saving the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-left">
          <h1 className="text-3xl font-bold text-gray-900">
           Due Diligence Statement Submission
          </h1>
          <p className="mt-4 text-md text-gray-600">
            Please fill out the form below to submit the required information.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="space-y-12"
        >
          <div className="bg-white shadow-lg sm:rounded-lg">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Form Fields
              </h2>
              <p className="mt-2 text-gray-600">
                Please provide the requested information.
              </p>
            </div>
            <div className="border-t border-gray-200 px-8 py-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {formFields.length > 0 ? (
                  formFields.map((field, index) => (
                    <div key={index} className="sm:col-span-3">
                      <label
                        htmlFor={field.label}
                        className="block text-sm font-medium text-gray-700"
                      >
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.fieldType === "dropdown" ? (
                        <select
                          id={field.label}
                          name={field.label}
                          value={formData[field.label] || ""}
                          onChange={handleChange}
                          required={field.required}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">Select {field.label}</option>
                          {field.options?.map((option, idx) => (
                            <option key={idx} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.fieldType}
                          id={field.label}
                          name={field.label}
                          value={formData[field.label] || ""}
                          onChange={handleChange}
                          required={field.required}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder={`Enter ${field.label}`}
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 col-span-6">Loading form fields...</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="text-sm font-semibold text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 ${
                isSubmitting ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Form"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;

