// schemas/user.js

export default {
    name: 'user',
    title: 'Users',
    type: 'document',
    fields: [
      {
        name: 'username',
        title: 'Username',
        type: 'string',
      },
      {
        name: 'authprovider',
        title: 'Auth Provider',
        type: 'string',
      },
      {
        name: 'wishlist',
        title: 'Wishlist',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'string',
      },
      {
        name: 'order',
        title: 'Orders',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'order' }] }],
      },
      {
        name: 'encryptedPassword',
        title: 'Encrypted Password',
        type: 'string',
        // Only shown when using email/password authprovider
      },
    ],
  };
  