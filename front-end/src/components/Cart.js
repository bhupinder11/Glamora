import React from "react";
import Header from "./Header";

const Cart = () => {
  return (
    <div  className=" w-full fixed top-0 left-0">
        <div>
            <Header/>
        </div>
        <div className="w-3/4 mx-auto mt-2 h-screen flex justify-center ">
            <div className="">
                <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">Shopping Cart</h1>
                <button className="p-1 px-2 text-white font-semibold mt-2 bg-orange-500 rounded-md mr-5">Clear Cart</button>
                </div>
                
                <div className="w-full mt-3 border-blue-500 border-b-2 border-t-2">
                     <ul className="grid grid-cols-10 gap-2">
                        <li className="col-span-4  p-1 font-semibold text-lg">Product</li>
                        <li className="col-span-2  p-1 font-semibold text-lg mx-auto">Price</li>
                        <li className="col-span-1 p-1 font-semibold text-lg">Quantity</li>
                        <li className="col-span-2 p-1 font-semibold text-lg mx-auto">Total</li>
                        <li className="col-span-1  p-1 font-semibold text-lg">Action</li>
                     </ul>
                </div>
                <div className="w-full h-1/2 overflow-y-scroll">
                      <ul className="grid grid-cols-10 gap-2 hover:bg-gray-100 border-gray-500 border-b">
                           <div className="col-span-4 flex gap-24 p-2 font-semibold text-lg">
                            <h1>product name</h1>
                            <h1 className="w-32 h-32 bg-blue-700 mb-1">product image</h1>
                           </div>
                           <li className="col-span-2  p-2 font-semibold text-lg mx-auto">1000</li>
                           <div className="col-span-1 p-2 font-semibold text-lg flex mx-auto">
                            <h1 className="px-2 mb-24 bg-gray-200 rounded-md">-</h1>
                            <h1 className="px-2">1</h1>
                            <h1 className="px-2 mb-24 bg-gray-200 rounded-md">+</h1>
                           </div>
                           <li className="col-span-2 p-2 font-semibold text-lg mx-auto">1300</li>
                           <li className="mx-auto col-span-1  p-2 font-semibold text-lg text-red-600">del</li>
                      </ul>
                        
                      

                    
                        
                   
                </div>

                <div className="w-1/3 ml-auto">
                                  <ul className="mr-10 flex gap-5">
                                    <div className="font-semibold">
                                    <li>Subtotal:</li>
                                    <li>Taxes:</li>
                                    <li>Deliery Fee: </li>
                                    <li>Final Total: </li>
                                    </div>
                                    <div className="font-bold text-md">
                                        <h1>5000</h1>
                                        <h1>0%</h1>
                                        <h1 className="text-green-600">FREE</h1>
                                        <h1 className="text-lg">6000</h1>
                                       
                                    </div>
                                   
                                  </ul>
                                  <button className="p-1 w-1/2 mt-2 bg-orange-500 rounded-md mr-5">Proceed to Pay</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Cart;
