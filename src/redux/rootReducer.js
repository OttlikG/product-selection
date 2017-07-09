
import { combineReducers }                from 'redux'
import { routerReducer as router }        from 'react-router-redux'
import products                           from 'redux/reducers/products'

export default combineReducers({
  products,
  router,
})
