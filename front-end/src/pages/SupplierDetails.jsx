import React, { useEffect, useState } from "react";
import { axiosConfig } from "../config/axiosConfig";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageLoader from "../components/commens/PageLoader";

function SupplierDetails() {
  const { id } = useParams();

  const { token } = useSelector((state) => state.admin);

  const [supplier, setSupplier] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchSupplier = async () => {
    try {
      setIsLoading(true);
      const res = await axiosConfig.get(`/suppliers/single/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSupplier(res.data.data.response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    fetchSupplier();
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div className=" w-full bg-darkCardColor shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-darkGrayColor mb-4 ">
          Supplier Details
        </h2>
        {!isLoading ? (
          <div className="space-y-2 py-3 grid md:grid-cols-2">
            <div className="flex items-center">
              <span className="w-24 font-medium text-darkTextColor">Name:</span>
              <span className=" text-darkTextColor">{supplier?.name}</span>
            </div>

            <div className="flex items-center">
              <span className="w-24 font-medium text-darkTextColor">
                Phone:
              </span>
              <span className="text-darkTextColor">{supplier?.phone}</span>
            </div>

            <div className="flex items-center">
              <span className="w-24 font-medium text-darkTextColor">
                Address:
              </span>
              <span className="text-darkTextColor">{supplier?.address}</span>
            </div>

            <div className="flex items-center">
              <span className="w-24 font-medium text-darkTextColor">
                Email:
              </span>
              <span className="text-darkTextColor">{supplier?.email}</span>
            </div>

            <div className="flex items-center">
              <span className="w-24 font-medium text-darkTextColor">
                Country:
              </span>
              <span className="text-darkTextColor">{supplier?.country}</span>
            </div>

            <div className="flex items-center">
              <span className="w-24 font-medium text-darkTextColor">
                State:
              </span>
              <span className="text-darkTextColor">{supplier?.state}</span>
            </div>

            <div className="flex items-center">
              <span className="w-24 font-medium text-darkTextColor">City:</span>
              <span className="text-darkTextColor">{supplier?.city}</span>
            </div>

            <div className="flex items-center">
              <span className="w-24 font-medium text-darkTextColor">
                Created:
              </span>
              <span className="text-darkTextColor">
                {supplier?.createdAt?.slice(0, 10)}
              </span>
            </div>

            <div className="flex items-center">
              <span className="w-24 font-medium text-darkTextColor">
                Updated:
              </span>
              <span className="text-darkTextColor">2024-09-07</span>
            </div>
          </div>
        ) : (
          <div>
            <PageLoader />
          </div>
        )}
      </div>
    </div>
  );
}

export default SupplierDetails;
