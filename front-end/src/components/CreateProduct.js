import React, { useState } from "react";
import Header from "./Header";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";

const CreateProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [productsuccess, setProductsuccess] = useState(false);

  const [inputData, setInputData] = useState({
    name: "",
    price: "",
    discount: "",
    bgcolor: "",
    panelcolor: "",
    textcolor: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      inputData,
      image: selectedFile,
    };
    // console.log(data);
    try {
      let res = await axios.post(
        "http://localhost:5000/products/createproduct",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const resdata = res.data;
      console.log(resdata.product)
      if (resdata.productcreated) {
        setProductsuccess(true);
        // setInputData({
        //   name: "",
        //   price: "",
        //   discount: "",
        //   bgcolor: "",
        //   panelcolor: "",
        //   textcolor: "",
        // });
        // setSelectedFile(null);
      }
    } catch (error) {}
  };

  return (
    <div className=" w-full fixed top-0 left-0">
      <div>
        <Header />
      </div>
      <h3 className="text-slate-900 ml-20 mt-5 text-2xl  mr-10">
        Create New Product
      </h3>
      <div className=" flex flex-col">
        <div className="container px-10 py-10 flex flex-grow">
          <div className="w-[25%] ml-10 flex h-screen flex-col items-start">
            <AdminSidebar />
          </div>
          <div className="w-[75%] bg-white -mt-8 px-8 shadow ml-28">
            <form
            // autocomplete="off"
            // // method="post"
            // enctype="multipart/form-data"
            >
              <div className="mb-6">
                {productsuccess && (
                  <h3 className="text-xl font-semibold mb-2 text-green-600">
                    Product Created Successfully.
                  </h3>
                )}

                <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Product Image
                  </label>
                  <input
                    name="image"
                    type="file"
                    className="py-2 px-4 rounded"
                    onChange={handleFileChange}
                    // value="Select File"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Product Name"
                    className="border p-2 rounded w-full"
                    onChange={handleChange}
                  />
                  <input
                    name="price"
                    type="text"
                    placeholder="Product Price"
                    className="border p-2 rounded w-full"
                    onChange={handleChange}
                  />
                  <input
                    name="discount"
                    type="text"
                    placeholder="Discount Price"
                    className="border p-2 rounded w-full"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Panel Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="bgcolor"
                    type="text"
                    placeholder="Background Color"
                    className="border p-2 rounded w-full"
                    onChange={handleChange}
                  />
                  <input
                    name="panelcolor"
                    type="text"
                    placeholder="Panel Color"
                    className="border p-2 rounded w-full"
                    onChange={handleChange}
                  />
                  <input
                    name="textcolor"
                    type="text"
                    placeholder="Text Color"
                    className="border p-2 rounded w-full"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* <input
                className="px-5 py-2 rounded mt-3 hover:bg-blue-600 hover:cursor-pointer bg-blue-500 text-white"
                // type="submit"
                value="Create New Product"
                onClick={handleSubmit}
              /> */}
              <button
                className="px-5 py-2 rounded mt-3 hover:bg-blue-600 hover:cursor-pointer bg-blue-500 text-white"
                onClick={handleSubmit}
              >
                Create New Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
