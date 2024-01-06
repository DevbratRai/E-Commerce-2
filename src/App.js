import { useContext } from "react";
import ProductList from "./Components/ProductList";
import { CartProvider } from "./Context/CartContext";

import { Navigate, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from "./Root";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./Components/ProductDetails";
import Login from "./pages/Login";

import AuthContext from "./Context/auth-context";

const productsArr = [
  {
    id: "p1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

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

function ProtectedRoute() {
  const authCtx = useContext(AuthContext);
  if (!authCtx.isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return <ProductList productsArr={productsArr} />;
}

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
        element: <ProtectedRoute />,
      },
      {
        path: "/store/:productID",
        element: <ProductDetails productsArr={productsArr} />,
      },
      {
        path: "/contact",
        element: <ContactUs onAddData={addDataHandler} />,
      },
      {
        path: "/login",
        element: <Login />,
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
