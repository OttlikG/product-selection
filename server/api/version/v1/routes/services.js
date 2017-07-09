
import Promise                  from 'bluebird'
import CustomerStub             from '../../../models/customer'
import Product                  from '../../../models/product'
import { errorResponse }        from '../../../tools/utils/utils'

export default (router) => {
  router
    .get('/customerLocationService', async ctx => {
      const { customerId } = ctx.query
      const location = await CustomerStub.find({ _id: customerId })

      if (location && location.id) ctx.body = location
      else {
        errorResponse(ctx, {
          status: 404,
          title: '404 Not Found',
          detail: 'There was a problem retrieving the customer information',
          source: {
            parameter: '/customerLocationService'
          }
        })
      }
    })
    .get('/catalogueService', async ctx => {
      const { locationId } = ctx.query
      
      ctx.body = await Product.find({ location: locationId })
    })
};
