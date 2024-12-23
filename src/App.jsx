import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Component/Dashboard/DashboardLayout";
import Login from "./Component/Login";

const App = () => {
  // Simulating authentication state (replace this with your actual auth logic)
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // A Private Route component to protect routes
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        {/* Public Login Page */}
        <Route
          path="/login"
          element={<Login/>}
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard/*"
          element={<PrivateRoute element={<Dashboard />} />}
        />

        {/* Default Route */}
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/dashboard/home" : "/login"} />}
        />
      </Routes>
    </>
  );
};

export default App;
