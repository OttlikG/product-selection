
import React from 'react'

export default function Basket ({ data, push }) {
  function selectedProductionList (production) {
    return (
      <div key={production.id}>- { production.product_name}</div>
    )
  }

  return (
    <div className="block basket-block">
      <div>Basket</div>

      <div className="product-list">
        { data.map(selectedProductionList) }
      </div>

      <button className='checkout' onClick={() => push('confirmation')}>Checkout</button>
    </div>
  )
}
