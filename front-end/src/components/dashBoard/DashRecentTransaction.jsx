import React from "react";
import { useSelector } from "react-redux";

function DashRecentTransaction() {
  const { dashDetails } = useSelector((state) => state.admin);

  return (
    <div className="overflow-x-auto border border-[#333] rounded">
      <table className="w-full bg-darkCardBgColor text-darkGrayColor text-[14px]">
        <thead className="text-left">
          <tr>
            <th className="font-[600] px-4 py-3">No</th>
            <th className="font-[600] px-4 py-3">Product</th>
            <th className="font-[600] px-4 py-3">Quantity</th>
            <th className="font-[600] px-4 py-3">Type</th>
            <th className="font-[600] px-4 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {dashDetails?.recentTransactions?.map((ele, index) => (
            <tr className="border-t border-[#24262d]" key={index}>
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3">{ele?.product_id?.name}</td>
              <td className="px-4 py-3">{ele?.quantity}</td>
              <td className={`px-4 py-3 `}>
                <span
                  className={`${
                    ele?.transaction_type === "sale"
                      ? "bg-green-200 p-1 rounded text-green-600 "
                      : "bg-red-200 rounded text-red-600 p-1 "
                  } `}
                >
                  {ele?.transaction_type}
                </span>
              </td>
              <td className="px-4 py-3">{ele?.date?.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashRecentTransaction;
