// schemas/product.js

export default {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 100,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        fields: [
          {
            name: 'alt',
            title: 'Alt',
            type: 'string'
          }
        ]
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'review' }] }],
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
      },
    ],
  };
  