import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { axiosConfig } from "../../config/axiosConfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductsTable({ products, setProducts }) {
  const { token } = useSelector((state) => state.admin);

  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    try {
      const filterdProduct = products.filter((item) => item?._id !== id);
      setProducts(filterdProduct);

      const res = await axiosConfig.delete(`/products/delete/${id}`, {
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
              <th className="p-[12px] font-[600] text-darkTextColor">
                Product Name
              </th>
              <th className="p-[12px] font-[600] text-darkTextColor">
                Supplier Name
              </th>
              <th className="p-[12px] font-[600] text-darkTextColor">Price</th>
              <th className="p-[12px] font-[600] text-darkTextColor">
                Stocke Level
              </th>
              <th className="p-[12px] font-[600] text-darkTextColor">
                Description
              </th>
              <th className="p-[12px] font-[600] text-darkTextColor">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item, index) => {
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
                    {item?.supplier_id?.name}
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
                    <div className="flex gap-3">
                      <span
                        onClick={() => {
                          navigate(`/products/edit/${item?._id}`);
                        }}
                        className="text-blue-500 text-lg cursor-pointer"
                      >
                        <FiEdit />
                      </span>

                      <span
                        onClick={() => {
                          deleteProduct(item?._id);
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

export default ProductsTable;
