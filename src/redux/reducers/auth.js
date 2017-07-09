
// CONSTANTS

export const READ_TOKEN = 'products/READ_TOKEN'

// INITIAL STATE

const initialState = {
  customerId: null,
};

// REDUCER

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case READ_TOKEN: {
      const { customerId } = action

      return {
        ...state,
        customerId,
      }
    }

    default:
      return state
  }
}
