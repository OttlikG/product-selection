
import React, { Component }     from 'react'
import { connect }              from 'react-redux';
import { selectedProducts }     from 'redux/reducers/products'

class Confirmation extends Component {

  selectedProductionList (production) {
    return (
      <div key={production.id}>- { production.product_name}</div>
    )
  }

  render () {
    const { selectedProducts, customerId } = this.props

    return (
      <div className="production-selection">
        <div>Confirmation page</div>
        <div>Customer id: {customerId}</div>

        { selectedProducts.length
          ? selectedProducts.map(this.selectedProductionList)
          : 'No product selected'
        }
      </div>
    )
  }
}

export function mapStateToProps ({ products, auth }) {
  return {
    selectedProducts: selectedProducts(products),
    customerId: auth.customerId
  }
}

export default connect(mapStateToProps)(Confirmation)
