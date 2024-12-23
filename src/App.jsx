import React from "react";
import { Routes, Route,  Navigate } from "react-router-dom";

import Dashboard from "./Component/Dashboard/DashboardLayout";

//

// App Component
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
      </Routes>
    </>
  );
};

export default App;
