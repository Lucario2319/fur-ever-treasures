// schemas/order.js

export default {
    name: 'order',
    title: 'Orders',
    type: 'document',
    fields: [
      {
        name: 'totalCost',
        title: 'Total Cost',
        type: 'number',
      },
      {
        name: 'shippingDetails',
        title: 'Shipping Details',
        type: 'string',
      },
      {
        name: 'orderStatus',
        title: 'Order Status',
        type: 'string',
      },
      {
        name: 'userId',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      {
        name: 'productIds',
        title: 'Product IDs',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
    ],
  };
  