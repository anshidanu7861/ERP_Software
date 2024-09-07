import React from "react";

function ReportsTable({ reports, setReports }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[100%]">
          <thead className="text-left bg-[#f6f6f6] dark:bg-darkCardColor">
            <tr className="text-[13px]">
              <th className="p-[12px] font-[600] text-darkTextColor">No</th>
              <th className="p-[12px] font-[600] text-darkTextColor">
                Product Name
              </th>

              <th className="p-[12px] font-[600] text-darkTextColor">Price</th>
              <th className="p-[12px] font-[600] text-darkTextColor">
                Stocke Level
              </th>
              <th className="p-[12px] font-[600] text-darkTextColor">
                Description
              </th>
              <th className="p-[12px] font-[600] text-darkTextColor">
                Warning
              </th>
            </tr>
          </thead>
          <tbody>
            {reports?.map((item, index) => {
              return (
                <tr
                  className="border-b  border-darkBorderColor text-[13px] hover:bg-darkCardColor text-darkTextColor"
                  key={index}
                >
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    {index + 1}
                  </td>
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    {item?.name}
                  </td>

                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    {item?.price} AED
                  </td>
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    {item?.stock_level}
                  </td>
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    {item?.description}
                  </td>
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    <span className="bg-red-100 text-red-500 p-2 rounded">
                      Stock less than 10
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportsTable;
