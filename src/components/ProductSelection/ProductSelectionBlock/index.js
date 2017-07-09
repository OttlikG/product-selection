
import React from 'react'

import Sports from './Sports'
import News from './News'
import Basket from './Basket'

// import classes from './index.scss'

export default function ProductSelectionBlock () {
  return (
    <div>
      <div className="row">
        <div className="col-xs-4"><Sports /></div>
        <div className="col-xs-4"><News /></div>
        <div className="col-xs-4"><Basket /></div>
      </div>
    </div>
  )
}
