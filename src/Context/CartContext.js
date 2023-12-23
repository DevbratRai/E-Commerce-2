import React, { createContext, useReducer, useContext } from "react";

// Initial state for the cart
const initialCartState = {
  cartItems: [],
};

// Action types
const ADD_TO_CART = "ADD_TO_CART";

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );

      if (existingItemIndex !== -1) {
        // Item already exists in the cart, increase quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return { ...state, cartItems: updatedCartItems };
      } else {
        // Item doesn't exist in the cart, add it
        console.log(action.payload);

        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    default:
      return state;
  }
};

// Context creation
const CartContext = createContext();

// Cart provider component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (item) => {
    // console.log(item);
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  return (
    <CartContext.Provider value={{ cart: state.cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
