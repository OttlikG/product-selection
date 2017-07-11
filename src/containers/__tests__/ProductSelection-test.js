
import React from 'react'
import { ProductSelection } from '../ProductSelection'

jest.mock('components/ProductSelection/ProductSelectionBlock', () => 'ProductSelectionBlock')

describe('ProductSelection', () => {
  let props, component

  beforeEach(() => {
    props = {
      customerId: 'aaa',
      readToken: jest.fn(),
      productionSelection: jest.fn(),
    }

    component = render(<ProductSelection {...props} />)
  })

  describe('componentDidMount', () => {
    it('should call readToken', () => {
      expect(props.readToken).toHaveBeenCalledTimes(1)
    })
  })

  describe('componentWillReceiveProps', () => {
    it('should call productionSelection if cutomerId changed', () => {
      const instance = component.getInstance()
      props.customerId = 'bbb'

      instance.componentWillReceiveProps(props)
      expect(props.productionSelection).toHaveBeenCalledTimes(1)
    })
  })
})
