
import React            from 'react'
import Checkbox         from 'components/Atoms/Checkbox'

export default function News (props) {
  const { data, selectProductById } = props

  return (
    <div className="block news-block">
      <div>News</div>

      { data.map(news =>
        <Checkbox
          key={news.id}
          isSelected={news.isSelected}
          label={news.product_name}
          onChange={() => selectProductById(news.id)}
        />)
      }
    </div>
  )
}
