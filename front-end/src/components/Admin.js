import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const Admin = () => {
  const navigate = useNavigate();

  // const handleCreateProduct = () => {
  //   navigate("createproduct");
  // };

  return (
    <div className=" w-full fixed top-0 left-0">
      <div>
        <Header />
      </div>
      <h3 className="text-slate-900 ml-20 mt-5 text-2xl  mr-10">Admin Panel</h3>
      <div className="w-full h-screen flex items-start px-20 py-10">
        <div className="w-[25%] flex h-screen flex-col items-start">
          <AdminSidebar/>
        </div>
        <div className="w-[75%] flex flex-col gap-5">
          <h3 className="text-red-500" href="">
            Delete all
          </h3>
          <div className="flex items-start gap-5">
            <div className="w-60 bg-red-500">
              <div className="w-full h-52 bg-yellow-500"></div>
              <div className="flex justify-between items-center px-4 py-4">
                <div>
                  <h3>Clinge Bag</h3>
                  <h4>₹ 1200</h4>
                </div>
                <h3
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white"
                  href=""
                >
                  <i className="ri-add-line"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
