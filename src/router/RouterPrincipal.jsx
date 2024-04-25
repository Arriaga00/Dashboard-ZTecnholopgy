// RouterPrincipal.js
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Login";
import RouterUser from "./RouterUser";
import PrivateRoute from "./PrivateRoute";

const RouterPrincipal = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Login />} />
      <Route element={<PrivateRoute/>}>
        <Route path="/user/*" element={<RouterUser />} />
      </Route>
      <Route path="/*" element={<Navigate to={"/auth"} />} />
    </Routes>
  );
};

export default RouterPrincipal;
