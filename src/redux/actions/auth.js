
import Cookies                    from 'js-cookie'
import { READ_TOKEN }             from 'redux/reducers/auth'

export function readToken () {
  return dispatch => {
    const customerId = Cookies.get('customerId')
    console.log('customerId', customerId)

    return dispatch({ type: READ_TOKEN, customerId })
  };
}

export default {
  readToken,
}
