import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const Home = () => {
  const [productData, setProductData] = useState();
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [activePage, setActivePage] = useState(null);

  const handlepageclick = (index) => {
    setPage(index + 1);
    setActivePage(index + 1);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/shop?page=${page}&limit=6`
      );
      setProductData(response.data);
      let totalpages = response?.data?.totalPages;

      let pages = [];
      for (let i = 1; i <= totalpages; i++) {
        pages.push(i);
      }
      setTotalPages(pages);
    } catch (err) {}
  };

  // console.log(totalPages);

  useEffect(() => {
    fetchData();
  }, [page]);
  let allproducts = productData?.products;
  // console.log(allproducts);

  return (
    <div className=" w-full fixed top-0 left-0">
      <div className="">
        <Header />
      </div>

      <div className="">
        <div className="w-full h-screen flex items-start px-20 py-7 ">
          <div className="w-[25%] flex h-screen flex-col items-start">
            <div className="flex fixed items-center gap-2 font-semibold">
              <h3>sort by</h3>
              <form action="/shop">
                <select
                  className="font-bold border-[1px] px-2 py-1"
                  name="sortby"
                  id=""
                >
                  <option value="popular">Popular</option>
                  <option value="newest">Newest</option>
                </select>
              </form>
            </div>
            <div className="flex flex-col mt-20 fixed">
              <h3 className="block w-fit mb-2 text-gray-500 font-semibold hover:text-black hover:cursor-pointer">
                New Collection
              </h3>
              <h3 className="block w-fit mb-2 text-gray-500 font-semibold hover:cursor-pointer hover:text-black">
                All Products
              </h3>
              <h3 className="block w-fit mb-2 text-gray-500 font-semibold hover:text-black hover:cursor-pointer">
                Discounted Products
              </h3>
            </div>
            <div className="mt-32">
              <h3 className="block mt-32 w-fit mb-2 text-gray-500 font-semibold font-sm">
                Filter by :
              </h3>
              <h3 className="block w-fit mb-2 text-gray-500 font-semibold hover:text-black hover:cursor-pointer">
                Availability
              </h3>
              <h3 className="block w-fit mb-2 text-gray-500 font-semibold hover:text-black hover:cursor-pointer">
                Discount
              </h3>
            </div>
          </div>
          <div className="w-[75%] flex flex-row flex-wrap gap-10 max-h-[500px] scrollbar-hide overflow-y-auto">
            {allproducts?.map((product) => {
              const base64String = product?.image?.data?.data
                ? btoa(
                    String.fromCharCode(
                      ...new Uint8Array(product.image.data.data)
                    )
                  )
                : "";
              return (
                <div className="mr-5 ">
                  <div className="w-60 h-72  hover:shadow-xl hover:cursor-pointer hover:scale-105 transform transition duration-300">
                    <div
                      className="w-full h-52 flex items-center justify-center rounded-t-lg"
                      style={{ backgroundColor: product.bgcolor || "blue" }}
                    >
                      <img
                        className="h-[12rem] drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)]"
                        // src={`data:image/png;base64,${base64String}`}
                        src={`data:image/png;base64,${base64String}`}
                        alt="Product Image"
                      />
                    </div>
                    <div
                      className="flex justify-between bg-gray-700 bg-[<%= product.panelcolor %>] items-center px-4 py-4 text-white rounded-b-lg"
                      style={{ backgroundColor: product.panelcolor || "blue" }}
                    >
                      <div>
                        <h3
                          style={{ color: product.textcolor || "blue" }}
                          className="text-lg font-semibold"
                        >
                          {product.name}
                        </h3>
                        <h4
                          className="text-lg font-semibold"
                          style={{ color: product.textcolor || "blue" }}
                        >
                          ₹ {product.price}
                        </h4>
                      </div>
                      <h3
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-white"
                        href=""
                      >
                        <i className="text-2xl -mt-1 text-black">+</i>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="justify-center mx-auto flex gap-10 p-5">
              {totalPages?.map((page, index) => (
                <button
                  className={`px-4 py-2 border rounded ${
                    activePage === page
                      ? "transform scale-125 bg-blue-500 text-white"
                      : "bg-gray-300"
                  } transition-transform duration-100`}
                  key={index}
                  onClick={() => handlepageclick(index)}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
