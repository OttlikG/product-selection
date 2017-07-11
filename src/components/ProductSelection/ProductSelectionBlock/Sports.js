
import React            from 'react'
import Checkbox         from 'components/Atoms/Checkbox'

export default function Sports (props) {
  const { data, selectProductById } = props

  return (
    <div className="block sports-block">
      <div>Sports</div>

      { data.map(sport =>
        <Checkbox
          key={sport.id}
          isSelected={sport.isSelected}
          label={sport.product_name}
          onChange={() => selectProductById(sport.id)}
        />)
      }
    </div>
  )
}
