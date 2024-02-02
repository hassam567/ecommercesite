// CartDisplay.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

const CartCard = ({ cart, onDelete }) => (
  <Card sx={{ marginBottom: '16px', width: "800px", marginLeft: "100px", position: 'relative' }}>
    <CardContent>
      <IconButton
        sx={{ position: 'absolute', top: '10px', right: '10px' }}
        onClick={onDelete}
        color="secondary"
      >
        <ClearIcon />
      </IconButton>
      <Typography variant="h6">Date: {cart.date}</Typography>
      {cart.products.map((product, productIndex) => (
        <div key={productIndex}>
          <Typography variant="body1">Product ID: {product.productId}</Typography>
          <Typography variant="body1">Quantity: {product.quantity}</Typography>
        </div>
      ))}
    </CardContent>
  </Card>
);

function CartDisplay() {
  const [cartData, setCartData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
 const {userId}=useParams()
  useEffect(() => {
    // Check if cartData exists in the location state
    if (location.state && location.state.cartData) {
      setCartData(location.state.cartData);
    }
  }, [location]);

 // ... (previous code)

const handleDeleteCart = (cartId) => {
  const updatedCartData = cartData.filter((cart) => cart.id !== cartId);
  localStorage.setItem('cartItems', JSON.stringify(updatedCartData));
  setCartData((prevCartData) => prevCartData.filter((cart) => cart.id !== cartId));

  // Delay the navigation to allow for state update
  setTimeout(() => {
    navigate(`/cart/`);
  }, 0);
  
  // Also, navigate to CartDisplay to update UI
  navigate(`/cart-display/allcart`, { state: { cartData: updatedCartData } });
};

// ... (remaining code)


  return (
    <Box sx={{ backgroundColor: '#F6F9FC', minHeight: '100vh', padding: '16px' }}>
      <Box sx={{ marginTop: "50px" }}>
        {cartData.map((cart, index) => (
          <CartCard
            key={index}
            cart={cart}
            onDelete={() => handleDeleteCart(cart.id)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CartDisplay;
