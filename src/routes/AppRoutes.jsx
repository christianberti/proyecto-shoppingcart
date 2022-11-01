import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/login/Login'
import App from "../App";
import ProtectedRoutes from './ProtectedRoutes'
import Checkout from "../pages/checkout/Checkout";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element={
              <ProtectedRoutes>
                <Routes>
                  <Route path="/app" element={<App/>}/>
                  <Route path="/checkout" element={<Checkout/>}/>
                  <Route path="/" element={<App/>}/>
                </Routes>   
              </ProtectedRoutes>
              }/>

            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
              }/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
