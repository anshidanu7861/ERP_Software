import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import TopCards from "../commens/TopCards";
import { useSelector } from "react-redux";
import { PiUsersThreeLight } from "react-icons/pi";
function DashBoardCards() {
  const { dashDetails } = useSelector((state) => state.admin);

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <TopCards
          bg="#DC6BAD"
          icon={<PiUsersThreeLight />}
          title="Total Suppliers"
          val={dashDetails?.totalSuppliers}
        />
        <TopCards
          bg="#8C7AA9"
          icon={<AiOutlineProduct />}
          title="Total Products"
          val={dashDetails?.totalProducts}
        />
        <TopCards
          bg="#7192BE"
          icon={<GrTransaction />}
          title="Total Transactions"
          val={dashDetails?.totalTransactions}
        />
      </div>
    </div>
  );
}

export default DashBoardCards;
