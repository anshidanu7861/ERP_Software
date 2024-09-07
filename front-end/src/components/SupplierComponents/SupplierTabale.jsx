import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { GrFormView } from "react-icons/gr";
import { axiosConfig } from "../../config/axiosConfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SupplierTabale({ suppliers, setSuppliers }) {
  const { token } = useSelector((state) => state.admin);

  const navigate = useNavigate();

  const deleteSupplier = async (id) => {
    try {
      const filteredData = suppliers.filter((item) => item?._id != id);
      setSuppliers(filteredData);
      const res = await axiosConfig.delete(`/suppliers/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[100%]">
          <thead className="text-left bg-[#f6f6f6] dark:bg-darkCardColor">
            <tr className="text-[13px]">
              <th className="p-[12px] font-[600] text-darkTextColor">No</th>
              <th className="p-[12px] font-[600] text-darkTextColor">Email</th>
              <th className="p-[12px] font-[600] text-darkTextColor">Name</th>
              <th className="p-[12px] font-[600] text-darkTextColor">Phone</th>
              <th className="p-[12px] font-[600] text-darkTextColor">
                Address
              </th>

              <th className="p-[12px] font-[600] text-darkTextColor">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {suppliers?.map((item, index) => {
              return (
                <tr
                  className="border-b  border-darkBorderColor text-[13px] hover:bg-darkCardColor text-darkTextColor"
                  key={index}
                >
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    {index + 1}
                  </td>
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    {item?.email}
                  </td>
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    {item?.name}
                  </td>
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    {item?.phone}
                  </td>
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    {item?.address}
                  </td>
                  <td className="px-[12px] py-[19px] max-w-max min-w-[200px] text-darkTextColor">
                    <div className="flex gap-3">
                      <span
                        onClick={() => {
                          navigate(`/suppliers/edit/${item?._id}`);
                        }}
                        className="text-blue-500 text-lg cursor-pointer"
                      >
                        <FiEdit />
                      </span>
                      <span
                        onClick={() => {
                          navigate(`/suppliers/single/${item?._id}`);
                        }}
                        className="text-green-500 text-xl cursor-pointer"
                      >
                        <GrFormView />
                      </span>
                      <span
                        onClick={() => {
                          deleteSupplier(item?._id);
                        }}
                        className="text-red-500 text-lg cursor-pointer"
                      >
                        <RiDeleteBinFill />
                      </span>
                    </div>
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

export default SupplierTabale;
