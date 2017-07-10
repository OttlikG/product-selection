
import deepFreeze from 'deep-freeze'
import reducer, {
  initialState,
  READ_TOKEN
} from '../auth'

describe('auth', () => {
  let state

  beforeEach(() => {
    state = deepFreeze(initialState)
  })

  it('should return state when no action provided', () => {
    const nextState = reducer(state, {})
    expect(state).toEqual(nextState)
  })

  describe('readToken', () => {
    it('should set content of cookie', () => {
      const nextState = reducer(state, { type: READ_TOKEN, customerId: 'aaa' })
      expect(nextState.customerId).toBe('aaa')
    })
  })
})
