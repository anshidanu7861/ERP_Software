import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Routers from "./Routers";
import LoginPage from "../pages/LoginPage";
import AdminLayout from "../layout/AdminLayout";
import { useSelector } from "react-redux";

function Main() {
  const { token } = useSelector((state) => state.admin);

  return (
    <Routes>
      <Route
        path="/*"
        element={!token ? <Navigate to={"/login"} /> : <Routers />}
      />
      <Route
        path="/login"
        element={token ? <Navigate to="/" /> : <LoginPage />}
      />
    </Routes>
  );
}

export default Main;
