import React from 'react';
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#1d1f28',
                color: '#fff',
                padding: '20px',
                textAlign: 'center',
              
                bottom: 0,
                left: 0,
                right: 0,

                

            }}
        >
            <Container>
                <Grid container spacing={4}>
                    {/* First Column */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Avatar
                                alt="Image or Icon"
                                src="	https://bazaar.ui-lib.com/assets/images/logo.svg"
                                sx={{ height: "200", width: "100px",marginBottom: "20px" }}
                              

                            />
                            <Typography variant="h8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</Typography>

                        </Box>
                    </Grid>

                    {/* Second Column */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ marginBottom: "30px" }}>About Us</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                           
                            <Typography variant="h8" sx={{ marginBottom: "20px" }}>Careers</Typography>
                            <Typography variant="h9" sx={{ marginBottom: "20px" }}>Our Stores</Typography>
                            <Typography variant="h9" sx={{ marginBottom: "20px" }}>Our Cares</Typography>
                            <Typography variant="h9" sx={{ marginBottom: "20px" }}>Terms & Conditions</Typography>
                            <Typography variant="h9" sx={{ marginBottom: "20px" }}>Privacy Policy</Typography>

                        </Box>



                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ marginBottom: "30px" }}>Customer Care</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", marginBottom: '20px' }}>
                            <Typography variant="h9" sx={{ marginBottom: "20px" }}>Help Center</Typography>
                            <Typography variant="h9" sx={{ marginBottom: "20px" }}>Track Your Order</Typography>
                            <Typography variant="h9" sx={{ marginBottom: "20px" }}>Corporate & Bulk Purchasing</Typography>
                            <Typography variant="h9" sx={{ marginBottom: "20px" }}>Returns & Refunds</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ marginBottom: "30px" }}>Contact Us</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", marginBottom: '20px' }}>
                            <Typography variant="body1"  sx={{ marginBottom: "20px" }}>
                                70 Washington Square South, New York, NY 10012, United States
                            </Typography>
                            <Typography variant="body1"  sx={{ marginBottom: "20px" }}>Email: uilib.help@gmail.com</Typography>
                            <Typography variant="body1"  sx={{ marginBottom: "20px" }}>Phone: +1 1123 456 780</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
