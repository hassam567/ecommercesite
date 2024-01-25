// SingleProductDetail.js
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Typography, Box, Paper, Chip, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom'; // Import useParams
import AppToolbar from './AppToolBar';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Hidden from '@mui/material/Hidden';
import BasicMenu from './Menu';
import { useState } from 'react';
const SingleProductDetail = () => {
  const { productId } = useParams(); // Get productId from route parameters

  const { data: product, isLoading, isError } = useQuery(['SingleProductDetail', productId], async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return response.data;
  });
  const [selectedChip, setSelectedChip] = React.useState("Option 1"); // State to track the selected chip
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product details</div>;
  }
  const style = {
    Paper: {
      display: 'flex', flexDirection: 'row', backgroundColor: '#F6F9FC',
      height: "100vh",
      width: '100%'
    },
    img: {
      mixBlendMode: "multiply",
      height: "300px",
      width: "300px",
      marginLeft: "250px",
      marginTop: "150px"
    },

    Box: {
      marginTop: "35px",
      marginLeft: "190px",
      textAlign: "justify",

    },

    chipsContainer: {
      display: 'flex',
      gap: '8px',
      marginBottom: '8px',
      marginTop:"5px"
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
      webkitBoxAlign: "center",
      alignItems: "center",
     
      justifyContent:" center",
      position: "relative",
      boxSizing: "border-box",
     
      margin: "0px, 0px 36px",
      cursor: "pointer",
     
      verticalAlign: "middle",
      
    
      lineHeight: "1.75",
      padding: "6px 1.75rem",
      borderRadius: "4px",
     
      color: "rgb(255, 255, 255)",
      backgroundColor:" rgb(210, 63, 87)",
      boxShadow: "rgba(43, 52, 69, 0.1)",
      minWidth: "0px",
      minHeight: "0px",
     
      textTransform: "capitalize",
      height: "40px",
      transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
    }
  }

  return (
    <>
      <Paper style={style.Paper}>
      <Box >

        <img src={product.image} alt={product.title} style={style.img} />
      </Box>
        <Box style={style.Box}>
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
          {/* MUI Chips labeled "Box" */}
           <Typography variant="h7" sx={{ fontWeight:"bold" }}>Option</Typography> 

          <Box style={style.chipsContainer}>
            <Chip
              label="Option 1"
              variant="outlined"
              sx={{
                color: "black",
                ...style.chip,
                ...(selectedChip === "Option 1" ? style.selectedChip : style.firstChip),
              }}
              onClick={() => setSelectedChip("Option 1")}
            />
            <Chip
              label="Option 2"
              variant="outlined"
              style={style.chip}
              sx={{ ...(selectedChip === "Option 2" && style.selectedChip) }}
              onClick={() => setSelectedChip("Option 2")}
            />
            <Chip
              label="Option 3"
              variant="outlined"
              style={style.chip}
              sx={{ ...(selectedChip === "Option 3" && style.selectedChip) }}
              onClick={() => setSelectedChip("Option 3")}
            />
            <Chip
              label="Option 4"
              variant="outlined"
              style={style.chip}
              sx={{ ...(selectedChip === "Option 4" && style.selectedChip) }}
              onClick={() => setSelectedChip("Option 4")}
            />
          </Box>
          <Typography variant="h8" sx={{  fontWeight:"bold" }}>Type</Typography>

          <Box style={style.chipsContainer}>
            <Chip
              label="type 1"
              variant="outlined"
              sx={{
                color: "black",
                ...style.chip,
                ...(selectedChip === "Option 1" ? style.selectedChip : style.firstChip),
              }}
              onClick={() => setSelectedChip("Option 1")}
            />
            <Chip
              label="type 2"
              variant="outlined"
              style={style.chip}
              sx={{ ...(selectedChip === "Option 2" && style.selectedChip) }}
              onClick={() => setSelectedChip("Option 2")}
            />
            <Chip
              label="type 3"
              variant="outlined"
              style={style.chip}
              sx={{ ...(selectedChip === "Option 3" && style.selectedChip) }}
              onClick={() => setSelectedChip("Option 3")}
            />
            
          </Box>
          <br />
          <Typography variant="h4" sx={{color:"#D23F57", fontWeight:"bold"}}>${product.price}</Typography>
          <Typography variant="h8">Stock Available</Typography>
           <br/>
           <br />
           <Button style={style.customButton}>Add to Cart</Button>
        </Box>
      </Paper>
    </>
  );
};

export default SingleProductDetail;
