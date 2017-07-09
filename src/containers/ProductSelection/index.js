
import React, { Component }     from 'react'
import { connect }              from 'react-redux';
import ProductSelectionBlock    from 'components/ProductSelection/ProductSelectionBlock'
import productionActions        from 'redux/actions/products'
import { newsSelector, sportsSelector, selectedProducts } from 'redux/reducers/products'
// import classes                  from './index.scss'

class ProductSelection extends Component {

  componentDidMount () {
    const { productionSelection, getProducts } = this.props;

    // productionSelection('aaa')
    getProducts('aaa')
  }

  render () {
    return (
      <div>
        <ProductSelectionBlock {...this.props} />
      </div>
    )
  }
}

export function mapStateToProps ({ products }) {
  return {
    sports: sportsSelector(products),
    news: newsSelector(products),
    selectedProducts: selectedProducts(products)
  }
}

export default connect(mapStateToProps, {...productionActions})(ProductSelection)
