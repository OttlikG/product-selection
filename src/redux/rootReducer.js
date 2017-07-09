
import { combineReducers }                from 'redux'
import { routerReducer as router }        from 'react-router-redux'
import products                           from 'redux/reducers/products'
import auth                               from 'redux/reducers/auth'

export default combineReducers({
  products,
  router,
  auth,
})
