
import React from 'react'
import Checkbox from 'components/Atoms/Checkbox'

describe('Checkbox', () => {

  let props
  let component

  beforeEach(() => {
    props = {
      label: 'test label',
      isSelected: true,
      onChange: jest.fn(),
    }

    component = render(<Checkbox {...props} />)
  })

  it('should set props on input', () => {
    const input = component.find('input')

    expect(input.props.checked).toBe(true)
    expect(input.props.onChange).toBeDefined()
  })

  it('should load label text', () => {
    const label = component.text('label')
    expect(label).toBe(' test label')
  })

  it('should call on change', () => {
    const input = component.find('input')
    input.props.onChange()
    expect(props.onChange).toHaveBeenCalled()
  })
})
