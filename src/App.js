import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import TablePage from "./components/TablePage";
import FormPage from "./components/FormPage";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<TablePage />} />
          <Route path="/form" element={<FormPage />} />
          {/* Add more routes here as needed */}
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
