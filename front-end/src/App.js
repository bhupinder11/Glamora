import "./App.css";

import Body from "./components/Body";

import Login from "./components/Login";
import Home from "./components/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./components/Admin";
import CreateProduct from "./components/CreateProduct";
import Cart from "./components/Cart";
import { Provider } from 'react-redux'
import store from "./store/store";

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
          path:"/home/cart",
          element: <Cart/>
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
      <Provider store={store}>
         <RouterProvider router={appRouter}>
      {/* <Header/> */}
   
        <Body />
      </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
