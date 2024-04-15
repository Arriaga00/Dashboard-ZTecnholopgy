import {  Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import Order from "../pages/Order"
import Clients from "../pages/Clients"
import Sales from "../pages/Sales"
import Managers from "../pages/Managers"
import Settings from "../pages/Settings"


const RouterMain = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/sales" element={<Sales/>}/>
        <Route path="/managers" element={<Managers/>}/>
        <Route path="/settings" element={<Settings/>}/>
    </Routes>
  )
}

export default RouterMain