import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import TablePage from "./components/TablePage";
import FormPage from "./pages/FormPage";
import LoginPage from "./pages/LoginPage";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route for login */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected routes inside DashboardLayout */}
        <Route element={<DashboardLayout />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/user" element={<TablePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
