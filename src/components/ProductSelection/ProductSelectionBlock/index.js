
import React from 'react'

import Sports from './Sports'
import News from './News'
import Basket from './Basket'

// import classes from './index.scss'

export default function ProductSelectionBlock (props) {
  const { sports, news, selectedProducts, selectProductById, push } = props;

  return (
    <div>
      <div className="row">
        <div className="col-xs-4"><Sports data={sports} selectProductById={selectProductById} /></div>
        <div className="col-xs-4"><News data={news} selectProductById={selectProductById} /></div>
        <div className="col-xs-4"><Basket data={selectedProducts} selectProductById={selectProductById} push={push} /></div>
      </div>
    </div>
  )
}
