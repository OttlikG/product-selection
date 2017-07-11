
import React from 'react'
import ProductSelectionBox from '../index'

jest.mock('../Basket', () => 'Basket')
jest.mock('../News', () => 'News')
jest.mock('../Sports', () => 'Sports')

describe('ProductSelectionBox', () => {
  let props, component
  const chelsea = {
    category: 'Sports',
    id: 'aaa',
    location: 'LONDON',
    product_name: 'Chelsea TV',
    isSelected: true
  }
  const arsenal = {
    category: 'Sports',
    id: 'bbb',
    location: 'LONDON',
    product_name: 'Arsenal TV',
    isSelected: false
  }

  beforeEach(() => {
    props = {
      sports: [chelsea, arsenal],
      news: [],
      selectedProducts: [chelsea],
      selectProductById: jest.fn(),
      push: jest.fn()
    }

    component = render(<ProductSelectionBox {...props} />)
  })

  it('should render 3 block component', () => {
    expect(component.find('.row').children.length).toBe(3)
  })
})
