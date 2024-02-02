
import Divider from '@mui/material/Divider';

import AppToolbar from "../Components/AppToolBar"

import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BestSellingProducts from '../Components/BestSellingProducts';
import CartComponent from '../Components/CartComponent';



import '../styles/Grid.css'

import Hidden from '@mui/material/Hidden';
import SliderComponent from '../Components/Slider';
 import BestSellingCategoery from '../Components/BestSellingCategoery' 
import { useQuery } from 'react-query';
import axios from 'axios';

const Layout = () => {
    const slides = [
        {
            imgSrc: 'https://bazaar.ui-lib.com/assets/images/products/bag.png',
            heading: 'Fashionable \n Collection',
            paragraph: 'Get Free Shipping on all orders over $99.00',
        },
        {
            imgSrc: 'https://bazaar.ui-lib.com/assets/images/products/nike-black.png',
            heading: 'Fashionable \n Collection',
            paragraph: 'Get Free Shipping Products on all orders over $99.00',
        },
        // Add more slides as needed
    ];
    const productImages = [
        'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt4.png&w=256&q=75',
        'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt5.png&w=256&q=75',
        'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fsmartwatch-2.png&w=256&q=75',
        'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcasmatics.jpg&w=256&q=75'
    ]
    // Fetch Products category Name
    const { data: products } = useQuery('categorey', async () => {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        return response.data.map((product, index) => ({
            name: product,
            image: productImages[index],
        }));
    });
  
    return (
        <>
            <Box  >
      
                <Box>
                    <SliderComponent slides={slides} buttonText="Shop Now" />
                    <BestSellingCategoery title="Best selling Categories" products={products} />

                    <BestSellingProducts buttonText="Quick View"></BestSellingProducts>
                  
                </Box>
            </Box>

        </>
    )
}

export default Layout