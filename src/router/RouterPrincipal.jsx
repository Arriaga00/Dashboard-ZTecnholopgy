// RouterPrincipal.js
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Login"
import RouterUser from "./RouterUser";

const RouterPrincipal = () => {
  return (

      <Routes>
        <Route path="/auth" element={<Login/>} /> 
        <Route path="/user/*" element={<RouterUser/>}/>
        <Route path="/*" element={<Navigate to ={'/auth'}/>}/>
      </Routes>

  )
}

export default RouterPrincipal
