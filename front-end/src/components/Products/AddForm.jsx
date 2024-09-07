import React, { useState, useEffect } from "react";
import SelectInput from "../commens/SelectInput";
import { useSelector } from "react-redux";
import { axiosConfig } from "../../config/axiosConfig";
import BtnLoader from "../commens/BtnLoader";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState();
  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
    stock_level: 0,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.admin);

  const fetchSuppliers = async () => {
    try {
      const res = await axiosConfig.get(`/suppliers/all`, {
        headers: { Authorization: `$Bearer ${token}` },
      });
      setSuppliers(res?.data?.data?.response);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axiosConfig.post(
        "/products/add",
        {
          name: data.name,
          description: data.description,
          price: data.price,
          stock_level: data.stock_level,
          supplier_id: selectedSupplier?._id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setIsLoading(false);
      navigate("/products");
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.errors[0].message);
    }
  };

  return (
    <div className="flex justify-center">
      <div>
        <div className="mb-5">
          <h1 className="text-darkTextColor text-2xl font-semibold">
            Add Products
          </h1>
        </div>

        <div className="py-10 bg-darkCardColor p-5 w-full max-w-[1400px] rounded">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="mb-4 w-full">
              <label
                htmlFor="youtube"
                className="block mb-2 text-darkTextColor"
              >
                Supplier
              </label>
              <SelectInput
                data={suppliers}
                valueName={"_id"}
                displayName={"name"}
                placeholder={"Select Supplier"}
                selectedData={selectedSupplier?._id}
                setSelectedData={(val) => {
                  setSelectedSupplier(
                    suppliers?.find((item) => item._id === val)
                  );
                }}
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                Product Name
              </label>
              <input
                value={data.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter Product Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                Price
              </label>
              <input
                value={data.price}
                onChange={handleChange}
                type="number"
                name="price"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="instagram"
                className="block mb-2 text-darkTextColor"
              >
                Stock Level
              </label>
              <input
                type="number"
                value={data.stock_level}
                onChange={handleChange}
                placeholder="Enter Stock level"
                name="stock_level"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                Description
              </label>
              <textarea
                value={data.description}
                onChange={handleChange}
                type="text"
                placeholder="Enter Description"
                name="description"
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

export default AddForm;
