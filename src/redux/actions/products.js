
import {
  LOAD_PRODUCTS, SELECT_PRODUCTION, LOAD_PRODUCTS_FAILURE
}                                               from 'redux/reducers/products'
import * as http                                from '../utils/fetchHelper.js'

// ASYNC

function productionSelection (customerId) {
  return (dispatch, getState) => {
    http.xhrGet(`/api/v1/customerLocationService?customerId=${customerId}`)
      .then(location => http.xhrGet(`/api/v1/catalogueService?locationId=${location.id}`))
      .then(products => dispatch({ type: LOAD_PRODUCTS, products }))
      .catch(error =>  dispatch({ type: LOAD_PRODUCTS_FAILURE, error }))
  };
}

function getProducts () {
  return (dispatch, getState) => {
    http.xhrGet(`/api/v1/products`)
      .then(products => dispatch({ type: LOAD_PRODUCTS, products }))
      .catch(error =>  dispatch({ type: LOAD_PRODUCTS_FAILURE, error }))
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
