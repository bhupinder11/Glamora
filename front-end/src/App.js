import "./App.css";

import Body from "./components/Body";

import Login from "./components/Login";
import Home from "./components/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./components/Admin";
import CreateProduct from "./components/CreateProduct";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children:[
        {
          path: "/",
          element: <Login/>
        },
        {
          path:"/home",
          element: <Home/>
        },
        {
          path: "/admin",
          element: <Admin/>,
        },
        {
          path:"/admin/createproduct",
          element:<CreateProduct/>
        }
      ]
    },

  ]);

  return (
    <div>
         <RouterProvider router={appRouter}>
      {/* <Header/> */}
   
        <Body />
      </RouterProvider>
    </div>
  );
}

export default App;
