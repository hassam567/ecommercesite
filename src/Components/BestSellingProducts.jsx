import React, { useState } from 'react';
import { Typography, Grid, Paper, Button, Box, Rating } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SingleProductDetail from './SingleProductDetail'




const styles = {
    heading: {
        fontSize: '25px',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '32px',
        marginTop: '30px',
    },
    productItem: {
        position: 'relative',
        overflow: 'hidden',
        height: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E3E9EF',
        flexDirection: 'column',
    },
    productImage: {
        width: '40%',
        height: '40%',
        transition: 'transform 0.3s',
        cursor: 'pointer',
        mixBlendMode: 'multiply',
    },
    productTitleButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '8px',
        background: 'rgba(0, 0, 0, 0.8)',
        border: 'none',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        width: '100%',
        display: 'none',
    },
    grid: {
        paddingLeft: '156px',
        paddingRight: '156px',
        marginBottom: '40px',
    },
};

// Responsive styles for screen width less than 600px
const responsiveStyles = {
    grid: {
        paddingLeft: '16px',
        paddingRight: '16px',
        marginBottom: '40px',
    },
    productTitleButton: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        padding: '8px',
        background: 'rgba(0, 0, 0, 0.8)',
        border: 'none',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        fontSize: '8px',
        maxWidth: '150px',
        maxHeight: '40px',
        overflow: 'hidden',
        display: 'none',
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    productInfo: {

        marginTop: "20px",
        textAlign: "center"

    },
    rating: {



        fontSize: "0.999rem", // Decrease the size of stars // Decrease the size of stars
    },
};

function BestSellingProducts({buttonText}) {
 
    const { data: products } = useQuery('AllProductsData', async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    });

    const [hoveredItem, setHoveredItem] = useState(null);

    const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
    return (
        <>
            <Typography variant='h2' style={styles.heading}>
                Best Selling Products
            </Typography>

            <Grid container spacing={3} style={window.innerWidth <= 600 ? responsiveStyles.grid : styles.grid}>
                {products &&
                    products.slice(0, 4).map((product, index) => (
                        <Grid item xs={12} sm={6} md={3} key={product.name}>
                            <Paper
                                elevation={1}
                                style={{
                                    ...styles.productItem,
                                }}
                                onClick={() => handleProductClick(product.id)}
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                                
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{
                                        ...styles.productImage,
                                        ...(window.innerWidth <= 600 && responsiveStyles.productImage),
                                        transform: index === hoveredItem ? 'scale(1.1)' : 'scale(1)',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.1)';
                                        e.currentTarget.nextElementSibling.style.display = 'block';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.nextElementSibling.style.display = index === hoveredItem ? 'block' : 'none';
                                    }}
                                />

                                <Button
                                    style={{
                                        ...styles.productTitleButton,
                                        ...(window.innerWidth <= 200 && responsiveStyles.productTitleButton),
                                        display: index === hoveredItem ? 'block' : 'none',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#333';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                                    }}
                                >
                                    {buttonText}
                                </Button>

                            </Paper>
                            <Box style={responsiveStyles.productInfo} >
                                <Typography variant="subtitle1" sx={{ color: "#B7BCC5" }}>{product.title}</Typography>
                                <Typography variant="subtitle2" sx={{ color: "#2B3445" }}>${product.price}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
                                    
                                    <Rating name="read-only" value={4} readOnly style={responsiveStyles.rating} />
                                    <Typography variant="body2" sx={{ color: "#B7BCC5", marginLeft: '8px' , fontSize:"12px" }}>(0 Reviews)</Typography>
                                </Box>
                            </Box>

                           
                        </Grid>
                    ))}
            </Grid>
          
          
          
        </>
    );
}

export default BestSellingProducts;
