
import React from 'react'

import Sports from './Sports'
import News from './News'
import Basket from './Basket'

// import classes from './index.scss'

export default function ProductSelectionBlock (props) {
  const { sports, news, selected = [] } = props;

  return (
    <div>
      <div className="row">
        <div className="col-xs-4"><Sports data={sports} /></div>
        <div className="col-xs-4"><News data={news} /></div>
        <div className="col-xs-4"><Basket data={selected} /></div>
      </div>
    </div>
  )
}
