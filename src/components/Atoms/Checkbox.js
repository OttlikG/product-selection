
import React from 'react'

export default function Checkbox (props) {
  const { label, isSelected, onChange } = props

  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" checked={isSelected} onChange={onChange} /> {label}
      </label>
    </div>
  )
}
