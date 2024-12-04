// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import TablePage from "./pages/TablePage";
import FormPage from "./pages/FormPage";
import LoginPage from "./pages/LoginPage";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";
import CustomizePage from "./pages/CustomizeFormPage";

// Import ToastContainer and the CSS for react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router>
      {/* ToastContainer should be placed inside Router to allow navigation-based toasts */}
      <ToastContainer
        position="top-right" // Position of the toast
        autoClose={5000} // Auto close after 5 seconds
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Newest toast on top
        closeOnClick // Close on click
        rtl={false} // Left-to-right layout
        pauseOnFocusLoss // Pause when window loses focus
        draggable // Allow dragging to dismiss
        pauseOnHover // Pause on hover
        theme="colored" // Theme of the toast ('light', 'dark', 'colored')
      />

      <Routes>
        {/* Public route for login */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected routes inside DashboardLayout */}
        <Route element={<DashboardLayout />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/user" element={<TablePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/customize" element={<CustomizePage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
