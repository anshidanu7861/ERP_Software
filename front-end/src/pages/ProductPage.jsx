import React, { useEffect, useState } from "react";
import Pagination from "../components/commens/Pagination";
import { BiSearch } from "react-icons/bi";
import { axiosConfig } from "../config/axiosConfig";
import { useSelector } from "react-redux";
import ProductsTable from "../components/Products/ProductsTable";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const [filters, setFilters] = useState({
    limit: 10,
    skip: 0,
    totalProducts: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { token } = useSelector((state) => state.admin);
  const [searchName, setSearchName] = useState("");

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await axiosConfig.get(
        `/products/all?limit=${filters.limit}&skip=${filters.skip}&name=${searchName}`,
        {
          headers: { Authorization: `$Bearer ${token}` },
        }
      );
      setIsLoading(false);
      setProducts(res?.data?.data?.response);
      setFilters({
        ...filters,
        totalProducts: res.data.data.totalProducts,
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters.skip, searchName]);

  return (
    <div className="">
      <div className="mb-6">
        <div className="flex items-ceenter gap-[10px] justify-between">
          <div>
            <h3 className="text-base font-[600] text-darkTextColor">
              Products
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
                navigate("/products/add");
              }}
            >
              + Add Product
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
        ) : !products || products?.length < 1 ? (
          <div className="flex flex-col items-center justify-center h-[200px]">
            <div className="text-3xl bg-[#f6f6f6] h-[50px] w-[50px] rounded flex items-center justify-center text-grayColor ">
              <BiSearch />
            </div>
            <span className="block text-xl font-[600] mt-3 text-darkTextColor">
              No Result found
            </span>
            <span className="block text-sm mt-2 text-grayColor text-darkTextColor">
              There are no Products created yet!!.
            </span>
          </div>
        ) : (
          <div>
            <ProductsTable products={products} setProducts={setProducts} />

            <div className="pt-3">
              <Pagination
                limit={filters.limit}
                skip={filters.skip}
                total={filters.totalProducts}
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

export default ProductPage;
