
import Promise                  from 'bluebird'
import Product                  from '../../../models/product'

export default (router) => {
  router
    .get('/products', async ctx => {
      ctx.body = await Product.find()
    })
};
