// schemas/review.js

export default {
    name: 'review',
    title: 'Reviews',
    type: 'document',
    fields: [
      {
        name: 'productId',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'product' }],
      },
      {
        name: 'userId',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'comments',
        title: 'Comments',
        type: 'text',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
    ],
  };
  