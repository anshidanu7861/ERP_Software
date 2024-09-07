import React from "react";
import DashBoardCards from "../components/dashBoard/DashBoardCards";
import DashRecentTransaction from "../components/dashBoard/DashRecentTransaction";

function DashBoardPage() {
  return (
    <div>
      <DashBoardCards />
      <div className="py-10">
        <div className="w-full bg-darkGrayColor p-2">
          <h1 className="text-center text-xl font-bold">Recent Transactions</h1>
        </div>
        <DashRecentTransaction />
      </div>
    </div>
  );
}

export default DashBoardPage;
