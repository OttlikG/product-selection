
import Cookies                    from 'js-cookie'
import { READ_TOKEN }             from '../../reducers/auth'
import { readToken }              from '../auth'

jest.mock('js-cookie')

describe('auth', () => {
  describe('readToken', () => {
    const _dispatch = jest.fn()

    it('should contain defaults in initialState', () => {
      readToken()(_dispatch)

      expect(_dispatch).toHaveBeenCalledTimes(1);
      expect(_dispatch).toHaveBeenCalledWith({ type: READ_TOKEN, customerId: 'mockedCustomerId' });
    });
  })
});
