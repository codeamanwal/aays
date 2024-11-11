import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import TablePage from "./components/TablePage";
import FormPage from "./components/FormPage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route for login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected routes inside DashboardLayout */}
        <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<TablePage />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
