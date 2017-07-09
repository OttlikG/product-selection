
import React, { Component }     from 'react'
import { connect }              from 'react-redux';
import { push }                 from 'react-router-redux'
import ProductSelectionBlock    from 'components/ProductSelection/ProductSelectionBlock'
import productionActions        from 'redux/actions/products'
import authActions              from 'redux/actions/auth'
import { newsSelector, sportsSelector, selectedProducts } from 'redux/reducers/products'
// import classes                  from './index.scss'

class ProductSelection extends Component {

  componentDidMount () {
    const { readToken } = this.props;
    readToken()
  }

  componentWillReceiveProps (nextProps) {
    const { getProducts, productionSelection, customerId } = nextProps;
    const isCustomerIdChanged = customerId !== this.props.customerId

    // if (isCustomerIdChanged) getProducts()
    if (isCustomerIdChanged) productionSelection()
  }

  render () {
    return (
      <div>
        <ProductSelectionBlock {...this.props} />
      </div>
    )
  }
}

export function mapStateToProps ({ products, auth }) {
  return {
    sports: sportsSelector(products),
    news: newsSelector(products),
    selectedProducts: selectedProducts(products),
    customerId: auth.customerId
  }
}

const actions = {
  ...productionActions,
  ...authActions,
  push,
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { customerId } = stateProps
  const { productionSelection } = dispatchProps

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    productionSelection: () => productionSelection(customerId)
  }
}

export default connect(mapStateToProps, actions, mergeProps)(ProductSelection)
