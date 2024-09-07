import React, { useState, useEffect } from "react";
import BtnLoader from "../components/commens/BtnLoader";
import { useSelector } from "react-redux";
import { axiosConfig } from "../config/axiosConfig";
import SelectInput from "../components/commens/SelectInput";
import { useNavigate } from "react-router-dom";

function InventoryPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { token } = useSelector((state) => state.admin);
  const [selectedProduct, setSelectedProduct] = useState();
  const [data, setData] = useState({
    date: "",
    transaction_type: "",
    quantity: 0,
  });

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axiosConfig.get(`/products/all`, {
        headers: { Authorization: `$Bearer ${token}` },
      });

      setProducts(res?.data?.data?.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await axiosConfig.post(
        `/inventory/update`,
        {
          date: data.date,
          quantity: data.quantity,
          transaction_type: data.transaction_type,
          product_id: selectedProduct?._id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/transaction");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center">
      <div>
        <div className="mb-5">
          <h1 className="text-darkTextColor text-2xl font-semibold">
            Add Inventory
          </h1>
        </div>

        <div className="py-10 bg-darkCardColor p-5 w-full max-w-[1400px] rounded">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="mb-4 w-full">
              <label
                htmlFor="youtube"
                className="block mb-2 text-darkTextColor"
              >
                Product
              </label>
              <SelectInput
                data={products}
                valueName={"_id"}
                displayName={"name"}
                placeholder={"Select Product"}
                selectedData={selectedProduct?._id}
                setSelectedData={(val) => {
                  setSelectedProduct(
                    products?.find((item) => item._id === val)
                  );
                }}
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                Date
              </label>
              <input
                onChange={handleChange}
                type="date"
                name="date"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="businessType"
                className="block mb-2 text-darkTextColor"
              >
                Transaction Type
              </label>
              <select
                name="transaction_type"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor"
                onChange={handleChange}
              >
                <option value="" hidden>
                  Select Options
                </option>
                <option value="sale">Sale</option>
                <option value="purchase">Purchase</option>
              </select>
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="instagram"
                className="block mb-2 text-darkTextColor"
              >
                Quantity
              </label>
              <input
                type="number"
                onChange={handleChange}
                placeholder="Enter Quantity"
                name="quantity"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>
          </div>

          <div className="mt-5 mb-2 flex justify-end">
            {error && (
              <span className="text-red-500 block text-sm font-medium">
                {error}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              className="w-40 bg-primaryColor text-white p-2 rounded-md hover:bg-btnHoverColor disabled:cursor-not-allowed disabled:opacity-80"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? <BtnLoader /> : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryPage;
