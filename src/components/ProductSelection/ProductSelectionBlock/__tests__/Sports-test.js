
import React from 'react'
import Sports from '../Sports'

describe('Sports', () => {
  let props, component, inputs

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
      data: [chelsea, arsenal],
      selectProductById: jest.fn(),
    }

    component = render(<Sports {...props} />)
    inputs = component.findAll('input')
  })

  it('shoud render all item', () => {
    expect(component.find('.sports-list').children.length).toBe(2)
  })

  it('should set checked state if isSelected true', () => {
    expect(inputs[0].props.checked).toBe(true)
    expect(inputs[1].props.checked).toBe(false)
  })

  it('should call action on change', () => {
    inputs[0].props.onChange()
    expect(props.selectProductById).toHaveBeenCalledTimes(1)
    expect(props.selectProductById).toHaveBeenCalledWith('aaa')
  })
})
