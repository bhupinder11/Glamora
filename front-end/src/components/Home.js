import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const Home = () => {
  const [productData, setProductData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/shop");
      setProductData(response.data);
      // setLoading(false);
    } catch (err) {
      // setError(err);
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  let allproducts = productData?.products;
  console.log(allproducts);

  return (
    <div className=" w-full fixed top-0 left-0">
      <div className="">
        <Header />
      </div>

      <div>
        <div className="w-full h-screen flex items-start px-20 py-7 ">
          <div className="w-[25%] flex h-screen flex-col items-start">
            <div className="flex items-center gap-2 font-semibold">
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
            <div className="flex flex-col mt-20">
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
              <h3 className="block w-fit mb-2 text-gray-500 font-semibold font-sm">
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
          <div className="w-[75%] flex flex-row flex-wrap gap-10 h-screen">
            {allproducts?.map((product) => {
               const base64String = product?.image?.data?.data 
               ? btoa(String.fromCharCode(...new Uint8Array(product.image.data.data)))
               : '';
              return  (
                <div className="mr-5 ">
                  <div className="w-60 h-72  hover:shadow-xl hover:cursor-pointer hover:scale-105 transform transition duration-300">
                    <div className= "w-full h-52 flex items-center justify-center rounded-t-lg" style={{ backgroundColor: product.bgcolor || 'blue' }}>
                      <img
                        className="h-[12rem]"
                        // src={`data:image/png;base64,${base64String}`}
                        src={`data:image/png;base64,${base64String}`}
                        alt="Product Image"
                      />
                    </div>
                    <div className="flex justify-between bg-gray-700 bg-[<%= product.panelcolor %>] items-center px-4 py-4 text-white rounded-b-lg" style={{ backgroundColor: product.panelcolor || 'blue' }}>
                      <div>
                        <h3 style={{ color: product.textcolor || 'blue' }} className="text-lg font-semibold">{product.name}</h3>
                        <h4 className="text-lg font-semibold" style={{ color: product.textcolor || 'blue' }}>₹ {product.price}</h4>
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
              )
                } )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


