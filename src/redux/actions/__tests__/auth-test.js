
import Cookies                    from 'js-cookie'
import { READ_TOKEN }             from '../../reducers/auth'

import { readToken }              from '../auth'
// const fs = jest.genMockFromModule('Cookies');

describe('auth', () => {
  describe('readToken', () => {
    const _dispatch = jest.fn()
    it('should contain defaults in initialState', () => {
      // readToken()(_dispatch)

      console.log('calls', _dispatch.mock.calls)

      // expect(a).toBe('test');
    });
  })
});
