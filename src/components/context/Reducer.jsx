// Reducer.jsx

// cartReducer definition
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existItem = state.cart.find((item) => item.id === action.payload.id);
      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      }

      case "CHANGE_CART_QTY":
  return {
    ...state,
    cart: state.cart.map((c) =>
      c.id === action.payload.id ? { ...c, qty: action.payload.qty } : c
    ),
  };


    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((c) =>
          c.id === action.payload.id ? { ...c, qty: action.payload.qty } : c
        ),
      };

    case "ADD_TO_WISHLIST":
      const existInWishlist = state.wishlist.find((item) => item.id === action.payload.id);
      if (!existInWishlist) {
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      }
      return state;

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};

// productReducer definition
export const productReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      return { ...state, sort: action.payload };
    case 'FILTER_BY_STOCK':
      return { ...state, byStock: !state.byStock };
    case 'FILTER_BY_DELIVERY':
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case 'FILTER_BY_RATING':
      return { ...state, byRating: action.payload };
    case 'FILTER_BY_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'CLEAR_FILTERS':
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };
    default:
      return state;
  }
};
