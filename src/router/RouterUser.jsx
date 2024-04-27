// RouterUser.js
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const RouterUser = () => {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
};

export default RouterUser;
