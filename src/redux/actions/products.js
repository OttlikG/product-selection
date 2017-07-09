
import { LOAD_PRODUCTS }                        from 'redux/reducers/products'
import * as http                                from '../utils/fetchHelper.js'

const Actions = {
  productionSelection: customerId => {
    return (dispatch, getState) => {
      // TODO: Error handling
      http.xhrGet(`/api/v1/customerLocationService?customerId=${customerId}`)
        .then(location => http.xhrGet(`/api/v1/catalogueService?locationId=${location.id}`))
        .then(products => dispatch({ type: LOAD_PRODUCTS, products }))
    };
  },
  getProducts: () => {
    return (dispatch, getState) => {
      // TODO: Error handling
      http.xhrGet(`/api/v1/products`)
        .then(products => dispatch({ type: LOAD_PRODUCTS, products }))
    };
  }
}

export default Actions
