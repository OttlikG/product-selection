
import React, { Component }     from 'react'
import { connect }              from 'react-redux';
import ProductSelectionBlock    from 'components/ProductSelection/ProductSelectionBlock'
import productionActions        from 'redux/actions/products'
// import classes                  from './index.scss'

class ProductSelection extends Component {

  componentDidMount () {
    const { dispatch } = this.props;
    const { productionSelection, getProducts } = productionActions

    // dispatch(productionSelection('aaa'));
    dispatch(getProducts('aaa'));
  }

  render () {
    return (
      <div>
        <ProductSelectionBlock {...this.props} />
      </div>
    )
  }
}

const productSelector = category => products => {
  return products.filter(p => p.category === category);
}

const newsSelector = productSelector('News')
const sportsSelector = productSelector('Sports')

export function mapStateToProps ({ products }) {
  return {
    sports: sportsSelector(products.products),
    news: newsSelector(products.products),
  }
}

export default connect(mapStateToProps)(ProductSelection)
