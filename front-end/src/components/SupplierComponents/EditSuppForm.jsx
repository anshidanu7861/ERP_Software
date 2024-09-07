import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosConfig } from "../../config/axiosConfig";
import BtnLoader from "../commens/BtnLoader";

function EditSuppForm() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    country: "",
    state: "",
    city: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { token } = useSelector((state) => state.admin);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const [supplier, setSupplier] = useState({});

  const getSingleDetails = async () => {
    try {
      const res = await axiosConfig.get(`/suppliers/single/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSupplier(res?.data?.data?.response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axiosConfig.put(
        `/suppliers/update/${id}`,
        data,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/suppliers");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setError(error.response.data.errors[0].message);
    }
  };

  useEffect(() => {
    getSingleDetails();
  }, []);
  useEffect(() => {
    setData({
      name: supplier.name,
      phone: supplier.phone,
      address: supplier.address,
      email: supplier.email,
      country: supplier.country,
      state: supplier.state,
      city: supplier.city,
    });
  }, [supplier]);

  return (
    <div className="flex justify-center">
      <div>
        <div className="mb-5">
          <h1 className="text-darkTextColor text-2xl font-semibold">
            Add Suppliers
          </h1>
        </div>

        <div className="py-10 bg-darkCardColor p-5 w-full max-w-[1400px] rounded">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                Name
              </label>
              <input
                value={data.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                Phone Number
              </label>
              <input
                value={data.phone}
                onChange={handleChange}
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                Email Address
              </label>
              <input
                value={data.email}
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="Enter Email Address"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                Country
              </label>
              <input
                value={data.country}
                onChange={handleChange}
                type="text"
                name="country"
                placeholder="Enter Country"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                State
              </label>
              <input
                value={data.state}
                onChange={handleChange}
                type="text"
                name="state"
                placeholder="Enter State"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                City
              </label>
              <input
                value={data.city}
                onChange={handleChange}
                type="text"
                name="city"
                placeholder="Enter City"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="youtube2"
                className="block mb-2 text-darkTextColor"
              >
                Full Address
              </label>
              <textarea
                value={data.address}
                onChange={handleChange}
                type="text"
                placeholder="Enter Address"
                name="address"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-darkGrayColor placeholder:text-black"
              />
            </div>
          </div>

          {/* Error Message */}
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

export default EditSuppForm;
