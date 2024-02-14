

import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState, useEffect } from 'react';

import {
  Badge,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/Grid.css'
export default function BasicMenu({ textColor, menuOptions, buttonText }) {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const fetchCartItems = async () => {
    try {
      // Note: Removed unnecessary API call
      return [];
    } catch (error) {
      console.error('Error fetching cart items:', error);
      throw new Error('Error fetching cart items');
    }
  };

  const { data: fetchedCartItems, refetch } = useQuery('cartItems', fetchCartItems);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = mergeCartItems(storedCartItems, fetchedCartItems);

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }, [fetchedCartItems]);

  const mergeCartItems = (existingCartItems, fetchedCartItems) => {
    const mergedCartItems = [...existingCartItems];

    if (Array.isArray(fetchedCartItems)) {
      fetchedCartItems.forEach((fetchedItem) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        const existingItemIndex = mergedCartItems.findIndex(
          (existingItem) => existingItem.products[0].productId === fetchedItem.products[0].productId
        );

        if (
          existingItemIndex !== -1 &&
          new Date(fetchedItem.date).getFullYear() === currentYear
        ) {
          mergedCartItems[existingItemIndex].products[0].quantity +=
            fetchedItem.products[0].quantity;
        } else if (
          new Date(fetchedItem.date).getFullYear() === currentYear
        ) {
          mergedCartItems.push(fetchedItem);
        }
      });
    }

    return mergedCartItems;
  };

  const handleOpen = () => {
    setOpen(true);
  };

 

  const handleDelete = async (productId) => {
    await deleteCartItem(productId);
    // Also, navigate to CartDisplay to update UI
    navigate(`/cart-display/allcart`, { state: { cartData: cartItems } });
  };

  const deleteCartItem = async (productId) => {
    try {
      const cartItemToDelete = cartItems.find((cart) => cart.products[0].productId === productId);

      if (cartItemToDelete) {
        // Note: Removed unnecessary API call
        setCartItems((prevCartItems) =>
          prevCartItems.filter((cart) => cart.products[0].productId !== productId)
        );

        const updatedCartItems = cartItems.filter((cart) => cart.products[0].productId !== productId);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      }
    } catch (error) {
      console.error('Error deleting cart item:', error);
      throw new Error('Error deleting cart item');
    }
  };

  const handleViewCart = async () => {
    try {
      // Use navigate to go to CartDisplay with the cart data
      navigate(`/cart-display/allcart`, { state: { cartData: cartItems } });
    } catch (error) {
      console.error('Error navigating to cart display:', error);
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index) => {
    setSelectedItem(index);
    handleClose();
  };


  return (
    <>
      <Box position={'fixed'} top={60} right={100} zIndex={1000} >
        <Box bgcolor="grey.200" borderRadius={16} padding={1}>
          <IconButton color="inherit" onClick={handleOpen}>
            <Badge color="error" badgeContent={cartItems.length} >
              <ShoppingCartIcon    />
            </Badge>
          </IconButton>
        </Box>
        </Box>
       <Button
        id="basic-button"
        aria-controls={anchorEl ? 'basic-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: textColor, display: 'flex', alignItems: 'center' }}
      >
        {buttonText}
        <KeyboardArrowDownIcon style={{ marginLeft: '5px' }} />
      </Button>
      <Popover
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(index)}
            style={{ color: textColor, fontWeight: selectedItem === index ? 'bold' : 'normal' }}
          >
            {option}
          </MenuItem>
        ))}
      </Popover>
     

        <Drawer anchor="right" open={open} onClose={handleClose}>
          <Box width={300}>
            <Box borderRadius={16} padding={1} sx={{ display: 'flex', alignItems: 'center', marginLeft: "30px" }}>
              <ShoppingCartIcon />
              <Typography variant="subtitle1" sx={{ marginLeft: "10px", display: "flex", alignItems: "center", marginTop: "20px", marginBottom: "20px" }}>
                {cartItems.length} items
              </Typography>
              <IconButton sx={{ marginLeft: "100px" }}>
                <ClearIcon onClick={handleClose} sx={{ fontSize: "19px" }} />
              </IconButton>
            </Box>
            <Divider sx={{ marginTop: '5px', marginBottom: '5px' }} />

            <List>
              {cartItems &&
                cartItems.map((cart, index) => (
                  <React.Fragment key={cart.id}>
                    {index !== 0 && <Divider />}
                    <ListItem>
                      <Box
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="space-between"
                        width="100%"
                        sx={{ marginLeft: "10px" }}
                        p={2}
                      >
                        <Box>
                          {cart.date && (
                            <Typography variant="body2" sx={{ fontSize: "13px" }}>
                              {new Date(cart.date).toLocaleDateString()}
                            </Typography>
                          )}
                        </Box>
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="flex-start"
                          sx={{ marginLeft: "20px" }}
                        >
                          <Typography sx={{ color: "#D64E64", textWrap: "nowrap", fontSize: "13px" }}>
                            Product ID: {cart.products && cart.products[0].productId}
                          </Typography>
                          <Typography sx={{ color: "#D64E64", fontSize: "13px" }}>
                            Quantity: {cart.products && cart.products[0].quantity}
                          </Typography>
                        </Box>
                        <IconButton
                          onClick={() => handleDelete(cart.products[0].productId)}
                          color="secondary"
                          sx={{ marginLeft: "20px" }}
                        >
                          <ClearIcon style={{ color: 'black', fontSize: "18px" }} />
                        </IconButton>
                      </Box>
                    </ListItem>
                  </React.Fragment>
                ))}
            </List>

            <Divider sx={{ marginTop: '5px', marginBottom: '5px' }} />
            {!cartItems || cartItems.length === 0 ? (
              <Typography variant="body2" align="center">
                Your cart is empty.
              </Typography>
            ) : null}
            <Box mt={2} textAlign="center" sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                variant='outlined'
                sx={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginBottom: "10px",
                  color: "#D23F57",
                  borderColor: "#D23F57",
                  '&:hover': {
                    borderColor: "#D23F57",
                  },
                }}
                onClick={handleViewCart}
              >
                View Cart
              </Button>
            </Box>
          </Box>
        </Drawer>
    </>
   
    
  );
}
