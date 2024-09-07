import React, { useEffect, useState } from "react";
import Pagination from "../components/commens/Pagination";
import { BiSearch } from "react-icons/bi";
import { axiosConfig } from "../config/axiosConfig";
import { useSelector } from "react-redux";
import TransactionTable from "../components/inventory/TransactionTable";

function TransactionPage() {
  const [filters, setFilters] = useState({
    limit: 10,
    skip: 0,
    name: "",
    totalTransactions: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const { token } = useSelector((state) => state.admin);

  const fetchTransation = async () => {
    try {
      setIsLoading(true);
      const res = await axiosConfig.get(
        `/report/transactions?limit=${filters.limit}&skip=${filters.skip}`,
        {
          headers: { Authorization: `$Bearer ${token}` },
        }
      );
      setIsLoading(false);
      setTransactions(res?.data?.data?.response);
      setFilters({
        ...filters,
        totalTransactions: res.data.data.totalTransactions,
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransation();
  }, [filters.skip]);

  return (
    <div className="">
      <div className="mb-6">
        <div className="flex items-ceenter gap-[10px] justify-between">
          <h3 className="text-base font-[600] text-darkTextColor">
            Transactions
          </h3>
        </div>
        <div
          className={
            "sm:mt-3 z-20 sm:z-1 bg-white sm:bg-[#f6f6f6] dbg-darkCardColor sm:rounded "
          }
        >
          {/* <PresalePageFilter
          setFilters={setFilters}
          filters={filters}
          getPresaleList={getPresaleList}
        /> */}
        </div>
      </div>

      <div>
        {isLoading ? (
          <div className="flex items-center justify-center h-[200px]">
            <div className="w-[30px] h-[30px] border-4 border-primaryColor border-r-transparent rounded-full animate-spin "></div>
          </div>
        ) : !transactions || transactions?.length < 1 ? (
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
            <TransactionTable transactions={transactions} />

            <div className="pt-3">
              <Pagination
                limit={filters.limit}
                skip={filters.skip}
                total={filters.totalTransactions}
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

export default TransactionPage;
