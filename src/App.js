import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import TablePage from "./components/TablePage";
import FormPage from "./components/FormPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<TablePage />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
