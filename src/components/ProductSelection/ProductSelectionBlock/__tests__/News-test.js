
import React from 'react'
import News from '../News'

describe('News', () => {
  let props, component, inputs

  const skyNews = {
    id: 'aaa',
    category: 'News',
    product_name: 'Sky News',
    isSelected: true,
  }
  const skySportsNews = {
    id: 'bbb',
    category: 'News',
    product_name: 'Sky Sports News',
    isSelected: false,
  }

  beforeEach(() => {
    props = {
      data: [skyNews, skySportsNews],
      selectProductById: jest.fn(),
    }

    component = render(<News {...props} />)
    inputs = component.findAll('input')
  })

  it('shoud render all item', () => {
    expect(component.find('.news-list').children.length).toBe(2)
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
