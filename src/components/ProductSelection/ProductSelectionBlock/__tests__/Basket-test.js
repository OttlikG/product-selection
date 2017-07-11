
import React from 'react'
import Basket from '../Basket'

describe('Basket', () => {
  let props, component
  const chelsea = {
    category: 'Sports',
    id: 'aaa',
    location: 'LONDON',
    product_name: 'Chelsea TV',
    isSelected: true
  }

  beforeEach(() => {
    props = {
      data: [chelsea],
      selectProductById: jest.fn(),
      push: jest.fn()
    }

    component = render(<Basket {...props} />)
  })

  it('should render 1 selected product', () => {
    expect(component.find('.product-list').children.length).toBe(1)
  })

  it('should jump to confirmation page when checkout clicked', () => {
    component.find('.checkout').props.onClick()
    expect(props.push).toHaveBeenCalledTimes(1)
    expect(props.push).toHaveBeenCalledWith('confirmation')
  })
})
