import React from 'react';
import Layout from '../layouts/layout';
import SingleProductDetail from '../Components/SingleProductDetail';

import CartDisplay from '../layouts/CartDisplay';


const routes = [
  {
    path: '/',
    element: <Layout/>
  },
  {
    path: '/product/:productId',
    element: <SingleProductDetail />
  },
  
  {
    path: '/cart-display/allcart',
    element: <CartDisplay />
  }
];

export default routes;
