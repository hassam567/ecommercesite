import React from 'react';
import { Typography, Button, Grid, Paper } from '@mui/material';

const styles = {
  heading: {
    fontSize: '25px',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '32px',
    marginTop: '30px',
  },
  categoryItem: {
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  },
  categoryTitleButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: '8px',
    background: 'transparent',
    border: 'none',
    color: 'black',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    backgroundColor: 'rgba(255,255,255, .67)',
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
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryTitleButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: '8px',
    background: 'transparent',
    border: 'none',
    color: 'black',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    backgroundColor: 'rgba(255,255,255, .67)',
    fontSize:"8px",
    maxWidth: '150px', // Set the maximum width
    maxHeight: '40px', // Set the maximum height
    overflow: 'hidden'
  },
};

function BestSellingCategoery({ title, products }) {
  return (
    <>
      <Typography variant='h2' style={styles.heading}>
        {title}
      </Typography>

      <Grid container spacing={3} style={window.innerWidth <= 600 ? responsiveStyles.grid : styles.grid}>
        {products &&
          products.slice(0, 4).map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.name}>
              <Paper elevation={1} style={styles.categoryItem}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    ...styles.categoryImage,
                    ...(window.innerWidth <= 600 && responsiveStyles.categoryImage),
                    transform: 'scale(1)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <Button
                 style={window.innerWidth <= 200 ? responsiveStyles.categoryTitleButton : styles.categoryTitleButton}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#333';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255, .67)';
                    e.currentTarget.style.color = 'black';
                  }}
                >
                  {product.name}
                </Button>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default BestSellingCategoery;
