import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import axios from "axios";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const [notAdmin, setNotAdmin] = useState(false);

  const handleSignout = () => {
    document.cookie = "token=; path=/;";
    navigate("/");
  };

  const handleHome = () => {
    navigate("/home");
  };

  const handleAdmin = async (e) => {
    e.preventDefault();
    // navigate("/admin");
    const token = Cookies.get("token");
    // console.log(token)

    try {
      let res = await axios.post("http://localhost:5000/owners/admin", {
        token,
      });

      const data = res.data;
      // console.log(data);
      if (data.isAdmin) {
        navigate("/admin");
      }
      if (data.notAdmin) {
        setNotAdmin(true);
      }

      if (data.notLoggedIn) {
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <div className="flex justify-between border-b border-slate-500 bg-slate-50 px-5 py-5">
      <h3 className=" ml-16 tracking-tight text-4xl text-blue-400 font-semibold font-sans ">
        Glamora.
      </h3>
      <div className="flex justify-between">
        <h3
          onClick={handleHome}
          className="text-slate-900 text-md font-medium mt-4 mr-12 hover:cursor-pointer"
        >
          Home
        </h3>
        <h3 className="text-slate-900 flex text-md font-medium mt-4 mr-12 hover:cursor-pointer">
          Cart <CiShoppingCart className=" text-2xl" />
        </h3>

        {notAdmin ? (
          <h3 className="text-red-600 p-1 px-2 mt-3 mr-2">Only for Admin</h3>
        ) : (
          <h3
            className="text-slate-900 mt-3  p-1 text-md px-2 rounded-md font-semibold mr-12 hover:cursor-pointer "
            onClick={handleAdmin}
          >
            Admin
          </h3>
        )}

        <h3
          className="text-slate-900 text-md font-medium mt-4 mr-12 hover:cursor-pointer"
          onClick={handleSignout}
        >
          Sign Out
        </h3>
      </div>
    </div>
  );
};

export default Header;
