import ProductList from "./Components/ProductList";
import { CartProvider } from "./Context/CartContext";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from "./Root";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

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
      },
      {
        path: "/contact",
        element: <ContactUs onAddData={onAddData} />,
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
