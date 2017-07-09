
import React                    from 'react'
import { Route, IndexRoute }    from 'react-router'

import CoreLayout         from 'layouts/CoreLayout/CoreLayout'
import ProductSelection   from 'containers/ProductSelection/index.js'
import Confirmation       from 'containers/Confirmation'

export default (store) => (
  <Route path = '/' component = { CoreLayout }>
    <IndexRoute component = { ProductSelection } />
    <Route path="/confirmation" component={ Confirmation }/>
    <Route path="*" component={ ProductSelection }/>
  </Route>
)
