// SingleProductDetail.js
import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Box, Paper, Chip, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';


import { useQuery, useQueryClient } from 'react-query';

const useStyles = () => ({
  ContentBox: {
    overflowY: 'auto',
    display: 'flex',
    flexDirection: { xs: "column", md: "row" },
    backgroundColor: '#F6F9FC',
    height: "100vh",
    width: '100%', // Set width to 100%

  },

  img: {
    mixBlendMode: "multiply",
  
    width: {sm:"100px",md:"300px"},
    height:{sm:"100px",md:"300px"},
    marginLeft: {xs:"100px",md:"250px"},
    marginTop: "150px"
  },

  Box: {
    marginTop: "35px",
    marginLeft: {xs:"100px",md:"250px"},
    textAlign: "justify",
    marginRight: "100px"

  },

  chipsContainer: {
    display: 'flex',
    gap: '8px',
    marginBottom: '8px',
    marginTop: "5px"
  },
  chip: {
    borderRadius: '3px',
    // Adjust the border radius for a rectangular shape
    cursor: "pointer"
  },


  selectedChip: {
    backgroundColor: '#FCE9EC', // Background color for the selected chip
    '&:hover': {
      backgroundColor: '#D23F57 !important', // Hover color for the selected chip
    },
  }
  ,
  customButton: {
    display: "inline-flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    margin: "0px 0px 36px",
    cursor: "pointer",
    verticalAlign: "middle",
    lineHeight: "1.75",
    padding: "6px 1.75rem",
    borderRadius: "4px",
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(210, 63, 87)",
    boxShadow: "rgba(43, 52, 69, 0.1)",
    
    textTransform: "capitalize",
    height:{sm:"80px", md:"45px"} ,
    width: "100%", // Set width to 100% for responsiveness
    maxWidth: "150px", // Set a maximum width if needed
  }
  
  
});

const SingleProductDetail = () => {

  const classes = useStyles();
  const { productId } = useParams();
  const [selectedChip, setSelectedChip] = useState({});

  const [cartResponse, setCartResponse] = useState(null);
  const queryClient = useQueryClient();

  const { data: product, isLoading, isError, refetch } = useQuery(['SingleProductDetail', productId], async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    console.log("sample " + response.data)
    return response.data;
  });


  const addToCart = async () => {
    try {
      const existingCartItem = queryClient.getQueryData('cartItems')?.find(item => item.products[0].productId === product.id);

      if (existingCartItem) {
        // If the product is already in the cart, update the quantity
        const updatedQuantity = existingCartItem.products[0].quantity + 1;

        // Update the quantity on the server
        await axios.put(`https://fakestoreapi.com/carts/${existingCartItem.id}`, {
          ...existingCartItem,
          products: [{
            ...existingCartItem.products[0],
            quantity: updatedQuantity,
          }],
        });

        // Fetch the latest cart data after updating the quantity
        const updatedCartData = await fetchCartItems();

        // Update the cart items in the query client
        queryClient.setQueryData('cartItems', updatedCartData);

      } else {
        // If the product is not in the cart, add a new item with quantity 1
        const postData = {
          userId: 5,
          date: new Date().toISOString(),
          products: [
            {
              productId: product.id,
              title: product.title,
              price: product.price,
              quantity: 1,
            },
          ],
        };

        const res = await axios.post('https://fakestoreapi.com/carts', postData);
        setCartResponse(res.data);

        // Update the cart items in the query client by adding the newly added product
        queryClient.setQueryData('cartItems', (prevData) => [...(prevData || []), res.data]);
      }
    } catch (error) {
      console.error('Error adding product to cart', error);
    }
  };

  // Fetch cart items function
  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/carts/user/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cart items:', error);
      throw new Error('Error fetching cart items');
    }
  };







  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product details</div>;
  }

  return (
    <>
      <Paper sx={classes.ContentBox}>
        <Box
          component="img"
          sx={classes.img}

          src={product.image} alt={product.title}

        />
       
        <Box sx={classes.Box}>
          <Typography variant="h4">{product.title}</Typography>
          <br />
          <Typography variant="body1">{product.category}</Typography>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ color: "#B7BCC5", fontSize: "12px", marginTop: 0, marginBottom: 0 }}>Rated: </Typography>
              <Rating name="read-only" value={4} readOnly style={{ fontSize: '16px', marginRight: '8px', marginLeft: "8px" }} />
              <Typography variant="body2" sx={{ color: "#B7BCC5", fontSize: "12px", marginTop: 0, marginBottom: 0 }}>(50)</Typography>
            </Box>
          </Box>
          <br />
          <Typography variant="h7" sx={{ fontWeight: "bold" }}>Option</Typography>
          <Box sx={classes.chipsContainer}>
            <Chip
              label="Option 1"
              variant="outlined"
              sx={{
                color: "black",
                ...classes.chip,
                ...(selectedChip === "Option 1" ? classes.selectedChip : classes.firstChip),
              }}
              onClick={() => setSelectedChip("Option 1")}
            />
            <Chip
              label="Option 1"
              variant="outlined"
              sx={{
                color: "black",
                ...classes.chip,
                ...(selectedChip === "Option 1" ? classes.selectedChip : classes.firstChip),
              }}
              onClick={() => setSelectedChip("Option 1")}
            />
            {/* Add other chips as needed */}
          </Box>
          <Typography variant="h8" sx={{ fontWeight: "bold" }}>Type</Typography>
          <Box sx={classes.chipsContainer}>
            <Chip
              label="type 1"
              variant="outlined"
              sx={{
                color: "black",
                ...classes.chip,
                ...(selectedChip === "Option 1" ? classes.selectedChip : classes.firstChip),
              }}
              onClick={() => setSelectedChip("Option 1")}
            />
            <Chip
              label="type 1"
              variant="outlined"
              sx={{
                color: "black",
                ...classes.chip,
                ...(selectedChip === "Option 1" ? classes.selectedChip : classes.firstChip),
              }}
              onClick={() => setSelectedChip("Option 1")}
            />

            {/* Add other chips as needed */}
          </Box>
          <br />
          <Typography variant="h4" sx={{ color: "#D23F57", fontWeight: "bold" }}>${product.price}</Typography>
          <Typography variant="h8">Stock Available</Typography>
          <br />
          <br />
          <Button sx={classes.customButton} onClick={addToCart}>Add to Cart</Button>

        </Box>


      </Paper>
    </>
  );
};

export default SingleProductDetail;
