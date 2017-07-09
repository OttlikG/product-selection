
import Cookies                    from 'js-cookie'
import { READ_TOKEN }             from 'redux/reducers/auth'
import * as http                  from '../utils/fetchHelper.js'

function readToken (customerId) {
  return (dispatch, getState) => {
    const customerId = Cookies.get('customerId')

    return dispatch({ type: READ_TOKEN, customerId })
  };
}

export default {
  readToken,
}
