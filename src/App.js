import ProductList from "./Components/ProductList";
import { CartProvider } from "./Context/CartContext";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from "./Root";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./Components/ProductDetails";

const addDataHandler = async (data) => {
  const response = await fetch(
    "https://e-commerce-2-1227f-default-rtdb.firebaseio.com/data.json",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const resData = await response.json();
  console.log(resData);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/store",
        element: <ProductList />,
        children: [
          {
            path: "/store/product-detail/:productId",
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactUs onAddData={addDataHandler} />,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
