
// CONSTANTS

export const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS';

const initialState = {
  products: []
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      const { products } = action

      return {
        ...state,
        products,
      }
    }

    default:
      return state
  }
}
