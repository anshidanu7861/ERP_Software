import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/DashBoardPage";
import SupplierPage from "../pages/SupplierPage";
import ProductPage from "../pages/ProductPage";
import InventoryPage from "../pages/InventoryPage";
import ReporterPage from "../pages/ReporterPage";
import AdminLayout from "../layout/AdminLayout";
import TransactionPage from "../pages/TransactionPage";
import AddProducts from "../pages/AddProducts";
import EditProductsPage from "../pages/EditProductsPage";
import AddSupplierPage from "../pages/AddSupplierPage";
import EditSupplierPage from "../pages/EditSupplierPage";
import SupplierDetails from "../pages/SupplierDetails";

function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminLayout>
            <DashBoardPage />
          </AdminLayout>
        }
      />
      <Route
        path="/suppliers"
        element={
          <AdminLayout>
            <SupplierPage />
          </AdminLayout>
        }
      />
      <Route
        path="/suppliers/single/:id"
        element={
          <AdminLayout>
            <SupplierDetails />
          </AdminLayout>
        }
      />
      <Route
        path="/suppliers/add"
        element={
          <AdminLayout>
            <AddSupplierPage />
          </AdminLayout>
        }
      />
      <Route
        path="/suppliers/edit/:id"
        element={
          <AdminLayout>
            <EditSupplierPage />
          </AdminLayout>
        }
      />
      <Route
        path="/products"
        element={
          <AdminLayout>
            <ProductPage />
          </AdminLayout>
        }
      />
      <Route
        path="/products/add"
        element={
          <AdminLayout>
            <AddProducts />
          </AdminLayout>
        }
      />
      <Route
        path="/products/edit/:id"
        element={
          <AdminLayout>
            <EditProductsPage />
          </AdminLayout>
        }
      />
      <Route
        path="/inventory"
        element={
          <AdminLayout>
            <InventoryPage />
          </AdminLayout>
        }
      />
      <Route
        path="/reports"
        element={
          <AdminLayout>
            <ReporterPage />
          </AdminLayout>
        }
      />
      <Route
        path="/transaction"
        element={
          <AdminLayout>
            <TransactionPage />
          </AdminLayout>
        }
      />
    </Routes>
  );
}

export default Routers;
