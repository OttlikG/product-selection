
import { LOAD_PRODUCTS, SELECT_PRODUCTION }     from 'redux/reducers/products'
import * as http                                from '../utils/fetchHelper.js'

// ASYNC

function productionSelection (customerId) {
  return (dispatch, getState) => {
    // TODO: Error handling
    http.xhrGet(`/api/v1/customerLocationService?customerId=${customerId}`)
      .then(location => http.xhrGet(`/api/v1/catalogueService?locationId=${location.id}`))
      .then(products => dispatch({ type: LOAD_PRODUCTS, products }))
  };
}

function getProducts () {
  return (dispatch, getState) => {
    // TODO: Error handling
    http.xhrGet(`/api/v1/products`)
      .then(products => dispatch({ type: LOAD_PRODUCTS, products }))
  };
}

// SIMPLE

function selectProductById (id) {
  return {
    type: SELECT_PRODUCTION,
    id,
  }
}

export default {
  productionSelection,
  getProducts,
  selectProductById,
}
