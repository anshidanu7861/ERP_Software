import React from "react";
import Headers from "../components/Headers/Headers";
import DashBoardPage from "../pages/DashBoardPage";

function AdminLayout({ children }) {
  return (
    <div>
      <div className="">
        <Headers />
        <div className="px-48 py-5">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
