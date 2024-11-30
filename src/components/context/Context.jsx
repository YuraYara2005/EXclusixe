import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducer";

// Create Context
const Cart = createContext();

const Context = ({ children }) => {
  // Generate Dummy Products
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  // Initialize Cart State (Products, Cart, Wishlist)
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
    wishlist: [], // Initialize wishlist
  });

  // Initialize Product Filters
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

// Custom Hook to Access Cart State
export const CartState = () => {
  return useContext(Cart);
};

export default Context;


