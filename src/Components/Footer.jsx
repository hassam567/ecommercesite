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
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    {/* First Column */}
                    <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ display: "flex", flexDirection: "column", '& > *': { marginBottom: '20px' } }}>
                        <Avatar
                            alt="Image or Icon"
                            src="	https://bazaar.ui-lib.com/assets/images/logo.svg"
                            sx={{ height: "200", width: "100px" }}

                        />
                        <Typography variant="h8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</Typography>

                      </Box>
                    </Grid>

                    {/* Second Column */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{marginBottom:"30px"}}>About Us</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", '& > *': { marginBottom: '20px' } }}>
                            <Typography variant="h8">Careers</Typography>
                            <Typography variant="h9">Our Stores</Typography>
                            <Typography variant="h9">Our Cares</Typography>
                            <Typography variant="h9">Terms & Conditions</Typography>
                            <Typography variant="h9">Privacy Policy</Typography>
                        </Box>


                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{marginBottom:"30px"}}>Customer Care</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", '& > *': { marginBottom: '20px' } }}>
                            <Typography variant="h9">Help Center</Typography>
                            <Typography variant="h9">Track Your Order</Typography>
                            <Typography variant="h9">Corporate & Bulk Purchasing</Typography>
                            <Typography variant="h9">Returns & Refunds</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{marginBottom:"30px"}}>Contact Us</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", '& > *': { marginBottom: '20px' } }}>
                        <Typography variant="body1">
                            70 Washington Square South, New York, NY 10012, United States
                        </Typography>
                        <Typography variant="body1">Email: uilib.help@gmail.com</Typography>
                        <Typography variant="body1">Phone: +1 1123 456 780</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
