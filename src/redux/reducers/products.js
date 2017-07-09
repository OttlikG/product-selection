
import { toggle } from 'redux/utils/utils'

// CONSTANTS

export const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS'
export const SELECT_PRODUCTION = 'products/SELECT_PRODUCTION'

// INITIAL STATE

const initialState = {
  products: [],
  selected: [],
};

// SELECTORS

const productSelector = category => ({ products, selected }) => {
  return products
    .filter(p => p.category === category)
    .map(p => ({ ...p, isSelected: selected.includes(p.id) }))
}

export const newsSelector = productSelector('News')
export const sportsSelector = productSelector('Sports')

export const selectedProducts = ({ products, selected }) => {
  return selected.map(id => products.find(p => p.id === id))
}

// REDUCER

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      const { products } = action

      return {
        ...state,
        products,
      }
    }

    case SELECT_PRODUCTION: {
      const { id } = action

      return {
        ...state,
        selected: toggle(state.selected, id)
      }
    }

    default:
      return state
  }
}
