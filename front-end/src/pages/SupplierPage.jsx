import React, { useEffect, useState } from "react";
import Pagination from "../components/commens/Pagination";
import { BiSearch } from "react-icons/bi";
import SupplierTabale from "../components/SupplierComponents/SupplierTabale";
import { axiosConfig } from "../config/axiosConfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SupplierPage() {
  const [filters, setFilters] = useState({
    limit: 10,
    skip: 0,
    totalSuppliers: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const { token } = useSelector((state) => state.admin);

  const navigate = useNavigate();

  const fetchSuppliers = async () => {
    try {
      setIsLoading(true);
      const res = await axiosConfig.get(
        `/suppliers/all?limit=${filters.limit}&skip=${filters.skip}&name=${searchName}`,
        {
          headers: { Authorization: `$Bearer ${token}` },
        }
      );
      setIsLoading(false);
      setSuppliers(res?.data?.data?.response);
      setFilters({
        ...filters,
        totalSuppliers: res.data.data.totalSuppliers,
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, [filters.skip, searchName]);

  return (
    <div className="">
      <div className="mb-6">
        <div className="flex items-ceenter gap-[10px] justify-between">
          <div className="">
            <h3 className="text-base font-[600] text-darkTextColor">
              Suppliers
            </h3>
            <div className="pt-2">
              <input
                type="search"
                onChange={(e) => {
                  setSearchName(e.target.value);
                }}
                placeholder="Search..."
                className="w-full h-10 border-darkCardBgColor border outline-none bg-darkCardColor rounded p-2 text-darkTextColor"
              />
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <button
              className="bg-in hover:bg-btnHoverColor"
              onClick={() => {
                navigate("/suppliers/add");
              }}
            >
              + Add Supplier
            </button>
          </div>
        </div>
        <div
          className={
            "sm:mt-3 z-20 sm:z-1 bg-white sm:bg-[#f6f6f6] dbg-darkCardColor sm:rounded "
          }
        ></div>
      </div>

      <div>
        {isLoading ? (
          <div className="flex items-center justify-center h-[200px]">
            <div className="w-[30px] h-[30px] border-4 border-primaryColor border-r-transparent rounded-full animate-spin "></div>
          </div>
        ) : !suppliers || suppliers?.length < 1 ? (
          <div className="flex flex-col items-center justify-center h-[200px]">
            <div className="text-3xl bg-[#f6f6f6] h-[50px] w-[50px] rounded flex items-center justify-center text-grayColor ">
              <BiSearch />
            </div>
            <span className="block text-xl font-[600] mt-3 text-darkTextColor">
              No Result found
            </span>
            <span className="block text-sm mt-2 text-grayColor text-darkTextColor">
              There are no Suppliers created yet!!.
            </span>
          </div>
        ) : (
          <div>
            <SupplierTabale suppliers={suppliers} setSuppliers={setSuppliers} />

            <div className="pt-3">
              <Pagination
                limit={filters.limit}
                skip={filters.skip}
                total={filters.totalSuppliers}
                incOrDecSkip={(number) =>
                  setFilters({
                    ...filters,
                    skip: number,
                  })
                }
                updateSkip={(skip) =>
                  setFilters({
                    ...filters,
                    skip: skip,
                  })
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SupplierPage;
