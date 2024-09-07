import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAdmin } from "../../redux/slices/admin.slices";

function Headers() {
  const { email } = useSelector((state) => state.admin);
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();

  return (
    <nav className="bg-darkCardBgColor text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link to="/">Glidix</Link>
        </div>

        <div className="flex space-x-6">
          <Link
            to="/suppliers"
            className="hover:bg-gray-700 px-3 py-2 rounded transition text-darkTextColor"
          >
            Suppliers
          </Link>
          <Link
            to="/products"
            className="hover:bg-gray-700 px-3 py-2 rounded transition text-darkTextColor"
          >
            Products
          </Link>
          <Link
            to="/inventory"
            className="hover:bg-gray-700 px-3 py-2 rounded transition text-darkTextColor"
          >
            Inventory
          </Link>
          <Link
            to="/reports"
            className="hover:bg-gray-700 px-3 py-2 rounded transition text-darkTextColor"
          >
            Reports
          </Link>
          <Link
            to="/transaction"
            className="hover:bg-gray-700 px-3 py-2 rounded transition text-darkTextColor"
          >
            Transactions
          </Link>
        </div>

        <div className="relative">
          <h1
            className="flex items-center space-x-2 hover:bg-darkBorderColor px-3 py-2 rounded transition cursor-pointer"
            onClick={() => setDropDown(!dropDown)}
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/3001/3001764.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span>{email}</span>
          </h1>
          {dropDown && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg">
              <h1 className="block px-4 py-2 hover:bg-gray-100 w-full rounded-lg">
                Profile
              </h1>
              <h1
                onClick={() => {
                  dispatch(logoutAdmin());
                }}
                className="block px-4 py-2 hover:bg-gray-100 w-full rounded-lg"
              >
                Logout
              </h1>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Headers;
