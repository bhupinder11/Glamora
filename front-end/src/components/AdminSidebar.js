import React from 'react'
import { useNavigate } from 'react-router-dom'


const AdminSidebar = () => {

    const navigate = useNavigate()
    
  const handleCreateProduct = () => {
    navigate("createproduct");
  };
  return (
    <div>
        <div className="">
          <div className="flex flex-col">
            <h3 className="block w-fit mb-2 text-gray-500 font-semibold hover:text-black hover:cursor-pointer">
              All Products
            </h3>
            <h3
              className="block w-fit mb-2 text-gray-500 font-semibold hover:text-black hover:cursor-pointer"
              onClick={handleCreateProduct}
            >
              Create new product
            </h3>
          </div>
        </div>
    </div>
  )
}

export default AdminSidebar